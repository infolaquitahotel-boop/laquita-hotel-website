import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Booking, Cancellation & Refund Policy | La Quita Hotel & Suites',
  description:
    'Review booking, cancellation and refund information for La Quita Hotel & Suites in Pipeline, Nakuru, Kenya.',
};

export default function CancellationPolicyPage() {
  return <LegalPage policy="cancellation" />;
}