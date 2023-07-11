import React, { useState, useEffect } from 'react';
import BlogLayout from './blogLayout';
import { Link } from 'react-router-dom';
import { blogData } from '../../constant/blogData';

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const slideshowTimer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(slideshowTimer);
  }, [currentIndex]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === blogData.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 500); // Set the transition duration to 500ms
  };

  return (
    <section id="blog" className="w-full py-12 border-b-[1px] relative z-0">
      <div className="container mx-auto">
        <div className="mt-9  ml-4">
          <br />
          <br />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black-500">
            Discover our Latest Articles and News
          </h2>
          <p className="text-lg text-center text-gray-600">Biñan Articles</p>
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-between">
        <div className="max-w-[1400px] w-full m-auto py-12 px-4 relative">
          <Link to={`/article/${blogData[currentIndex].articlekey}`} key={blogData[currentIndex].articlekey}>
            <div
              className={`w-full h-[700px] rounded-2xl bg-center bg-cover duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ backgroundImage: `url(${blogData[currentIndex].image})` }}
            ></div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          {blogData.map((article) => (
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
      </div>
    </section>
  );
};

export default Blog;