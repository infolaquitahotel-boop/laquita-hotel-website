
import type { Metadata } from 'next';
import InteriorPage from '../components/InteriorPage';

export const metadata: Metadata = {
  title: 'Contact & Location | La Quita Hotel Nakuru',
  description:
    'Contact La Quita Hotel & Suites in Pipeline, Nakuru, Kenya. Call +254 759 713 882 or enquire on WhatsApp about accommodation, dining and conferences.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact La Quita Hotel & Suites',
    description:
      'Plan your visit to La Quita Hotel & Suites in Nakuru, Kenya. Contact our team by phone or WhatsApp.',
  },
};

export default function ContactPage() {
  return <InteriorPage page="contact" />;
}
