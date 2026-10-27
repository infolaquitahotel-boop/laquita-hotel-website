
import type { Metadata } from 'next';
import InteriorPage from '../components/InteriorPage';

export const metadata: Metadata = {
  title: 'About La Quita Hotel & Suites',
  description:
    'Learn about La Quita Hotel & Suites, a modern hospitality destination in Pipeline, Nakuru, Kenya, offering accommodation, dining and meeting enquiries.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Our Story | La Quita Hotel & Suites',
    description:
      'Discover the hospitality approach behind La Quita Hotel & Suites in Nakuru, Kenya.',
  },
};

export default function AboutPage() {
  return <InteriorPage page="about" />;
}
