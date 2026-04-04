'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceGrid from '@/components/ServiceGrid';
import CTASection from '@/components/CTASection';
import { useSite } from '@/lib/SiteContext';

export default function ProductsClient() {
  const { pages } = useSite();
  const productsData = pages.products || {};
  const { productsList = [], heroTitle, heroSubtitle, intro } = productsData;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        description={intro}
        ctaText="Get Quote"
        ctaLink="/contact"
        imageUrl="/st1.jpg"
      />

      <article className="bg-white">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceGrid services={productsList} />
          </div>
        </section>
      </article>

      <CTASection />

      <Footer />
    </main>
  );
}
