'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import { useSite } from '@/lib/SiteContext';

export default function AboutClient() {
  const { pages } = useSite();
  const about = pages.about || {};
  const stats = about.stats || [];
  const values = about.industriesServed ? about.industriesServed.map(ind => ({title: ind, description: `Specialized ${ind.toLowerCase()} solutions.`})) : [];
  const content = about.content || '';

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title={about.heroTitle}
        subtitle={about.heroSubtitle}
        description={content}
        ctaText="Get in Touch"
        ctaLink="/contact"
        imageUrl="/st5.jpg"
      />

      <article className="bg-white">
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
              <ScrollReveal variant="fadeInLeft">
                <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop"
                    alt="SteelForge Manufacturing Facility"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900/30 via-transparent to-transparent"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fadeInRight" className="space-y-6">
                <h2 className="text-4xl font-bold text-steel-900 mb-6">Our Journey</h2>

                <p className="text-steel-700 text-lg leading-relaxed text-justify">
                  SteelForge Construction was founded in 2003 with a singular mission: to revolutionize the construction industry through advanced steel shuttering systems and industrial formwork solutions. Over the past two decades, we have established ourselves as the trusted partner for contractors, engineers, and developers who demand the highest standards of quality, precision, and reliability.
                </p>

                <p className="text-steel-700 text-lg leading-relaxed text-justify">
                  Our journey began with a recognition that construction timelines were being constrained by outdated formwork systems. Traditional shuttering methods were time-consuming, labor-intensive, and prone to costly errors. We saw an opportunity to transform the industry by combining cutting-edge engineering with sustainable manufacturing practices.
                </p>

                <p className="text-steel-700 text-lg leading-relaxed text-justify">
                  Today, SteelForge operates state-of-the-art manufacturing facilities across three continents, employing over 500 skilled engineers, technicians, and craftspeople dedicated to producing world-class steel formwork systems. Our commitment to innovation has resulted in more than 47 patents covering advanced shuttering technologies, modular systems, and installation optimization methodologies.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100 text-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">By the Numbers</h2>
              <p className="text-concrete-400 text-lg max-w-2xl mx-auto">
                Our track record speaks to our commitment to excellence and innovation in the construction industry.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} variant="scaleIn" delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-xl sm:text-3xl md:text-4xl font-bold text-safety-orange mb-2">
                      {stat.number}
                    </div>
                    <p className="text-concrete-300 text-sm md:text-base">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-steel-900 mb-6">Our Core Values</h2>
              <p className="text-steel-700 text-lg max-w-2xl mx-auto mb-6">
                These principles guide every decision we make and every project we undertake.
              </p>
              <div className="w-20 h-1 bg-safety-orange mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <ScrollReveal
                  key={index}
                  variant="fadeInUp"
                  delay={index * 0.15}
                  className="h-full"
                >
                  <div className="bg-white p-8 rounded-xl border border-concrete-200 hover:border-safety-orange hover:shadow-lg transition-all h-full">
                    <h3 className="text-2xl font-bold text-steel-900 mb-4">{value.title}</h3>
                    <p className="text-steel-700 text-lg leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-steel-900 mb-6">Industry Recognition</h2>
              <p className="text-steel-700 text-lg max-w-2xl mx-auto mb-6">
                Our dedication to quality and innovation has earned recognition across the construction industry.
              </p>
              <div className="w-20 h-1 bg-safety-orange mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal variant="scaleIn" className="text-center">
                <div className="bg-gradient-to-br from-steel-50 to-concrete-100 p-8 rounded-xl border border-concrete-200">
                  <div className="text-5xl text-safety-orange mb-4">✓</div>
                  <h3 className="text-xl font-bold text-steel-900 mb-3">Construction Excellence Award</h3>
                  <p className="text-steel-700">Recognition for outstanding contributions to construction innovation and industry advancement.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="scaleIn" delay={0.1} className="text-center">
                <div className="bg-gradient-to-br from-steel-50 to-concrete-100 p-8 rounded-xl border border-concrete-200">
                  <div className="text-5xl text-safety-orange mb-4">✓</div>
                  <h3 className="text-xl font-bold text-steel-900 mb-3">ISO 9001:2015 Certified</h3>
                  <p className="text-steel-700">Quality management system certification ensuring consistent excellence in all operations.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="scaleIn" delay={0.2} className="text-center">
                <div className="bg-gradient-to-br from-steel-50 to-concrete-100 p-8 rounded-xl border border-concrete-200">
                  <div className="text-5xl text-safety-orange mb-4">✓</div>
                  <h3 className="text-xl font-bold text-steel-900 mb-3">ISO 14001:2015 Certified</h3>
                  <p className="text-steel-700">Environmental management certification demonstrating commitment to sustainable practices.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-steel-900 mb-6">Our Team</h2>
              <p className="text-steel-700 text-lg leading-relaxed max-w-2xl mx-auto text-justify mb-6">
                With over 500 skilled engineers, technicians, and craftspeople across our global operations, we bring together diverse expertise and decades of combined experience. Every member of our team shares a passion for precision and a commitment to exceeding expectations. From our initial consultation to final installation and ongoing support, we partner with our clients to ensure that every project is executed with the highest standards of quality and professionalism. Our collaborative culture fosters innovation, continuous learning, and a deep commitment to your project success.
              </p>
            </div>
          </div>
        </section>
      </article>

      <CTASection />

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SteelForge Construction',
            description: 'Premium steel shuttering and industrial formwork solutions',
            foundingDate: '2003',
            numberOfEmployees: '500+',
            awards: [
              'Construction Excellence Award',
              'ISO 9001:2015 Certified',
              'ISO 14001:2015 Certified',
            ],
            areaServed: 'Worldwide',
          }),
        }}
      />
    </main>
  );
}
