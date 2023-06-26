import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../../constant/blogData';

const BlogDetails = () => {
  const { articleKey } = useParams();
  const parsedArticleKey = parseInt(articleKey);
  const articleInfo = blogData.find((article) => article.articlekey === parsedArticleKey);

  return (
    <div className="container mx-auto px-4">
      <section className="bg-white rounded-lg shadow-md py-6">
        <div className="mt-24 ml-8 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <div>
            <h1 className="text-4xl font-bold">{articleInfo.title}</h1>
            <p className="text-gray-600">{articleInfo.date} | {articleInfo.organization}</p>
          </div>

          <div>
            <img
              className="w-full h-auto object-cover"
              src={articleInfo.image}
              alt="Article Image"
            />
          </div>
        </div>

        <div className="mt-8 ml-8">
          <p>{articleInfo.description}</p>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
