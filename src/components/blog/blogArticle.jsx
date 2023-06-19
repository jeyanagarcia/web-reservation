import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../../constant/blogData';

const BlogArticle = ({ title, des, src, date, org }) => {
  let { articleKey } = useParams();

  
  const selectedArticle = blogData.find(article => article.articlekey === articleKey);

  if (!selectedArticle) {
    
    return <div>Article not found.</div>;
  }

  const { title, content } = selectedArticle;

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    
    </div>
  );
};

export default BlogArticle;
