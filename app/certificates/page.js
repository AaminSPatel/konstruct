import { Metadata } from 'next';

export const metadata = {
  title: 'Certificates | Konstruct Technofab - Quality Certifications',
  description: 'ISO, GST and quality certificates for PEB manufacturing.',
};

export default function Certificates() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-4xl font-bold p-8 text-center">Certificates & Approvals</h1>
      <p className="text-center">GST: 23ARFPV2038P1ZD and manufacturing certifications.</p>
    </div>
  );
}
