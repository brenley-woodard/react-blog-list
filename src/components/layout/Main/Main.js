import React from 'react';
import './Main.css';
import useBlogs from '../../../hooks/useBlogs.js';
import BlogCard from '../../BlogCard/BlogCard.js';

export default function Main() {
  const blogs = useBlogs();

  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.name} {...blog} />
      ))}
    </main>
  );
}
