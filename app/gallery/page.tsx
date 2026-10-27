
import type { Metadata } from 'next';
import InteriorPage from '../components/InteriorPage';

export const metadata: Metadata = {
  title: 'Hotel Photo Gallery in Nakuru, Kenya',
  description:
    'Explore photographs of La Quita Hotel & Suites, including accommodation, dining and hospitality spaces in Pipeline, Nakuru, Kenya.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Explore La Quita | Hotel Gallery',
    description:
      'Take a closer look at La Quita Hotel & Suites in Nakuru, Kenya.',
  },
};

export default function GalleryPage() {
  return <InteriorPage page="gallery" />;
}
