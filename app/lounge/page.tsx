
import type { Metadata } from 'next';
import InteriorPage from '../components/InteriorPage';

export const metadata: Metadata = {
  title: 'Bar & Lounge in Nakuru, Kenya',
  description:
    'Discover the bar and lounge at La Quita Hotel & Suites in Nakuru, Kenya. Ask about available drinks, the lounge atmosphere and DStv football viewing.',
  alternates: {
    canonical: '/lounge',
  },
  openGraph: {
    title: 'Bar & Lounge | La Quita Hotel & Suites',
    description:
      'Plan a relaxed visit to La Quita Hotel & Suites in Nakuru. Contact the team for bar and lounge information.',
  },
};

export default function LoungePage() {
  return <InteriorPage page="lounge" />;
}
