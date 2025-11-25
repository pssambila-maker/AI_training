import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppState, BlogPost, Course, Service, SiteConfig, Testimonial } from '../types';
import { INITIAL_STATE } from '../constants';

interface ContentContextType extends AppState {
  updateConfig: (key: keyof SiteConfig, value: string) => void;
  addCourse: (course: Course) => void;
  deleteCourse: (id: string) => void;
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  updateTestimonial: (id: string, content: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from LocalStorage or constant default
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('innovate_ai_content');
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });

  // Persist to LocalStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('innovate_ai_content', JSON.stringify(state));
  }, [state]);

  const updateConfig = (key: keyof SiteConfig, value: string) => {
    setState(prev => ({
      ...prev,
      config: { ...prev.config, [key]: value }
    }));
  };

  const addCourse = (course: Course) => {
    setState(prev => ({ ...prev, courses: [...prev.courses, course] }));
  };

  const deleteCourse = (id: string) => {
    setState(prev => ({ ...prev, courses: prev.courses.filter(c => c.id !== id) }));
  };

  const addPost = (post: BlogPost) => {
    setState(prev => ({ ...prev, posts: [post, ...prev.posts] }));
  };

  const deletePost = (id: string) => {
    setState(prev => ({ ...prev, posts: prev.posts.filter(p => p.id !== id) }));
  };

  const updateTestimonial = (id: string, content: string) => {
    setState(prev => ({
      ...prev,
      testimonials: prev.testimonials.map(t => t.id === id ? { ...t, content } : t)
    }));
  };

  return (
    <ContentContext.Provider value={{
      ...state,
      updateConfig,
      addCourse,
      deleteCourse,
      addPost,
      deletePost,
      updateTestimonial
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};