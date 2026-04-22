import { supabase } from "@/integrations/supabase/client";

export interface QuoteNotificationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  location?: string;
  timeline?: string;
  budget?: string;
  message: string;
}

const RECIPIENTS = [
  "info@aksteelservices.com",
  "nicholastempleman@gmail.com",
];

/**
 * Sends a quote notification to all internal recipients via the
 * Lovable Cloud transactional email system.
 *
 * Returns { ok: boolean, errors: string[] } – does NOT throw, so the
 * UI can still show success even if a single recipient fails.
 */
export async function sendQuoteNotification(
  data: QuoteNotificationData
): Promise<{ ok: boolean; errors: string[] }> {
  const idBase = crypto.randomUUID();
  const templateData = {
    firstName: data.firstName,
    lastName: data.lastName,
    customerEmail: data.email,
    phone: data.phone,
    company: data.company,
    service: data.service,
    location: data.location,
    timeline: data.timeline,
    budget: data.budget,
    message: data.message,
  };

  const errors: string[] = [];

  await Promise.all(
    RECIPIENTS.map(async (recipient) => {
      try {
        const { error } = await supabase.functions.invoke(
          "send-transactional-email",
          {
            body: {
              templateName: "quote-notification",
              recipientEmail: recipient,
              idempotencyKey: `quote-${idBase}-${recipient}`,
              templateData,
            },
          }
        );
        if (error) {
          errors.push(`${recipient}: ${error.message ?? "unknown error"}`);
        }
      } catch (err) {
        errors.push(
          `${recipient}: ${err instanceof Error ? err.message : "unknown error"}`
        );
      }
    })
  );

  return { ok: errors.length < RECIPIENTS.length, errors };
}
