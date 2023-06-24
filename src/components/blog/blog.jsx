import React, { useState } from 'react';
import BlogLayout from './blogLayout';
import { Link } from 'react-router-dom';
import { blogData } from '../../constant/blogData';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Blog = () => {
/*
const [currentIndex, setCurrentIndex] =useState(0);

const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? slides/length -1 : currentIndex -1;
  setCurrentIndex(newIndex);
};

  const nextSlide = ()  => {
   const isLastSlide = currentIndex === slides.length - 1;
   const newIndex = isLastSlideSlide ? 0 : currentIndex + 1;
   setCurrentIndex(newIndex);
};
*/
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-transparent">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-center">Discover our latest articles and news</h1>
          <p className="text-lg text-center text-gray-600">Biñan Articles</p>
        </div>
      </div>

      <div className="max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative">
        <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500" style={{ backgroundImage: `url(${blogData[0].image})` }}>
        
        </div>

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
