import { Metadata } from 'next';
import ContactClient from '@/components/pages/ContactClient';

export const metadata = {
  title: 'Contact Konstruct Technofab | PEB Quote & Inquiry',
  description: 'Pithampur, Indore based PEB manufacturer. Get quote for industrial sheds, warehouse construction and steel structures.',
  keywords: 'contact PEB manufacturer, industrial shed quote, Pithampur construction, Indore steel fabricator',
  openGraph: {
    title: 'Contact | Konstruct Technofab Pvt. Ltd.',
    description: 'Reach our Pithampur facility for PEB projects.',
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop'],
  },
};

export default function Contact() {
  return <ContactClient />;
}
