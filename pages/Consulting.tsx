import React from 'react';
import { useContent } from '../context/ContentContext';
import { SectionTitle, Button, Card } from '../components/Components';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Consulting: React.FC = () => {
  const { services } = useContent();

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Corporate Consulting" 
          subtitle="Tailored strategies for organizations ready to lead in the age of AI." 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map(service => (
            <div key={service.id} className="bg-brand-beige rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-brand-blue/20">
              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4 h-16">{service.title}</h3>
              <p className="text-gray-600 mb-8 h-24">{service.description}</p>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <div className="bg-white rounded-full p-1 mt-0.5 text-brand-blue shadow-sm">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </li>
                ))}
              </ul>
              <Link to="/contact">
                  <Button variant="outline" className="w-full">Request Proposal</Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-brand-navy text-white rounded-3xl p-12">
            <div className="text-center mb-12">
                <h3 className="text-2xl font-serif font-bold">Our Engagement Process</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-brand-blue/30 -z-0"></div>

                {[
                    { step: "01", title: "Discovery", desc: "We analyze your data infrastructure and business goals." },
                    { step: "02", title: "Strategy", desc: "We build a bespoke AI roadmap with clear KPIs." },
                    { step: "03", title: "Implementation", desc: "Our engineers and trainers execute the plan alongside your team." },
                    { step: "04", title: "Optimization", desc: "Continuous refinement based on real-world performance." }
                ].map((item, i) => (
                    <div key={i} className="relative z-10">
                        <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 border-4 border-brand-navy">
                            {item.step}
                        </div>
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};