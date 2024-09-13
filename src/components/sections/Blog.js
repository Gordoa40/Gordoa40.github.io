import React, { useEffect } from 'react';
import { setPageTitle } from '../utils';
import { Link } from 'react-router-dom';
import PageTransition from './PageTransition';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Biomedical Engineering',
    excerpt: 'Exploring the cutting-edge technologies shaping the future of healthcare...',
    date: '2024-09-01',
  },
  {
    id: 2,
    title: 'From NASA to Pharmaceuticals: My Journey',
    excerpt: 'Reflecting on my career path and the lessons learned along the way...',
    date: '2024-08-15',
  },
  {
    id: 3,
    title: 'The Art of Woodworking in the Digital Age',
    excerpt: 'How traditional craftsmanship meets modern technology in furniture design...',
    date: '2024-08-01',
  },
];

const Blog = () => {
  useEffect(() => {
    setPageTitle("Blog");
  }, []);
  return (
    <PageTransition>
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </PageTransition>
  );
};

export default Blog;