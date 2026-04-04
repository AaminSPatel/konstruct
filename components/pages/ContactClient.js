'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import ScrollReveal from '@/components/ScrollReveal';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactClient() {
  const formFields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
    { name: 'company', label: 'Company Name', type: 'text', required: false },
    {
      name: 'projectType',
      label: 'Project Type',
      type: 'select',
      required: true,
      options: ['Residential', 'Commercial', 'Infrastructure', 'Industrial', 'Mixed-Use', 'Other'],
    },
    {
      name: 'scope',
      label: 'Project Scope',
      type: 'select',
      required: true,
      options: ['Small (< 10 floors)', 'Medium (10-30 floors)', 'Large (30-50 floors)', 'Mega (50+ floors)'],
    },
    {
      name: 'timeline',
      label: 'Project Timeline',
      type: 'select',
      required: true,
      options: ['Within 3 months', '3-6 months', '6-12 months', '12+ months'],
    },
    {
      name: 'message',
      label: 'Project Details',
      type: 'textarea',
      required: true,
      placeholder: 'Describe your project requirements, specific challenges, and any unique considerations...',
    },
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+1 (800) 555-0123', '+1 (555) 234-5678'],
      action: 'tel:+1-800-555-0123',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@steelforge.com', 'projects@steelforge.com'],
      action: 'mailto:info@steelforge.com',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['2847 Industrial Boulevard', 'Construction Park, IL 60601, USA'],
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM', 'Sun: Closed'],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title="Get in Touch"
        subtitle="Let's discuss your construction project requirements"
        description="Have a steel shuttering or industrial formwork project in mind? Our expert team is ready to discuss your requirements and provide a customized quote. Whether you're planning a residential complex, commercial building, or critical infrastructure project, SteelForge has the expertise and capabilities to deliver precision-engineered solutions tailored to your needs."
        ctaText="Send Message"
        ctaLink="#contact-form"
        imageUrl="/st6.jpg"
      />

      <article className="bg-white">
        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <ScrollReveal
                    key={index}
                    variant="scaleIn"
                    delay={index * 0.1}
                    className="h-full"
                  >
                    <a
                      href={info.action}
                      className="bg-white p-6 rounded-xl border border-concrete-200 hover:border-safety-orange hover:shadow-lg transition-all h-full flex flex-col group"
                    >
                      <div className="w-14 h-14 bg-safety-orange/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-safety-orange/20 transition-colors">
                        <Icon className="text-2xl text-safety-orange" />
                      </div>

                      <h3 className="text-lg font-bold text-steel-900 mb-3">{info.title}</h3>

                      <div className="space-y-2">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-steel-700 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact-form" className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal variant="fadeInUp" className="text-center mb-12">
              <h2 className="text-4xl font-bold text-steel-900 mb-6">Send us a Message</h2>
              <p className="text-steel-700 text-lg mb-6">
                Fill out the form below with your project details and we'll get back to you shortly with a customized quote and proposal.
              </p>
              <div className="w-20 h-1 bg-safety-orange mx-auto"></div>
            </ScrollReveal>

            <ScrollReveal variant="fadeInUp" delay={0.1}>
              <ContactForm fields={formFields} />
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-steel-900 mb-6">Visit Us</h2>
              <p className="text-steel-700 text-lg mb-8">
                Our headquarters is located in the heart of Construction Park, easily accessible from major highways.
              </p>
            </div>

            <ScrollReveal variant="scaleIn">
              <div className="w-full h-96 bg-gray-300 rounded-xl overflow-hidden shadow-lg border border-concrete-200 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-6xl text-safety-orange mx-auto mb-4 opacity-50" />
                  <p className="text-steel-700 font-semibold">
                    2847 Industrial Boulevard, Construction Park, IL 60601
                  </p>
                  <p className="text-steel-600 text-sm mt-2">
                    Map view available - contact us for directions
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-steel-900 mb-6">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-safety-orange mx-auto"></div>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How long does it take to receive a quote?',
                  a: 'We typically respond to quote requests within 24 hours. Complex projects may require additional time for detailed analysis and engineering review.',
                },
                {
                  q: 'What is your typical project timeline?',
                  a: 'Timelines vary based on project complexity and scope. Modular systems can be deployed quickly, while custom fabrication typically requires 8-16 weeks from design completion to delivery.',
                },
                {
                  q: 'Do you offer rental programs?',
                  a: 'Yes, we offer flexible rental programs for projects that don\'t require permanent equipment acquisition. Rental periods range from short-term to multi-year arrangements.',
                },
                {
                  q: 'What support do you provide during installation?',
                  a: 'We provide comprehensive support including pre-installation assessment, on-site supervision, quality assurance testing, crew training, and 24/7 technical support throughout the installation phase.',
                },
                {
                  q: 'Are your systems internationally certified?',
                  a: 'Yes, all systems comply with international standards including OSHA, ISO 9001:2015, and ISO 14001:2015. Custom systems can be certified to meet specific regional requirements.',
                },
                {
                  q: 'Can you handle custom architectural requirements?',
                  a: 'Absolutely. Our custom fabrication division specializes in designing and manufacturing systems for unique geometries and demanding specifications. Contact our technical team to discuss your specific requirements.',
                },
              ].map((item, index) => (
                <ScrollReveal
                  key={index}
                  variant="fadeInUp"
                  delay={index * 0.05}
                >
                  <details className="group bg-off-white border border-concrete-200 rounded-lg p-6 cursor-pointer hover:border-safety-orange transition-all">
                    <summary className="flex justify-between items-center font-bold text-steel-900 text-lg">
                      {item.q}
                      <span className="text-safety-orange group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="text-steel-700 mt-4 text-justify">{item.a}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </article>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            telephone: '+1-800-555-0123',
            email: 'info@steelforge.com',
            url: 'https://steelforge-construction.com/contact',
            areaServed: 'Worldwide',
            hoursAvailable: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '14:00',
              },
            ],
          }),
        }}
      />
    </main>
  );
}
