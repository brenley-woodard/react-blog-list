import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import './BlogCard.css';

export default function BlogCard({ title, subtitle, author, text, image }) {

  return (
    <div className="blog-card">
      <div className="details">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div>{author}</div>
        <div className="text">{text}</div>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
}
