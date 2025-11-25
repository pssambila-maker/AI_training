import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { SectionTitle } from '../components/Components';
import { Search } from 'lucide-react';

export const Blog: React.FC = () => {
  const { posts } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = Array.from(new Set(posts.flatMap(p => p.tags)));

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Insights & Analysis" subtitle="Deep dives into the mechanics of the AI revolution." />

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <button 
                    onClick={() => setSelectedTag(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!selectedTag ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    All
                </button>
                {allTags.map(tag => (
                    <button 
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTag === tag ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="relative w-full md:w-64">
                <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
                <article key={post.id} className="flex flex-col h-full bg-brand-beige rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                    <div className="overflow-hidden h-48">
                         <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold text-brand-blue">{post.tags[0]}</span>
                            <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3 leading-snug group-hover:text-brand-blue transition-colors">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                        <span className="text-brand-navy font-semibold text-sm border-b-2 border-brand-highlight inline-block w-max pb-0.5">Read Article</span>
                    </div>
                </article>
            ))}
        </div>

        {filteredPosts.length === 0 && (
            <div className="text-center py-24 text-gray-500">
                <p className="text-xl">No articles found matching your criteria.</p>
            </div>
        )}
      </div>
    </div>
  );
};