import { Metadata } from 'next';
import ProductsClient from '@/components/pages/ProductsClient';

export const metadata = {
  title: 'PEB Products & Industrial Sheds | Konstruct Technofab',
  description: 'Wide range of prefabricated sheds, warehouses and PEB buildings for industrial applications.',
  keywords: 'prefabricated factory shed, warehouse shed, PEB steel building, industrial roofing shed, prefab school building',
  openGraph: {
    title: 'Products | Konstruct Technofab - PEB Products',
    description: 'Industrial sheds, PEB buildings and warehouse solutions.',
    images: ['https://images.unsplash.com/photo-1558618047-3c8c76ca575b?w=1200&h=630&fit=crop'],
  },
};

export default function Products() {
  return <ProductsClient />;
}
