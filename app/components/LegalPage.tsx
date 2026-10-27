
'use client';

import Link from 'next/link';
import {
  ArrowRight,
  ArrowUp,
  BookOpen,
  CheckCircle2,
  FileText,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

const phone = '254759713882';

const policyContent = {
  terms: {
    label: 'WEBSITE INFORMATION',
    title: 'Terms & Conditions',
    subtitle:
      'The terms for using the La Quita Hotel & Suites website and making enquiries about our services.',
    intro:
      'These terms explain how to use this website and how information displayed here relates to enquiries and bookings. Please read them before relying on website information to make travel or booking decisions.',
    sections: [
      {
        id: 'website-use',
        title: '1. Using this website',
        paragraphs: [
          'This website provides information about La Quita Hotel & Suites, its services and ways to contact the hotel. You agree to use the website lawfully, respectfully and without attempting to disrupt, damage or gain unauthorised access to the website or its systems.',
          'You are responsible for ensuring that information you submit or provide in an enquiry is accurate and that you have permission to share any personal information included in your message.',
        ],
      },
      {
        id: 'enquiries',
        title: '2. Enquiries are not confirmed bookings',
        paragraphs: [
          'Submitting an enquiry, selecting dates or opening WhatsApp does not, by itself, create a confirmed reservation. A booking is confirmed only when the hotel communicates confirmation and the applicable booking terms to you.',
          'Before making non-refundable travel arrangements, wait for the hotel to confirm your reservation, the dates, the quoted rate, what is included and any applicable payment or cancellation conditions.',
        ],
      },
      {
        id: 'prices',
        title: '3. Prices, services and availability',
        paragraphs: [
          'Prices, packages, room availability, menus, opening arrangements and other service details may change. An old advertisement, photograph, blog article or website description should not be treated as a guarantee of the current offer.',
          'Ask the hotel to confirm the current rate, the currency, what is included, any additional charges and the availability of a service for your requested date before you make a booking or payment.',
        ],
      },
      {
        id: 'payment',
        title: '4. Payment and booking conditions',
        paragraphs: [
          'The hotel will communicate the applicable booking terms, required payment, accepted payment methods and any deposit or advance-payment arrangements when responding to a reservation request.',
          'Where full or partial payment is required before room occupancy, the amount and relevant requirement should be communicated as part of the booking arrangements. Always obtain confirmation of the amount due and keep your payment record.',
        ],
      },
      {
        id: 'guest-responsibilities',
        title: '5. Guest responsibilities',
        paragraphs: [
          'Guests must provide accurate booking details, comply with reasonable hotel instructions, respect other guests and staff, and take proper care of rooms, equipment, furniture and other hotel property.',
          'Valid identification is required at check-in. Guests may be responsible for loss or damage attributable to them, subject to the applicable booking terms and law. Report any problem or damage to hotel staff as soon as reasonably possible.',
        ],
      },
      {
        id: 'images',
        title: '6. Photographs and illustrative visuals',
        paragraphs: [
          'Website photographs are provided to help visitors understand the hotel and its services. Some lounge and conference visuals may be illustrative renderings rather than photographs of the actual facilities.',
          'If a room feature, venue layout, equipment or other detail is important to your decision, request current photographs and confirmation from the hotel before booking.',
        ],
      },
      {
        id: 'third-party',
        title: '7. External links and third-party services',
        paragraphs: [
          'This website may link to services such as WhatsApp or map providers to help you contact the hotel or find its location. Those services are operated by third parties and are subject to their own terms and privacy policies.',
          'La Quita does not control third-party websites and is not responsible for content, availability or terms on those external sites. Check their information before using them.',
        ],
      },
      {
        id: 'liability',
        title: '8. Website information and liability',
        paragraphs: [
          'We aim to keep website information useful and accurate, but cannot guarantee that every item will always be complete, current or available. Please verify important booking details directly with the hotel.',
          'Nothing in these terms excludes or limits any right, remedy or liability that cannot lawfully be excluded or limited under applicable law. Any limitations applying to website use are subject to that requirement.',
        ],
      },
      {
        id: 'law-changes',
        title: '9. Changes and applicable law',
        paragraphs: [
          'These website terms may be updated as the website or hotel services change. The version published on this page applies to website use from its stated update date, subject to applicable law.',
          'The terms governing a confirmed reservation are the terms communicated for that booking and any mandatory rights provided by applicable law. These website terms do not replace a booking confirmation or a separately agreed contract.',
        ],
      },
      {
        id: 'contact',
        title: '10. Questions about these terms',
        paragraphs: [
          'For questions about the website, a service or a proposed booking, contact La Quita Hotel & Suites through the contact page or WhatsApp. For a reservation, include your booking reference if you already have one.',
        ],
      },
    ],
  },

  privacy: {
    label: 'YOUR INFORMATION',
    title: 'Privacy Policy',
    subtitle:
      'How La Quita Hotel & Suites handles information shared through this website and related enquiries.',
    intro:
      'We take privacy seriously. This policy explains the information you may share when browsing the website or contacting La Quita Hotel & Suites, why it may be used and how you can make a privacy request.',
    sections: [
      {
        id: 'information',
        title: '1. Information we may receive',
        paragraphs: [
          'Depending on how you interact with us, information may include your name, phone number, email address if you provide one, enquiry details, preferred dates, number of guests, booking information and messages you send to the hotel.',
          'If you use the website enquiry form, the form currently prepares a WhatsApp message from the details you select and opens WhatsApp for you to review and send. The website form itself does not create a hotel reservation or submit the request into a hotel booking database.',
          'Website hosting and security services may process technical information such as requests, device or browser information, timestamps and security logs. The precise records kept depend on the hosting and service providers used for the live website.',
        ],
      },
      {
        id: 'purposes',
        title: '2. How information may be used',
        paragraphs: [
          'Information you choose to provide may be used to respond to enquiries, discuss availability and rates, process and manage reservations, communicate booking changes, provide requested hotel services, handle feedback and maintain safety and business records.',
          'Information should be used only for appropriate, specified purposes and handled in line with applicable data-protection requirements. If a new purpose or a different use requires additional notice or permission under the law, that should be addressed before the information is used for that purpose.',
        ],
      },
      {
        id: 'whatsapp',
        title: '3. WhatsApp and other third-party services',
        paragraphs: [
          'When you click a WhatsApp link, you leave the website and use WhatsApp to communicate with the hotel. You decide whether to send the prepared message. WhatsApp processes information under its own terms and privacy policy.',
          'This website may also link to mapping or other external services. If you open an external service, its own privacy terms and practices apply to your interaction with that service.',
        ],
      },
      {
        id: 'sharing',
        title: '4. When information may be shared',
        paragraphs: [
          'Information may be made available to authorised hotel personnel who need it to handle your enquiry or provide a requested service. It may also be processed by service providers supporting website hosting, communication, security or business operations where necessary.',
          'Information may be disclosed when required by law or in connection with a lawful request. It should not be sold as a customer list. Any handling by third-party services remains subject to their own roles, terms and applicable legal requirements.',
        ],
      },
      {
        id: 'retention',
        title: '5. Storage, retention and security',
        paragraphs: [
          'Information should be retained only for as long as reasonably necessary for the purpose for which it was collected, legitimate business recordkeeping and applicable legal requirements.',
          'Reasonable safeguards should be used to protect personal information against unauthorised access, disclosure, alteration or loss. No internet transmission or electronic storage method can be guaranteed to be completely secure.',
          'The exact retention periods and systems used depend on the hotel’s actual booking, accounting, communication and hosting arrangements. Those arrangements should be reviewed and documented before publication of the final policy.',
        ],
      },
      {
        id: 'rights',
        title: '6. Your data-protection rights',
        paragraphs: [
          'Subject to applicable Kenyan law and any relevant exceptions, you may have rights to be informed about the use of your personal data, request access, seek correction of inaccurate information, object to certain processing and request deletion where the law permits or requires it.',
          'To submit a request, contact the hotel using the details below. Please provide enough information for the team to understand and verify your request without sending unnecessary sensitive information. The hotel may need to retain some information where a legal obligation or other lawful basis applies.',
        ],
      },
      {
        id: 'international',
        title: '7. Visitors contacting us from abroad',
        paragraphs: [
          'International visitors can use the website and contact channels to ask about their stay. When you use third-party messaging or hosting services, your information may be processed under the provider’s terms and infrastructure arrangements, which may involve processing outside Kenya.',
          'Please avoid sending payment-card details, account passwords, identity-document images or other sensitive information through an ordinary enquiry message unless the hotel has specifically provided an appropriate and secure process.',
        ],
      },
      {
        id: 'children',
        title: '8. Children’s information',
        paragraphs: [
          'If an enquiry concerns a child or includes information about a child, a parent or responsible guardian should make the enquiry where appropriate. Do not send children’s personal information unless it is necessary for the request and provided through an appropriate channel.',
        ],
      },
      {
        id: 'changes',
        title: '9. Updates to this policy',
        paragraphs: [
          'This policy may be updated when website features, communication tools, service providers or legal requirements change. The published policy should be reviewed periodically to ensure it matches the hotel’s actual practices.',
        ],
      },
      {
        id: 'privacy-contact',
        title: '10. Contact us about privacy',
        paragraphs: [
          'For a privacy question or request, contact La Quita Hotel & Suites on +254 759 713 882 or through the website’s contact page. For general information about data-protection rights in Kenya, you may also consult the Office of the Data Protection Commissioner.',
        ],
      },
    ],
  },

  cancellation: {
    label: 'BOOKING INFORMATION',
    title: 'Booking, Cancellation & Refund Policy',
    subtitle:
      'Important information to confirm before making, changing or cancelling a reservation.',
    intro:
      'Your reservation details matter. This page explains how to request changes or cancellations and how to clarify applicable payment and refund terms. The hotel must confirm the specific terms for your booking before it is treated as final.',
    sections: [
      {
        id: 'booking-confirmation',
        title: '1. When a booking is confirmed',
        paragraphs: [
          'A website enquiry or WhatsApp message is a request for information, not a confirmed reservation. A booking is confirmed when the hotel communicates acceptance and provides the relevant booking details, including the dates, rate and applicable terms.',
          'Before making non-refundable travel arrangements, obtain written confirmation of your reservation and keep a copy of the messages or documents explaining the booking terms.',
        ],
      },
      {
        id: 'payment-deposits',
        title: '2. Rates, deposits and advance payments',
        paragraphs: [
          'The hotel will communicate the rate, accepted payment arrangements and any deposit or advance payment required for the specific reservation. Confirm what the price includes and whether any additional charges apply.',
          'Do not rely on an old rate or a message for different dates. Request confirmation of the total amount and the applicable payment deadline before sending payment.',
        ],
      },
      {
        id: 'cancelling',
        title: '3. How to request a cancellation',
        paragraphs: [
          'Contact the hotel as soon as possible if you need to cancel. Use the phone or WhatsApp details on the website and include the name used for the reservation, the booking reference if available, and the dates of the stay.',
          'Ask the hotel to acknowledge your cancellation request in writing and explain the cancellation terms and any charges that apply to your booking. Keep the acknowledgement for your records.',
        ],
      },
      {
        id: 'changes',
        title: '4. Changes to a reservation',
        paragraphs: [
          'Requests to change dates, room arrangements, guest numbers or other booking details are subject to availability and confirmation by the hotel. A change may affect the rate or other terms.',
          'Do not assume a change has been accepted until the hotel confirms the revised reservation and any revised price or payment requirement.',
        ],
      },
      {
        id: 'refunds',
        title: '5. Refunds and cancellation charges',
        paragraphs: [
          'Refund eligibility, any cancellation charge and the method and timing of a refund depend on the specific booking terms communicated before confirmation, the payment method and applicable law.',
          'The hotel should clearly communicate any non-refundable amount, cancellation deadline, no-show treatment and refund conditions before the guest commits to the booking. If these details were not clear, contact the hotel for written clarification.',
          'Where a refund is due, the hotel should explain the next steps and any processing time that depends on the payment provider. Nothing in this page is intended to remove a consumer right that applies under mandatory law.',
        ],
      },
      {
        id: 'late-arrival',
        title: '6. Late arrival and no-shows',
        paragraphs: [
          'If you expect to arrive later than planned, contact the hotel as soon as possible. Ask whether your arrival arrangements need to be updated and whether any terms apply to late arrival or failure to arrive.',
          'Any no-show charge or treatment must be based on the terms communicated for the reservation and applicable law. Do not assume that a booking can be held indefinitely without confirmation.',
        ],
      },
      {
        id: 'hotel-cancellation',
        title: '7. If the hotel cannot honour a confirmed booking',
        paragraphs: [
          'If the hotel advises that it cannot honour a confirmed reservation, contact the team to obtain the reason, available alternatives and details of any refund or other resolution that may apply under the booking terms and applicable law.',
          'Ask for the outcome to be confirmed in writing so that you have a clear record of the arrangement.',
        ],
      },
      {
        id: 'before-paying',
        title: '8. Before making a payment',
        paragraphs: [
          'Please confirm all of the following before paying: the dates, guest details, total price, what is included, deposit or advance-payment requirements, cancellation deadline, refund conditions and how a reservation is confirmed.',
          'If any part of the terms is unclear, ask the hotel to explain it in writing before proceeding.',
        ],
      },
      {
        id: 'cancellation-contact',
        title: '9. Request help with a booking',
        paragraphs: [
          'Contact La Quita Hotel & Suites through the website or WhatsApp on +254 759 713 882. Include your reservation reference if you have one and avoid posting personal or payment information publicly.',
        ],
      },
    ],
  },

  guest: {
    label: 'GUEST INFORMATION',
    title: 'Guest House Rules',
    subtitle:
      'A shared understanding of guest responsibilities helps support a safe and welcoming stay.',
    intro:
      'These house rules outline practical expectations for guests staying at or using services at La Quita Hotel & Suites. Any additional booking-specific conditions communicated by the hotel also apply, subject to applicable law.',
    sections: [
      {
        id: 'identification',
        title: '1. Identification and registration',
        paragraphs: [
          'Guests must provide valid identification at check-in and provide accurate details needed for registration and the reservation. The hotel may request information reasonably required to verify a reservation and meet applicable requirements.',
          'If you are booking for another person or a group, make sure the relevant guests understand the booking arrangements and any identification requirements before arrival.',
        ],
      },
      {
        id: 'payment',
        title: '2. Payment and room occupancy',
        paragraphs: [
          'Guests must follow the payment terms communicated for their reservation. Full or partial payment may be required before room occupancy where this requirement has been communicated as part of the booking arrangements.',
          'Confirm the amount due and the accepted payment methods with the hotel. Keep your payment records and ask for confirmation of any payment or reservation made.',
        ],
      },
      {
        id: 'property',
        title: '3. Hotel property and damage',
        paragraphs: [
          'Guests must take reasonable care of the room, furniture, electronics, fittings, keys and other hotel property. Hotel property must not be deliberately damaged, removed or taken away without permission.',
          'Guests may be held responsible for loss or damage attributable to them, subject to the booking terms and applicable law. Any charge should be explained by the hotel and linked to the relevant loss or damage.',
          'Please report existing damage, accidents or missing items promptly to reception so the matter can be checked and addressed.',
        ],
      },
      {
        id: 'conduct',
        title: '4. Respectful conduct',
        paragraphs: [
          'Guests are expected to treat other guests and staff respectfully and avoid conduct that creates a safety risk, damages property or unreasonably disrupts others.',
          'Follow reasonable instructions from hotel staff concerning safety, security and use of the facilities. If you have a question about a rule, please ask reception for clarification.',
        ],
      },
      {
        id: 'visitors',
        title: '5. Occupancy and visitors',
        paragraphs: [
          'Guests should ensure that the room is used only in accordance with the reservation and any occupancy conditions communicated by the hotel. Ask reception before changing the number of people staying in a room or arranging additional visitors where this may affect the booking.',
          'Changes in occupancy or room arrangements may require approval and may affect the rate or booking terms.',
        ],
      },
      {
        id: 'security',
        title: '6. Personal belongings and security',
        paragraphs: [
          'Guests should safeguard their personal belongings, identification, valuables and travel documents. Ask the hotel about available storage or security arrangements rather than assuming a particular facility is provided.',
          'Report lost property, a security concern or an incident to hotel staff as soon as possible. Any liability is subject to applicable law and the particular circumstances.',
        ],
      },
      {
        id: 'facilities',
        title: '7. Using hotel facilities',
        paragraphs: [
          'Use rooms, dining areas, lounge areas, parking and any other facilities only for their intended purpose and according to instructions communicated by the hotel.',
          'Availability, operating arrangements and access conditions may vary. Please confirm a particular service before relying on it, especially when planning an event or visiting at a specific time.',
        ],
      },
      {
        id: 'issues',
        title: '8. Concerns and assistance',
        paragraphs: [
          'If you have a complaint, need assistance or believe these rules have been applied incorrectly, speak to reception or contact the hotel team. Providing the relevant date, room or booking reference helps the hotel understand the concern.',
          'Nothing in these rules removes rights or remedies available under applicable law.',
        ],
      },
    ],
  },

  cookies: {
    label: 'WEBSITE TECHNOLOGY',
    title: 'Cookie Policy',
    subtitle:
      'Information about cookies, browser storage and links to external online services.',
    intro:
      'Cookies are small files or pieces of data that a website or service may store in a browser. This page explains how to understand and manage cookies when using the La Quita Hotel & Suites website.',
    sections: [
      {
        id: 'what',
        title: '1. What cookies are',
        paragraphs: [
          'Cookies and similar technologies may be used to support website functionality, remember settings, understand website use or support advertising. Whether a particular cookie is used depends on the features and third-party services configured for the live website.',
        ],
      },
      {
        id: 'current-use',
        title: '2. How this website may use cookies',
        paragraphs: [
          'The current website code includes navigation, local page content and links that open external services such as WhatsApp or map searches. Those links do not by themselves mean that this website has installed analytics or advertising cookies.',
          'The hosting platform, Next.js configuration or future integrations may involve technical processing or storage needed to operate, secure and maintain the website. If analytics, advertising or other tracking tools are added, this policy should be updated to identify them and explain how they are used.',
        ],
      },
      {
        id: 'third-party',
        title: '3. Third-party services',
        paragraphs: [
          'When you follow a link to WhatsApp, Google Maps or another external website, the external provider may use its own cookies or similar technologies under its own policies. La Quita does not control the provider’s cookie practices.',
          'You can read WhatsApp’s current legal and privacy information on its official website. For other services, consult the policy published by that service.',
        ],
      },
      {
        id: 'manage',
        title: '4. Managing cookies in your browser',
        paragraphs: [
          'Most browsers let you view, delete or block cookies through their settings. The available controls differ by browser and device. Blocking all cookies may affect functionality on some websites.',
          'Use your browser’s official help information to learn how to manage cookies. If consent tools or tracking technologies are added to this website in the future, their controls and disclosures should be configured to match the tools actually in use and applicable law.',
        ],
      },
      {
        id: 'updates',
        title: '5. Updates to this policy',
        paragraphs: [
          'This policy should be updated whenever the website’s cookie, analytics, advertising or other tracking configuration changes. The published version should reflect the tools and providers actually in use.',
        ],
      },
      {
        id: 'cookie-contact',
        title: '6. Questions',
        paragraphs: [
          'If you have a question about this website, contact La Quita Hotel & Suites on +254 759 713 882 or through the contact page.',
        ],
      },
    ],
  },
} as const;

type PolicyName = keyof typeof policyContent;

const allPolicies = [
  { id: 'terms', title: 'Terms & Conditions', href: '/terms-and-conditions' },
  { id: 'privacy', title: 'Privacy Policy', href: '/privacy-policy' },
  {
    id: 'cancellation',
    title: 'Booking, Cancellation & Refunds',
    href: '/cancellation-policy',
  },
  { id: 'guest', title: 'Guest House Rules', href: '/guest-policy' },
  { id: 'cookies', title: 'Cookie Policy', href: '/cookie-policy' },
] as const;

export default function LegalPage({ policy }: { policy: PolicyName }) {
  const page = policyContent[policy];

  const whatsappMessage = encodeURIComponent(
    `Hello La Quita Hotel & Suites. I have a question about your ${page.title}.`
  );

  return (
    <main className="legal-page">
      <style jsx global>{`
        .legal-page {
          min-height: 100vh;
          background: #f7f4ed;
          color: #211d18;
          font-family: 'DM Sans', Arial, sans-serif;
        }

        .legal-page * {
          box-sizing: border-box;
        }

        .legal-page a {
          text-decoration: none;
        }

        .legal-topline {
          min-height: 35px;
          padding: 8px 6.5%;
          background: #211d18;
          color: #eee6d8;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-size: 9px;
          letter-spacing: 1.4px;
        }

        .legal-topline a {
          color: inherit;
        }

        .legal-nav {
          min-height: 80px;
          padding: 12px 6.5%;
          background: #fbf9f4;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border-bottom: 1px solid #e5dfd3;
        }

        .legal-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #211d18;
          flex-shrink: 0;
        }

        .legal-brand img {
          display: block;
          width: 52px;
          height: 50px;
          object-fit: contain;
        }

        .legal-brand b,
        .legal-brand small {
          display: block;
        }

        .legal-brand b {
          font-size: 16px;
          letter-spacing: 2.4px;
        }

        .legal-brand small {
          font-size: 7px;
          letter-spacing: 2px;
          margin-top: 4px;
        }

        .legal-nav-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 11px;
        }

        .legal-nav-links a {
          color: #39332c;
        }

        .legal-nav-links a:hover {
          color: #a52e22;
        }

        .legal-hero {
          padding: 65px 9% 58px;
          background: #29231d;
          color: white;
        }

        .legal-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 20px;
          color: #e8b849;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .legal-eyebrow svg {
          flex-shrink: 0;
        }

        .legal-hero h1 {
          max-width: 900px;
          font: 500 clamp(39px, 5.7vw, 68px)/1.08 'Playfair Display', Georgia, serif;
          letter-spacing: -1px;
          margin: 0;
        }

        .legal-hero > p:last-child {
          max-width: 750px;
          color: #d7cfc2;
          font-size: 13px;
          line-height: 1.9;
          margin: 21px 0 0;
        }

        .legal-breadcrumb {
          background: #eee8dd;
          padding: 13px 9%;
          color: #766f65;
          font-size: 10px;
        }

        .legal-breadcrumb a {
          color: #a52e22;
        }

        .legal-layout {
          max-width: 1340px;
          margin: 0 auto;
          padding: 55px 8.5% 75px;
          display: grid;
          grid-template-columns: 255px minmax(0, 1fr);
          gap: 7%;
          align-items: start;
        }

        .legal-sidebar {
          position: sticky;
          top: 20px;
        }

        .legal-side-card {
          background: white;
          border: 1px solid #e5dfd3;
          padding: 23px;
          margin-bottom: 18px;
        }

        .legal-side-label {
          font-size: 8px;
          color: #a52e22;
          letter-spacing: 1.6px;
          font-weight: 700;
          margin: 0 0 14px;
        }

        .legal-side-card h2 {
          font: 500 23px/1.2 'Playfair Display', Georgia, serif;
          margin: 0 0 15px;
        }

        .legal-index {
          display: flex;
          flex-direction: column;
        }

        .legal-index a {
          display: block;
          padding: 10px 0;
          border-top: 1px solid #e5dfd3;
          color: #554e45;
          font-size: 10px;
          line-height: 1.7;
        }

        .legal-index a:hover {
          color: #a52e22;
        }

        .legal-main {
          min-width: 0;
        }

        .legal-intro {
          margin: 0 0 35px;
          color: #554e45;
          font-size: 14px;
          line-height: 2;
        }

        .legal-section {
          padding: 25px 0;
          border-top: 1px solid #e1d9cb;
          scroll-margin-top: 20px;
        }

        .legal-section h2 {
          font: 500 27px/1.25 'Playfair Display', Georgia, serif;
          margin: 0 0 17px;
          letter-spacing: -.3px;
        }

        .legal-section p {
          margin: 0 0 15px;
          color: #5e564c;
          font-size: 12px;
          line-height: 2;
        }

        .legal-contact-box {
          margin-top: 25px;
          padding: 25px;
          background: #eee8dd;
        }

        .legal-contact-box h2 {
          font: 500 26px/1.2 'Playfair Display', Georgia, serif;
          margin: 0 0 12px;
        }

        .legal-contact-box p {
          color: #766f65;
          font-size: 12px;
          line-height: 1.9;
          margin: 0 0 18px;
        }

        .legal-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 17px;
          background: #e8b849;
          color: #211d18;
          font-size: 10px;
          font-weight: 700;
        }

        .legal-button:hover {
          background: #f1ca68;
        }

        .legal-other-policies {
          background: #fff;
          padding: 40px 9%;
          border-top: 1px solid #e5dfd3;
        }

        .legal-other-policies h2 {
          font: 500 31px/1.2 'Playfair Display', Georgia, serif;
          margin: 0 0 23px;
        }

        .legal-policy-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
        }

        .legal-policy-link {
          min-height: 95px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          border: 1px solid #e5dfd3;
          color: #554e45;
          font-size: 10px;
          line-height: 1.6;
        }

        .legal-policy-link:hover {
          border-color: #a52e22;
          color: #a52e22;
        }

        .legal-policy-link svg {
          flex-shrink: 0;
        }

        .legal-footer {
          padding: 25px 8.5%;
          background: #211d18;
          color: #eee6d8;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          font-size: 9px;
        }

        .legal-footer a {
          color: #e8b849;
        }

        .legal-footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
        }

        @media (max-width: 1000px) {
          .legal-layout {
            grid-template-columns: 210px minmax(0, 1fr);
            padding-left: 6%;
            padding-right: 6%;
            gap: 5%;
          }

          .legal-policy-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .legal-hero {
            padding-left: 7%;
            padding-right: 7%;
          }
        }

        @media (max-width: 700px) {
          .legal-topline {
            padding: 9px 5%;
            font-size: 8px;
          }

          .legal-nav {
            padding: 10px 5%;
            flex-wrap: wrap;
          }

          .legal-brand img {
            width: 44px;
            height: 43px;
          }

          .legal-brand b {
            font-size: 14px;
          }

          .legal-brand small {
            font-size: 7px;
          }

          .legal-nav-links {
            width: 100%;
            gap: 13px 17px;
            padding: 7px 0;
          }

          .legal-hero {
            padding: 45px 6% 40px;
          }

          .legal-hero h1 {
            font-size: 42px;
          }

          .legal-breadcrumb {
            padding: 12px 6%;
          }

          .legal-layout {
            grid-template-columns: 1fr;
            padding: 34px 6% 50px;
            gap: 28px;
          }

          .legal-sidebar {
            position: static;
          }

          .legal-section h2 {
            font-size: 25px;
          }

          .legal-other-policies {
            padding: 35px 6%;
          }

          .legal-other-policies h2 {
            font-size: 28px;
          }

          .legal-policy-grid {
            grid-template-columns: 1fr 1fr;
          }

          .legal-footer {
            padding: 24px 6%;
          }
        }
      `}</style>

      <div className="legal-topline">
        <span>NAKURU, KENYA</span>
        <span>WHERE TRANQUILITY MEETS EXCELLENCE</span>
        <a href={`https://wa.me/${phone}`}>CONTACT THE HOTEL</a>
      </div>

      <header className="legal-nav">
        <Link className="legal-brand" href="/" aria-label="La Quita homepage">
          <img src="/images/laquita-logo.jpg" alt="La Quita Hotel & Suites logo" />
          <span>
            <b>LA QUITA</b>
            <small>HOTEL & SUITES</small>
          </span>
        </Link>

        <nav className="legal-nav-links" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/accommodation">Accommodation</Link>
          <Link href="/blog">Journal</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="legal-hero">
        <p className="legal-eyebrow">
          <ShieldCheck size={15} /> {page.label}
        </p>
        <h1>{page.title}</h1>
        <p>{page.subtitle}</p>
      </section>

      <div className="legal-breadcrumb">
        <Link href="/">Home</Link> / Policies / {page.title}
      </div>

      <div className="legal-layout">
        <aside className="legal-sidebar">
          <div className="legal-side-card">
            <p className="legal-side-label">ON THIS PAGE</p>
            <h2>Policy contents</h2>
            <nav className="legal-index">
              {page.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="legal-side-card">
            <p className="legal-side-label">NEED HELP?</p>
            <h2>Ask the hotel.</h2>
            <p style={{ fontSize: 11, color: '#766f65', lineHeight: 1.9 }}>
              Contact our team if you need clarification about a booking,
              privacy request or website policy.
            </p>
            <a
              className="legal-button"
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                `Hello La Quita Hotel & Suites. I have a question about your ${page.title}.`
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} /> Ask on WhatsApp
            </a>
          </div>
        </aside>

        <article className="legal-main">
          <p className="legal-intro">{page.intro}</p>

          {page.sections.map((section) => (
            <section
              className="legal-section"
              id={section.id}
              key={section.id}
            >
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.id}-${index}`}>{paragraph}</p>
              ))}
            </section>
          ))}

          {policy === 'privacy' && (
            <div className="legal-contact-box">
              <h2>More information about data protection</h2>
              <p>
                For information about data-protection laws and the rights of
                data subjects in Kenya, refer to the Office of the Data
                Protection Commissioner.
              </p>
              <a
                className="legal-button"
                href="https://www.odpc.go.ke/data-protection-laws-kenya/"
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={15} /> Kenya data-protection resources
                <ArrowRight size={14} />
              </a>
            </div>
          )}

          {policy === 'cookies' && (
            <div className="legal-contact-box">
              <h2>External service privacy information</h2>
              <p>
                If you choose to use WhatsApp, that service is subject to its
                own privacy policy and terms.
              </p>
              <a
                className="legal-button"
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Privacy Policy <ArrowRight size={14} />
              </a>
            </div>
          )}

          <div className="legal-contact-box">
            <h2>Questions about this policy?</h2>
            <p>
              Contact La Quita Hotel & Suites on +254 759 713 882 or use the
              website contact page. For booking questions, include your
              reservation reference if one has been issued.
            </p>
            <Link className="legal-button" href="/contact">
              Contact La Quita <ArrowRight size={14} />
            </Link>
          </div>
        </article>
      </div>

      <section className="legal-other-policies">
        <h2>Related policies</h2>
        <div className="legal-policy-grid">
          {allPolicies
            .filter((item) => item.id !== policy)
            .map((item) => (
              <Link
                className="legal-policy-link"
                href={item.href}
                key={item.id}
              >
                <span>{item.title}</span>
                <ArrowRight size={15} />
              </Link>
            ))}
        </div>
      </section>

      <footer className="legal-footer">
        <span>© {new Date().getFullYear()} La Quita Hotel & Suites</span>
        <div className="legal-footer-links">
          <Link href="/">Home</Link>
          <Link href="/blog">Journal</Link>
          <Link href="/contact">Contact</Link>
          <Link href="#top">
            <ArrowUp size={12} /> Back to top
          </Link>
        </div>
      </footer>
    </main>
  );
}
