'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceGrid from '@/components/ServiceGrid';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import { useSite } from '@/lib/SiteContext';

export default function ServicesClient() {
  const { pages } = useSite();
  const services = pages.services?.servicesList || [];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title={pages.services.heroTitle}
        subtitle={pages.services.heroSubtitle}
        description={pages.services.intro}
        ctaText="Get Quote"
        ctaLink="/contact"
        imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
      />

      <article className="bg-white">
        <section className="py-16 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-steel-900 mb-6">Our Service Offerings</h2>
              <p className="text-steel-700 text-lg leading-relaxed max-w-3xl mx-auto text-justify">
                At SteelForge Construction, we understand that every construction project is unique, with distinct requirements, challenges, and objectives. Our comprehensive service portfolio is designed to provide flexible, scalable solutions that can be customized to your specific needs. Whether you're constructing a residential complex, commercial building, or critical infrastructure project, we have the expertise and capabilities to deliver precision-engineered formwork systems that accelerate timelines and maintain the highest quality standards.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceGrid services={services} />
          </div>
        </section>

        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Modular Shuttering */}
            <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal variant="fadeInLeft">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=500&fit=crop"
                  alt="Modular Steel Shuttering System"
                  className="rounded-lg shadow-lg h-80 object-cover"
                />
              </ScrollReveal>

              <ScrollReveal variant="fadeInRight">
                <div>
                  <h3 className="text-3xl font-bold text-steel-900 mb-4">Modular Steel Shuttering Systems</h3>
                  <p className="text-steel-700 text-lg leading-relaxed mb-4 text-justify">
                    Our modular steel shuttering systems represent the cutting edge of construction formwork technology. Engineered for maximum efficiency, these systems feature standardized components that interconnect seamlessly, allowing for rapid configuration across varied architectural requirements. The modular design significantly reduces on-site assembly time while maintaining exceptional structural rigidity and precision.
                  </p>
                  <p className="text-steel-700 text-lg leading-relaxed mb-6 text-justify">
                    Each module undergoes rigorous quality control testing to ensure dimensional accuracy within millimeter tolerances. Our modular systems are ideal for high-rise residential developments, commercial office complexes, and large-scale infrastructure projects. The standardized components reduce waste, minimize transportation costs, and enable rapid project scaling.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>25-year service life with superior durability</span>
                    </li>
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>Load capacities from standard to complex architectural forms</span>
                    </li>
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>24/7 technical support during installation phases</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Custom Fabrication */}
            <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal variant="fadeInLeft" className="order-2 md:order-1">
                <div>
                  <h3 className="text-3xl font-bold text-steel-900 mb-4">Custom Steel Formwork Fabrication</h3>
                  <p className="text-steel-700 text-lg leading-relaxed mb-4 text-justify">
                    Every major construction project presents unique architectural challenges that demand custom-engineered solutions. SteelForge's custom fabrication division specializes in designing and manufacturing steel formwork systems tailored to specific project requirements, unusual geometries, and demanding performance specifications.
                  </p>
                  <p className="text-steel-700 text-lg leading-relaxed mb-6 text-justify">
                    Our experienced team of structural engineers and fabrication specialists works closely with project architects and engineers to analyze requirements, develop optimal solutions, and manufacture precision-engineered systems. We utilize advanced CAD modeling, finite element analysis, and structural simulation to validate designs before fabrication begins.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>CNC machining and precision welding capabilities</span>
                    </li>
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>8-16 week manufacturing timeline with flexible scheduling</span>
                    </li>
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>Full material traceability and certification</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fadeInRight" className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=500&fit=crop"
                  alt="Custom Steel Fabrication"
                  className="rounded-lg shadow-lg h-80 object-cover"
                />
              </ScrollReveal>
            </div>

            {/* Industrial Scaffolding */}
            <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal variant="fadeInLeft">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=500&fit=crop"
                  alt="Industrial Scaffolding Systems"
                  className="rounded-lg shadow-lg h-80 object-cover"
                />
              </ScrollReveal>

              <ScrollReveal variant="fadeInRight">
                <div>
                  <h3 className="text-3xl font-bold text-steel-900 mb-4">Industrial Scaffolding Systems</h3>
                  <p className="text-steel-700 text-lg leading-relaxed mb-4 text-justify">
                    Industrial construction projects demand scaffolding systems that can withstand extreme loads, challenging weather conditions, and extended service periods. SteelForge's industrial scaffolding systems are engineered and manufactured to the most demanding international standards, providing unmatched safety, durability, and reliability.
                  </p>
                  <p className="text-steel-700 text-lg leading-relaxed mb-6 text-justify">
                    Our industrial scaffolding lines feature heavy-duty steel construction, advanced corrosion protection systems, and modular assembly designs that enable rapid deployment across extensive project areas. Each scaffolding system undergoes comprehensive load testing, structural analysis, and safety certification.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>OSHA and international standards compliance</span>
                    </li>
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>Load capacities from 25 to over 500 tons</span>
                    </li>
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>On-site installation support and safety training</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Installation Support */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal variant="fadeInLeft" className="order-2 md:order-1">
                <div>
                  <h3 className="text-3xl font-bold text-steel-900 mb-4">Professional Installation & Support</h3>
                  <p className="text-steel-700 text-lg leading-relaxed mb-4 text-justify">
                    Successful formwork installation requires expertise, precision, and coordination with all construction trades. SteelForge provides comprehensive installation services through our network of certified installation teams with decades of combined field experience.
                  </p>
                  <p className="text-steel-700 text-lg leading-relaxed mb-6 text-justify">
                    Our installation support includes pre-installation site assessment, detailed planning, on-site supervision by certified engineers, quality assurance testing, comprehensive training for construction crews, and 24/7 technical support. We understand that each project presents unique logistical challenges and work closely with general contractors to optimize safety and schedule performance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>Certified installation teams with decades of experience</span>
                    </li>
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>Real-time communication and project management</span>
                    </li>
                    <li className="flex gap-3 text-steel-700">
                      <span className="text-safety-orange font-bold">✓</span>
                      <span>Comprehensive documentation and as-built records</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fadeInRight" className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=500&fit=crop"
                  alt="Professional Installation Services"
                  className="rounded-lg shadow-lg h-80 object-cover"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-steel-900 mb-6">Why Choose SteelForge for Your Services</h2>
              <div className="w-20 h-1 bg-safety-orange mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Expert Team', desc: 'Over 500 skilled professionals with decades of combined experience' },
                { title: 'Technology', desc: 'State-of-the-art manufacturing facilities and advanced engineering tools' },
                { title: 'Quality Assurance', desc: 'ISO 9001:2015 and ISO 14001:2015 certified processes' },
                { title: 'Global Reach', desc: 'Proven capability across 6 continents with 3500+ completed projects' },
                { title: 'Innovation', desc: '47 patents covering advanced technologies and optimization methods' },
                { title: 'Support', desc: '24/7 technical assistance throughout project lifecycle' },
              ].map((item, index) => (
                <ScrollReveal key={index} variant="fadeInUp" delay={index * 0.1}>
                  <div className="p-8 bg-off-white rounded-xl border border-concrete-200 hover:border-safety-orange transition-all">
                    <h3 className="text-xl font-bold text-steel-900 mb-3">{item.title}</h3>
                    <p className="text-steel-700">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
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
            '@type': 'LocalBusiness',
            name: 'SteelForge Construction',
            services: [
              'Modular Steel Shuttering Systems',
              'Custom Steel Formwork Fabrication',
              'Industrial Scaffolding Systems',
              'Professional Installation & Support',
              'Formwork Rental Programs',
              'Technical Consulting & Engineering',
            ],
          }),
        }}
      />
    </main>
  );
}
