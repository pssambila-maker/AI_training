import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Twitter, Github, Cpu } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-brand-blue font-semibold" : "text-gray-600 hover:text-brand-blue";

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-navy">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-beige/95 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white">
                <Cpu size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none tracking-tight">INNOVATE</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">With AI™</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/about" className={isActive('/about')}>About</Link>
              <Link to="/programs" className={isActive('/programs')}>Training</Link>
              <Link to="/consulting" className={isActive('/consulting')}>Consulting</Link>
              <Link to="/blog" className={isActive('/blog')}>Insights</Link>
              <Link to="/contact" className={isActive('/contact')}>Contact</Link>
              <Link 
                to="/consulting" 
                className="bg-brand-navy text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-blue transition-colors"
              >
                Find a Consultant
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-beige">Home</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-beige">About</Link>
              <Link to="/programs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-beige">Training</Link>
              <Link to="/consulting" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-beige">Consulting</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-beige">Insights</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-beige">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-navy rounded-lg flex items-center justify-center text-white">
                    <Cpu size={18} />
                </div>
                <span className="font-serif font-bold text-lg">INNOVATE</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Empowering businesses and individuals to master the tools of tomorrow, today.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-brand-navy mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/about" className="hover:text-brand-blue">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-brand-blue">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-brand-blue">Press</Link></li>
                <li><Link to="/admin" className="text-gray-300 hover:text-brand-blue text-xs">Admin Login</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-brand-navy mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/blog" className="hover:text-brand-blue">Blog</Link></li>
                <li><Link to="/programs" className="hover:text-brand-blue">Courses</Link></li>
                <li><Link to="/consulting" className="hover:text-brand-blue">Consulting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-brand-navy mb-4">Stay Connected</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-brand-blue"><Linkedin size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-brand-blue"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-brand-blue"><Github size={20} /></a>
              </div>
              <p className="text-xs text-gray-400">© 2024 Innovate AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};