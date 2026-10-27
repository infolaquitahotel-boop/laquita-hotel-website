import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Cookie Policy | La Quita Hotel & Suites',
  description:
    'Learn about cookies and similar technologies that may be used on the La Quita Hotel & Suites website.',
};

export default function CookiePolicyPage() {
  return <LegalPage policy="cookies" />;
}