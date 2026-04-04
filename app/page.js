import { Metadata } from 'next';
import HomeClient from '@/components/pages/HomeClient';

export const metadata = {
  title: 'Konstruct Technofab | Pre Engineered Building & Industrial Shed Solutions',
  description: 'Leading PEB manufacturer offering industrial sheds, warehouse construction, steel structures and prefabricated buildings. Fast delivery, cost effective.',
  keywords: 'pre engineered building, PEB structure, industrial shed, prefabricated building, steel structure, warehouse shed, factory shed, PEB installation',
  openGraph: {
    title: 'Konstruct Technofab Pvt. Ltd. | Innovative PEB Solutions',
    description: 'High quality pre engineered buildings, industrial sheds and prefabricated structures since 2017.',
    images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop'],
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};

export default function Home() {
  return <HomeClient />;
}
