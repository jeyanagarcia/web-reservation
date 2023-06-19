import React from 'react';
import BlogLayout from './blogLayout';
import { Link } from 'react-router-dom';
import { blogData } from '../../constant/blogData';



const Blog = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-transparent">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-center">Discover our latest articles and news</h1>
          <p className="text-lg text-center text-gray-600">Biñan Articles</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {blogData.map(article => (
          <Link to={`/article/${article.articlekey}`} key={article.articlekey}>
            <BlogLayout
              title={article.title}
              des={article.description}
              date={article.date}
              org={article.organization}
              src={article.image}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
