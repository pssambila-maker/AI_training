import React from 'react';
import { useContent } from '../context/ContentContext';
import { SectionTitle, Button, Card } from '../components/Components';
import { Clock, BarChart, ChevronRight } from 'lucide-react';

export const Programs: React.FC = () => {
  const { courses } = useContent();

  return (
    <div className="bg-brand-beige min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="World-Class Training Programs" 
          subtitle="Cohort-based courses designed to take you from novice to expert." 
        />

        <div className="grid grid-cols-1 gap-8">
          {courses.map(course => (
            <Card key={course.id} className="flex flex-col md:flex-row gap-8 items-start md:items-center p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-brand-blue">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                        ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : 
                          course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {course.level}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Clock size={14} /> {course.duration}
                    </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4 max-w-2xl">{course.description}</p>
                <div className="flex items-center gap-2 text-brand-blue font-semibold group cursor-pointer">
                    View Syllabus <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-4 min-w-[200px]">
                <div className="text-3xl font-bold text-brand-navy">{course.price}</div>
                <Button>Enroll Now</Button>
                <p className="text-xs text-gray-500 text-center md:text-right">Next cohort starts soon</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};