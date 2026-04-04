import { Metadata } from 'next';
import AboutClient from '@/components/pages/AboutClient';

export const metadata = {
  title: 'About Konstruct Technofab | PEB Manufacturer Since 2017',
  description: 'Learn about Konstruct Technofab Pvt. Ltd. - PEB specialist founded in 2017 by Md Bilal Rasheed & Rohit Verma. 200+ employees serving worldwide.',
  keywords: 'PEB manufacturer, steel structure company, industrial shed supplier, prefabricated building exporter, Pithampur Indore',
  openGraph: {
    title: 'About Konstruct Technofab | Pre Engineered Buildings',
    description: 'Established 2017 in Pithampur, Indore. Manufacturer of industrial sheds and PEB structures.',
    images: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop'],
  },
};

export default function About() {
  return <AboutClient />;
}
