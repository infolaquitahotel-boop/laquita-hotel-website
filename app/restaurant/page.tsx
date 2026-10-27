
import type { Metadata } from 'next';
import InteriorPage from '../components/InteriorPage';

export const metadata: Metadata = {
  title: 'Restaurant & Dining in Nakuru, Kenya',
  description:
    'Explore dining and breakfast enquiries at La Quita Hotel & Suites in Pipeline, Nakuru, Kenya. Contact our team for menu information and dining arrangements.',
  alternates: {
    canonical: '/restaurant',
  },
  openGraph: {
    title: 'Restaurant & Dining | La Quita Hotel & Suites',
    description:
      'Discover dining at La Quita Hotel & Suites in Nakuru, Kenya. Contact our team about meals, breakfast and dining arrangements.',
  },
};

export default function RestaurantPage() {
  return <InteriorPage page="restaurant" />;
}
