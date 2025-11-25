import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-200 transform active:scale-95";
  const variants = {
    primary: "bg-brand-navy text-white hover:bg-brand-blue shadow-lg hover:shadow-xl",
    secondary: "bg-white text-brand-navy hover:bg-gray-50",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props} />
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">{title}</h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);