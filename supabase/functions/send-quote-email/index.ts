const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

async function sendViaResend({
  apiKey,
  from,
  to,
  replyTo,
  subject,
  html,
  text,
}: {
  apiKey: string;
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
  text: string;
}) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject,
      html,
      text,
    }),
  });

  const bodyText = await response.text();
  return { ok: response.ok, status: response.status, bodyText };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('Email provider is not configured');
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      location,
      timeline,
      budget,
      message,
    } = await req.json();

    if (!firstName || !lastName || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required quote fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const safe = {
      firstName: escapeHtml(String(firstName)),
      lastName: escapeHtml(String(lastName)),
      email: escapeHtml(String(email)),
      phone: escapeHtml(String(phone)),
      company: company ? escapeHtml(String(company)) : '',
      service: service ? escapeHtml(String(service)) : '',
      location: location ? escapeHtml(String(location)) : '',
      timeline: timeline ? escapeHtml(String(timeline)) : '',
      budget: budget ? escapeHtml(String(budget)) : '',
      message: escapeHtml(String(message)),
    };

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Quote Request from AK Steel Services Website</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">${safe.firstName} ${safe.lastName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${safe.phone}">${safe.phone}</a></td></tr>
          ${safe.company ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td><td style="padding: 8px; border: 1px solid #ddd;">${safe.company}</td></tr>` : ''}
          ${safe.service ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Service</td><td style="padding: 8px; border: 1px solid #ddd;">${safe.service}</td></tr>` : ''}
          ${safe.location ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Location</td><td style="padding: 8px; border: 1px solid #ddd;">${safe.location}</td></tr>` : ''}
          ${safe.timeline ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Timeline</td><td style="padding: 8px; border: 1px solid #ddd;">${safe.timeline}</td></tr>` : ''}
          ${safe.budget ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Budget</td><td style="padding: 8px; border: 1px solid #ddd;">${safe.budget}</td></tr>` : ''}
        </table>
        <h3>Project Details:</h3>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 8px;">${safe.message}</p>
        <hr />
        <p style="color: #888; font-size: 12px;">Submitted from aksteelservices.com</p>
      </div>
    `;

    const emailText = [
      'New Quote Request from AK Steel Services Website',
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      company ? `Company: ${company}` : null,
      service ? `Service: ${service}` : null,
      location ? `Location: ${location}` : null,
      timeline ? `Timeline: ${timeline}` : null,
      budget ? `Budget: ${budget}` : null,
      '',
      'Project Details:',
      String(message),
      '',
      'Submitted from aksteelservices.com',
    ]
      .filter(Boolean)
      .join('\n');

    const subject = `New Quote Request from ${firstName} ${lastName}`;

    const primarySend = await sendViaResend({
      apiKey: resendApiKey,
      from: 'AK Steel Services <noreply@notify.aksteelservices.com>',
      to: 'info@aksteelservices.com',
      replyTo: String(email),
      subject,
      html: emailHtml,
      text: emailText,
    });

    if (primarySend.ok) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const fallbackSend = await sendViaResend({
      apiKey: resendApiKey,
      from: 'AK Steel Services <onboarding@resend.dev>',
      to: 'info@aksteelservices.com',
      replyTo: String(email),
      subject,
      html: emailHtml,
      text: emailText,
    });

    if (!fallbackSend.ok) {
      throw new Error(
        `Email send failed. Primary (${primarySend.status}): ${primarySend.bodyText} | Fallback (${fallbackSend.status}): ${fallbackSend.bodyText}`
      );
    }

    return new Response(JSON.stringify({ success: true, fallback: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('send-quote-email error:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
