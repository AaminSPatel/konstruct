'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import ServiceGrid from '@/components/ServiceGrid';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import { useSite } from '@/lib/SiteContext';

export default function HomeClient() {
  const { pages } = useSite();
  const homeContent = pages.home || {};
  const { heroTitle, heroSubtitle, heroDescription, heroImage, features = [] } = homeContent;
  const previewServices = pages.services?.servicesList?.slice(0, 3) || [];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Konstruct PEB context */}
      <HeroSection
        title={heroTitle || "India's Leading Pre-Engineered Building Manufacturers"}
        subtitle={heroSubtitle || "Konstruct PEB: Engineering the Future of Infrastructure"}
        description={heroDescription || "Konstruct PEB stands at the forefront of the industrial construction revolution. We specialize in high-quality Pre-Engineered Buildings (PEB), heavy structural steel fabrication, and innovative roofing solutions. Our commitment to precision engineering ensures that every structure we deliver is built for durability, scalability, and aesthetic excellence."}
        ctaText="Get Expert Consultation"
        ctaLink="/contact"
        imageUrl={ "/st6.jpg"}
      />

      <article>
        {/* --- Brand Showcase & Detailed Content Section --- */}
        <section className="py-24 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <ScrollReveal variant="fadeInLeft">
                <div>
                  <h2 className="text-4xl md:text-6xl font-black text-zinc-900 leading-tight uppercase tracking-tighter mb-6">
                    Redefining <span className="text-orange-600">Industrial</span> Landscapes
                  </h2>
                  <div className="w-24 h-2 bg-orange-600 mb-8"></div>
                  
                  <div className="space-y-6 text-zinc-700 text-lg leading-relaxed text-justify">
                    <p>
                      **Konstruct PEB** is not just a construction company; we are pioneers in modular and sustainable steel architecture. With over two decades of expertise in the PEB sector, we have successfully delivered complex projects ranging from massive industrial warehouses and aircraft hangars to sophisticated multi-story commercial complexes.
                    </p>
                    <p>
                      Our manufacturing process utilizes state-of-the-art CNC technology and automated welding systems to ensure that every steel member is fabricated to the exact millimeter. By choosing Konstruct PEB, you are investing in a structure that offers 30% faster installation, significant cost savings, and a lifecycle that outperforms traditional concrete construction.
                    </p>
                    <p className="font-bold text-zinc-900">
                      From initial design conceptualization to final site erection, our team of 500+ engineers and technicians ensures that your vision is transformed into a robust reality.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Modern Collage Grid */}
              <ScrollReveal variant="fadeInRight" className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
                <div className="col-span-7 row-span-4 overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                  <img src="/st2.jpg" alt="PEB Structure 1" className="w-full h-full object-cover hover:scale-110 transition-all duration-700" />
                </div>
                <div className="col-span-5 row-span-3 overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600" alt="Fabrication 2" className="w-full h-full object-cover hover:scale-110 transition-all duration-700" />
                </div>
                <div className="col-span-5 row-span-3 overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                  <img src="st6.jpg" alt="Welding 3" className="w-full h-full object-cover hover:scale-110 transition-all duration-700" />
                </div>
                <div className="col-span-7 row-span-2 overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                  <img src="st5.jpg" alt="Roofing 4" className="w-full h-full object-cover hover:scale-110 transition-all duration-700" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Feature Section with Detailed Descriptions */}
        <FeatureSection
          title="The Konstruct PEB Advantage"
          features={features.length > 0 ? features : [
            { title: "Precision Engineering", description: "Our in-house design team uses advanced 3D modeling to ensure zero-error fabrication." },
            { title: "Fast-Track Construction", description: "Save up to 40% time compared to conventional RCC methods with our modular systems." },
            { title: "Sustainability", description: "100% recyclable steel and energy-efficient designs that reduce carbon footprint." }
          ]}
        />

        {/* --- Services Section --- */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 items-end">
              <div className="lg:col-span-2">
                <span className="text-orange-600 font-black uppercase tracking-widest text-sm italic block mb-2">Our Capabilities</span>
                <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter">
                  End-to-End <span className="text-orange-600">PEB</span> Solutions
                </h2>
              </div>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Whether it's a warehouse, factory, or commercial mall, Konstruct PEB provides customized structural designs that optimize space and reduce material waste.
              </p>
            </div>

            <ServiceGrid services={previewServices} />

            <div className="text-center mt-20">
              <a
                href="/services"
                className="group relative inline-flex items-center gap-6 bg-zinc-900 text-white px-12 py-5 rounded-full font-black overflow-hidden transition-all hover:pr-16"
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-sm">Explore All Solutions</span>
                <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>
          </div>
        </section>

        <TestimonialSection />
      </article>

      <CTASection />
      <Footer />

      {/* SEO Schema for Konstruct PEB */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Konstruct PEB',
            description: 'Top-tier Pre-Engineered Building manufacturer and industrial construction experts.',
            url: 'https://konstruct-peb.com',
            areaServed: 'India & Worldwide',
            serviceType: 'PEB Manufacturing, Steel Fabrication, Industrial Warehousing',
          }),
        }}
      />
    </main>
  );
}