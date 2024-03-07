
import React from 'react';
import './BlogCard.css'; 

const BlogCard = ({ image, title, content, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}...</p>
        <a href={link} className="card-link">Read More...</a>
      </div>
    </div>
  );
};

export default BlogCard;
