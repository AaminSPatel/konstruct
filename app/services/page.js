import { Metadata } from 'next';
import ServicesClient from '@/components/pages/ServicesClient';

export const metadata = {
  title: 'PEB Services | Industrial Shed Fabrication & Installation - Konstruct Technofab',
  description: 'Industrial shed construction, PEB fabrication, prefabricated structures, design consulting and installation services.',
  keywords: 'industrial shed construction, PEB fabrication, warehouse construction, factory shed, prefabricated structure, cold storage, PEB installation',
  openGraph: {
    title: 'Services | Konstruct Technofab - PEB & Steel Structures',
    description: 'End-to-end PEB services from design to installation.',
    images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop'],
  },
};

export default function Services() {
  return <ServicesClient />;
}
