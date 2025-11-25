import React, { useState } from 'react';
import { Button, SectionTitle, Card } from '../components/Components';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
        setSuccess(false);
        setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-brand-beige min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get in Touch" subtitle="Have questions about our programs or consulting? We'd love to hear from you." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Side */}
          <div className="col-span-1 space-y-6">
            <Card className="bg-brand-navy text-white border-none h-full p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Contact Info</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Mail className="text-brand-highlight mt-1" />
                        <div>
                            <p className="font-bold">Email Us</p>
                            <p className="text-gray-300 text-sm">hello@innovateai.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-brand-highlight mt-1" />
                        <div>
                            <p className="font-bold">Call Us</p>
                            <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="text-brand-highlight mt-1" />
                        <div>
                            <p className="font-bold">Visit Us</p>
                            <p className="text-gray-300 text-sm">100 Innovation Dr.<br/>San Francisco, CA 94105</p>
                        </div>
                    </div>
                </div>
            </Card>
          </div>

          {/* Form Side */}
          <div className="col-span-1 lg:col-span-2">
            <Card className="p-8 md:p-12">
                {success ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-12">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                            <CheckIcon />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-2">Message Sent!</h3>
                        <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:outline-none transition-shadow"
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:outline-none transition-shadow"
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea 
                                rows={4}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:outline-none transition-shadow"
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>
                        <Button type="submit" className="w-full md:w-auto">Send Message</Button>
                    </form>
                )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
)
