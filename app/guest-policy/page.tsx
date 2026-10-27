import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Guest Policy & House Rules | La Quita Hotel & Suites',
  description:
    'Read the guest policies and house rules that help maintain a comfortable, respectful and secure stay at La Quita Hotel & Suites.',
};

export default function GuestPolicyPage() {
  return <LegalPage policy="guest" />;
}