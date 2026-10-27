import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions | La Quita Hotel & Suites',
  description:
    'Read the terms and conditions governing the use of the La Quita Hotel & Suites website and booking enquiries in Pipeline, Nakuru, Kenya.',
};

export default function TermsAndConditionsPage() {
  return <LegalPage policy="terms" />;
}