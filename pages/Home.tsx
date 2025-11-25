import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MoveDown } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { Button, SectionTitle, Card } from '../components/Components';

export const Home: React.FC = () => {
  const { config, testimonials, posts } = useContent();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Simulate API call
      setTimeout(() => {
        setEmail('');
        alert('Thanks for subscribing!');
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <div className="bg-brand-beige">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-navy leading-[1.1] mb-6">
                Coaching, community & curriculum to help <span className="relative inline-block px-2">
                  <span className="absolute inset-0 bg-brand-highlight transform -skew-x-3 rounded-md opacity-50"></span>
                  <span className="relative">everyone</span>
                </span> thrive in our AI-powered future.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                {config.heroSubheadline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <form onSubmit={handleSubscribe} className="flex-grow flex gap-2">
                   <div className="flex-grow bg-white p-1 pl-4 rounded-full border border-gray-300 shadow-sm flex items-center focus-within:ring-2 focus-within:ring-brand-blue">
                     <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                     />
                     <Button type="submit" className="py-2 px-6 ml-2" disabled={submitted}>
                        {submitted ? 'Joined!' : 'Subscribe'}
                     </Button>
                   </div>
                </form>
              </div>

              <div className="flex flex-col items-center justify-center w-12 text-brand-blue animate-bounce mt-4">
                 <div className="relative h-12 w-6">
                     <MoveDown className="w-8 h-8" />
                 </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-300/50">
                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Trusted By Teams At</p>
                <div className="flex gap-8 opacity-50 grayscale">
                    {/* Placeholder Logos */}
                    <div className="h-6 w-20 bg-gray-800 rounded"></div>
                    <div className="h-6 w-20 bg-gray-800 rounded"></div>
                    <div className="h-6 w-20 bg-gray-800 rounded"></div>
                    <div className="h-6 w-20 bg-gray-800 rounded hidden sm:block"></div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-brand-highlight/20 rounded-[2rem] transform rotate-3"></div>
              <img 
                src={config.heroImage} 
                alt="Consulting Session" 
                className="relative rounded-[1.5rem] shadow-2xl w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-brand-blue font-semibold tracking-wide uppercase mb-3">Our Mission</h3>
            <p className="text-3xl md:text-5xl font-serif text-brand-navy max-w-4xl mx-auto leading-tight">
                "We believe AI isn't here to replace humans, but to <span className="italic text-brand-blue">empower</span> them. Our goal is to democratize access to these powerful tools through education and strategic implementation."
            </p>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-2">Weekly Insights</h2>
                    <p className="text-gray-600">Latest thoughts on the intersection of AI and business.</p>
                </div>
                <Link to="/blog" className="hidden md:flex items-center gap-2 text-brand-blue font-semibold hover:underline">
                    View all posts <ArrowRight size={18} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.slice(0, 3).map(post => (
                    <Link to="/blog" key={post.id} className="group">
                        <div className="overflow-hidden rounded-xl mb-4">
                            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex gap-2 mb-3">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2 py-1 rounded">{tag}</span>
                            ))}
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">{post.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Client Success Stories" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-blue" />
                    <div>
                        <h4 className="font-bold">{t.name}</h4>
                        <p className="text-sm text-gray-400">{t.role}, {t.company}</p>
                    </div>
                </div>
                <p className="text-gray-300 italic">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">Ready to future-proof your career?</h2>
            <p className="text-xl text-gray-600 mb-10">Join over 10,000 professionals mastering AI today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/programs">
                    <Button>Explore Courses</Button>
                </Link>
                <Link to="/consulting">
                    <Button variant="outline">Book Consultation</Button>
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};