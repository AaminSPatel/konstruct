import { Metadata } from 'next';
import ProjectsClient from '@/components/pages/ProjectsClient';

export const metadata = {
  title: 'Projects | Konstruct Technofab - PEB Portfolio',
  description: 'Portfolio of completed PEB structures, industrial sheds, warehouses, factories and prefab buildings across India and worldwide.',
  keywords: 'PEB projects, industrial shed projects, warehouse construction portfolio, factory shed completed projects, prefabricated structures portfolio',
  openGraph: {
    title: 'Projects | Konstruct Technofab - Completed PEB Installations',
    description: 'Showcase of successfully delivered pre-engineered building projects.',
    images: ['https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop'],
  },
};

export default function Projects() {
  return <ProjectsClient />;
}
