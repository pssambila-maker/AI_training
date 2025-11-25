import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Button, Card } from '../components/Components';
import { Plus, Trash2, Edit2, Save } from 'lucide-react';
import { BlogPost, Course } from '../types';

export const Admin: React.FC = () => {
  const { config, updateConfig, courses, addCourse, deleteCourse, posts, addPost, deletePost } = useContent();
  const [activeTab, setActiveTab] = useState<'general' | 'courses' | 'blog'>('general');

  // Local state for new items
  const [newCourse, setNewCourse] = useState<Partial<Course>>({ title: '', level: 'Beginner', price: '' });
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({ title: '', tags: [] });

  const handleAddCourse = () => {
    if (newCourse.title && newCourse.price) {
      addCourse({
        id: Date.now().toString(),
        description: 'New course description placeholder',
        duration: '4 Weeks',
        ...newCourse
      } as Course);
      setNewCourse({ title: '', level: 'Beginner', price: '' });
    }
  };

  const handleAddPost = () => {
    if (newPost.title) {
      addPost({
        id: 'b' + Date.now().toString(),
        content: 'Content...',
        date: new Date().toLocaleDateString(),
        imageUrl: `https://picsum.photos/600/400?random=${Date.now()}`,
        excerpt: 'New blog post excerpt...',
        tags: ['News'],
        ...newPost
      } as BlogPost);
      setNewPost({ title: '', tags: [] });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-8 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">Admin Dashboard</h1>
        
        <div className="flex gap-4 mb-8 border-b border-gray-300 pb-1">
          {['general', 'courses', 'blog'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-3 px-4 capitalize font-medium transition-colors ${
                activeTab === tab ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-500 hover:text-brand-navy'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'general' && (
          <Card>
            <h2 className="text-xl font-bold mb-6">General Configuration</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hero Headline</label>
                <input 
                  className="w-full p-2 border rounded" 
                  value={config.heroHeadline} 
                  onChange={(e) => updateConfig('heroHeadline', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hero Subheadline</label>
                <textarea 
                  className="w-full p-2 border rounded" 
                  value={config.heroSubheadline} 
                  onChange={(e) => updateConfig('heroSubheadline', e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
                <p className="text-xs text-green-600 flex items-center gap-1"><Save size={14}/> Auto-saved to LocalStorage</p>
            </div>
          </Card>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-8">
            <Card>
              <h2 className="text-xl font-bold mb-4">Add New Course</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input 
                  placeholder="Course Title" 
                  className="p-2 border rounded" 
                  value={newCourse.title} 
                  onChange={e => setNewCourse({...newCourse, title: e.target.value})}
                />
                <select 
                  className="p-2 border rounded" 
                  value={newCourse.level} 
                  onChange={e => setNewCourse({...newCourse, level: e.target.value as any})}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <input 
                  placeholder="Price (e.g. $499)" 
                  className="p-2 border rounded" 
                  value={newCourse.price} 
                  onChange={e => setNewCourse({...newCourse, price: e.target.value})}
                />
              </div>
              <Button onClick={handleAddCourse} className="py-2 text-sm"><Plus size={16} className="inline mr-2" /> Add Course</Button>
            </Card>

            <div className="grid gap-4">
              {courses.map(course => (
                <div key={course.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-brand-navy">{course.title}</h3>
                    <p className="text-sm text-gray-500">{course.level} • {course.price}</p>
                  </div>
                  <button onClick={() => deleteCourse(course.id)} className="text-red-500 hover:bg-red-50 p-2 rounded">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="space-y-8">
            <Card>
              <h2 className="text-xl font-bold mb-4">Add Blog Post</h2>
              <div className="mb-4">
                <input 
                  placeholder="Article Title" 
                  className="w-full p-2 border rounded" 
                  value={newPost.title} 
                  onChange={e => setNewPost({...newPost, title: e.target.value})}
                />
              </div>
              <Button onClick={handleAddPost} className="py-2 text-sm"><Plus size={16} className="inline mr-2" /> Add Post</Button>
            </Card>

             <div className="grid gap-4">
              {posts.map(post => (
                <div key={post.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-brand-navy">{post.title}</h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                  <button onClick={() => deletePost(post.id)} className="text-red-500 hover:bg-red-50 p-2 rounded">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};