import React from 'react';
import './Main.css';
import useBlogs from '../../../hooks/useBlogs';
import BlogCard from '../../BlogCard/BlogCard';

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
