import { Metadata } from 'next';

export const metadata = {
  title: 'Gallery | Konstruct Technofab - PEB Project Photos',
  description: 'Photo gallery of completed industrial sheds, warehouses and PEB structures.',
};

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-4xl font-bold p-8 text-center">Project Gallery</h1>
      <p className="text-center">High-quality photos of our PEB installations (Coming Soon).</p>
    </div>
  );
}
