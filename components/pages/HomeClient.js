'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import ServiceGrid from '@/components/ServiceGrid';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import { useSite } from '@/lib/SiteContext';

export default function HomeClient() {
  const { pages } = useSite();
  const homeContent = pages.home || {};
  const { heroTitle, heroSubtitle, heroDescription, heroImage, features = [] } = homeContent;
  const previewServices = pages.services?.servicesList?.slice(0,3) || [];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        ctaText="Get Quote"
        ctaLink="/contact"
        imageUrl={heroImage}
      />

      <article>
        <FeatureSection
          title="Why Choose Konstruct Technofab"
          features={features}
        />

        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-6">
                Our Premium Services
              </h2>
              <p className="text-steel-700 text-lg max-w-2xl mx-auto mb-8">
                Comprehensive steel shuttering solutions designed to meet the unique requirements of modern construction projects worldwide.
              </p>
              <div className="w-20 h-1 bg-safety-orange mx-auto"></div>
            </div>

            <ServiceGrid services={previewServices} />

            <div className="text-center mt-12">
                <a
                href="/services"
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        <TestimonialSection />
      </article>

      <CTASection />

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'SteelForge Construction',
            description: 'Premium steel shuttering and industrial formwork solutions',
            image: 'https://images.unsplash.com/photo-1503387762519-52582191664730-d307ca884978?w=400&h=300&fit=crop',
            priceRange: '$$$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '2847 Industrial Boulevard',
              addressLocality: 'Construction Park',
              addressRegion: 'IL',
              postalCode: '60601',
              addressCountry: 'US',
            },
            telephone: '+1-800-555-0123',
            email: 'info@steelforge.com',
            url: 'https://steelforge-construction.com',
            areaServed: 'Worldwide',
            serviceType: 'Steel Shuttering and Industrial Formwork',
          }),
        }}
      />
    </main>
  );
}
