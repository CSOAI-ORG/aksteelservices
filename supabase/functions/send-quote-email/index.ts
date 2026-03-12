import { createClient } from 'npm:@supabase/supabase-js@2'

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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Server configuration error');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

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
    const messageId = crypto.randomUUID();

    // Enqueue into the transactional_emails queue for Lovable's built-in email system
    const { error: enqueueError } = await supabase.rpc('enqueue_email', {
      queue_name: 'transactional_emails',
      payload: {
        message_id: messageId,
        to: 'info@aksteelservices.com',
        from: 'AK Steel Services <noreply@notify.aksteelservices.com>',
        sender_domain: 'notify.aksteelservices.com',
        subject,
        html: emailHtml,
        text: emailText,
        purpose: 'transactional',
        label: 'quote-request',
        queued_at: new Date().toISOString(),
      },
    });

    if (enqueueError) {
      throw new Error(`Failed to enqueue email: ${enqueueError.message}`);
    }

    return new Response(JSON.stringify({ success: true }), {
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
