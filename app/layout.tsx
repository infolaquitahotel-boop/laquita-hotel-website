
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'La Quita Hotel & Suites | Hotel in Nakuru',
    template: '%s | La Quita Hotel & Suites',
  },
  description:
    'Discover La Quita Hotel & Suites in Pipeline, Nakuru, Kenya. Enquire about accommodation, bed and breakfast, dining, the bar and lounge, conferences and meetings.',
  keywords: [
    'La Quita Hotel and Suites',
    'hotel in Nakuru',
    'accommodation in Nakuru',
    'hotel in Pipeline Nakuru',
    'bed and breakfast Nakuru',
    'restaurant in Nakuru',
    'conference venue Nakuru',
  ],
  applicationName: 'La Quita Hotel & Suites',
  appleWebApp: {
    capable: true,
    title: 'La Quita Hotel',
    statusBarStyle: 'default',
  },
  openGraph: {
    title: 'La Quita Hotel & Suites | Nakuru',
    description:
      'Where Tranquility Meets Excellence. Discover accommodation, dining and meetings at La Quita Hotel & Suites in Pipeline, Nakuru.',
    siteName: 'La Quita Hotel & Suites',
    locale: 'en_KE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
