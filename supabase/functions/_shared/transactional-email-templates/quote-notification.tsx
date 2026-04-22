import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'AK Steel Services'

interface QuoteNotificationProps {
  firstName?: string
  lastName?: string
  customerEmail?: string
  phone?: string
  company?: string
  service?: string
  location?: string
  timeline?: string
  budget?: string
  message?: string
}

const Field = ({ label, value }: { label: string; value?: string }) => {
  if (!value) return null
  return (
    <Text style={fieldRow}>
      <span style={fieldLabel}>{label}:</span>{' '}
      <span style={fieldValue}>{value}</span>
    </Text>
  )
}

const QuoteNotificationEmail = ({
  firstName,
  lastName,
  customerEmail,
  phone,
  company,
  service,
  location,
  timeline,
  budget,
  message,
}: QuoteNotificationProps) => {
  const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'New customer'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New quote request from {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Quote Request</Heading>
          <Text style={lead}>
            A new quote request was submitted on the {SITE_NAME} website.
          </Text>

          <Section style={card}>
            <Field label="Name" value={fullName} />
            <Field label="Email" value={customerEmail} />
            <Field label="Phone" value={phone} />
            <Field label="Company" value={company} />
            <Field label="Service" value={service} />
            <Field label="Location" value={location} />
            <Field label="Timeline" value={timeline} />
            <Field label="Budget" value={budget} />
          </Section>

          {message ? (
            <>
              <Heading as="h2" style={h2}>
                Project Details
              </Heading>
              <Section style={messageBox}>
                <Text style={messageText}>{message}</Text>
              </Section>
            </>
          ) : null}

          <Hr style={hr} />
          <Text style={footer}>
            Reply directly to this email to contact the customer.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: QuoteNotificationEmail,
  subject: (data: Record<string, any>) => {
    const name = [data.firstName, data.lastName].filter(Boolean).join(' ').trim()
    return `New Quote Request${name ? ` from ${name}` : ''}`
  },
  displayName: 'Quote notification (internal)',
  previewData: {
    firstName: 'Jane',
    lastName: 'Smith',
    customerEmail: 'jane@example.com',
    phone: '07700 900000',
    service: 'Steel Beam Installation',
    location: 'Gravesend, Kent',
    timeline: '1–2 months',
    message: 'Need a structural steel beam for a kitchen extension.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '620px' }
const h1 = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#000000',
  margin: '0 0 8px',
}
const h2 = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#000000',
  margin: '24px 0 8px',
}
const lead = { fontSize: '14px', color: '#55575d', margin: '0 0 18px' }
const card = {
  backgroundColor: '#f7f7f8',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '16px 18px',
}
const fieldRow = { fontSize: '14px', color: '#1f2937', margin: '4px 0' }
const fieldLabel = { color: '#6b7280', fontWeight: 'bold' as const }
const fieldValue = { color: '#111827' }
const messageBox = {
  backgroundColor: '#f7f7f8',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '14px 16px',
}
const messageText = {
  fontSize: '14px',
  color: '#1f2937',
  margin: 0,
  whiteSpace: 'pre-wrap' as const,
}
const hr = { borderColor: '#e5e7eb', margin: '28px 0 14px' }
const footer = { fontSize: '12px', color: '#888', margin: 0 }
