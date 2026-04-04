'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceGrid from '@/components/ServiceGrid';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import { useSite } from '@/lib/SiteContext';
import Image from 'next/image';

export default function ProjectsClient() {
  const { pages } = useSite();
  const projectsData = pages.projects || {};
  const { projectsList = [], heroTitle, heroSubtitle, intro } = projectsData;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        description={intro}
        ctaText="View All Projects"
        ctaLink="/gallery"
        imageUrl="/st1.jpg"
      />

      <article className="bg-white">
        <section className="py-16 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-steel-900 mb-6">Our Completed Projects</h2>
              <p className="text-steel-700 text-lg leading-relaxed max-w-3xl mx-auto text-justify">
                Showcasing our expertise in PEB structures, industrial sheds, warehouses and prefabricated buildings across India and worldwide. Each project reflects our commitment to quality, timely delivery and client satisfaction.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceGrid services={projectsList} />
          </div>
        </section>

        {/* Project Showcase Sections like ServicesClient */}
        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {projectsList.slice(0,3).map((project, idx) => (
              <div key={project.id} className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <ScrollReveal variant={idx%2 === 0 ? "fadeInLeft" : "fadeInRight"}>
                  <Image
                    src={project.image || `/st${idx+1}.jpg`}
                    alt={project.name}
                    width={600}
                    height={500}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </ScrollReveal>
                <ScrollReveal variant={idx%2 === 0 ? "fadeInRight" : "fadeInLeft"}>
                  <div>
                    <h3 className="text-3xl font-bold text-steel-900 mb-4">{project.name}</h3>
                    <p className="text-steel-700 text-lg leading-relaxed mb-6 text-justify">
                      {project.longDescription}
                    </p>
                    {project.benefits && (
                      <ul className="space-y-2">
                        {project.benefits.map((benefit, bidx) => (
                          <li key={bidx} className="flex gap-3 text-steel-700">
                            <span className="text-safety-orange font-bold">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </section>
      </article>

      <CTASection />

      <Footer />
    </main>
  );
}
