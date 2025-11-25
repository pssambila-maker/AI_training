import React from 'react';
import { SectionTitle, Card } from '../components/Components';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-brand-navy mb-6">Who We Are</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovate AI was founded on the belief that the next industrial revolution belongs to the curious.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <img 
              src="https://picsum.photos/600/600?grayscale" 
              alt="Founder" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">A Note from the Founder</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Hello, I'm Dr. Alex Mercer. After spending a decade in Silicon Valley leading data science teams, I realized there was a massive gap between the technical elite building AI and the business leaders expected to use it.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I started Innovate AI to close that gap. We don't just teach you which buttons to press; we teach you how to think like an AI-native leader.
            </p>
            <div className="mt-8 border-l-4 border-brand-blue pl-4">
              <p className="text-lg font-medium text-brand-navy italic">
                "Our technology is only as good as the human intent behind it."
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <SectionTitle title="Our Core Values" subtitle="The principles that guide our curriculum and consulting." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Human-First AI", desc: "We prioritize ethical implementation that augments human capability rather than replacing it." },
            { title: "Practical Application", desc: "Theory is great, but shipping is better. Our training focuses on immediate ROI." },
            { title: "Continuous Adaptation", desc: "The field changes weekly. So does our curriculum. We stay on the bleeding edge so you don't have to." }
          ].map((val, idx) => (
            <Card key={idx} className="bg-brand-beige border-none">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-blue mb-4 shadow-sm font-bold text-xl font-serif">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 bg-brand-navy text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-serif font-bold mb-6">Why Choose Innovate AI?</h2>
                    <p className="text-gray-300 mb-8">
                        Most training providers are academic institutions moving slowly. We act like a tech startup—agile, fast, and results-oriented.
                    </p>
                </div>
                <div className="space-y-4">
                    {['Curriculum updated weekly', 'Instructors from Big Tech (Google, Meta)', 'Private community access', 'Certification included'].map(item => (
                        <div key={item} className="flex items-center gap-3">
                            <CheckCircle className="text-brand-highlight" size={24} />
                            <span className="text-lg font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};