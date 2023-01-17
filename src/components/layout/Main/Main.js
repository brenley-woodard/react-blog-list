import React from 'react';
import './Main.css';
import { getBlogs } from '../../../services/blogs';
import useBlogs from '../../../hooks/useBlogs';

export default function Main() {
  const blogs = useBlogs();
  console.log(blogs);
  return (
    <div>Main
    </div>
  );
}
