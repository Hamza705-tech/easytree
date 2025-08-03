"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const About = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const elements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    elements.forEach(element => observer.observe(element));

    // Scroll event listener to toggle the scroll-to-top button
    const handleScroll = () => {
      const bottomOfPage =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 10;
      setShowScrollTop(bottomOfPage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main className="min-h-screen">
      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s, transform 1s;
        }

        .animate-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }

        .animate-zoom {
          transform: scale(0.9);
          transition: transform 1s ease-in-out;
        }

        .animate-zoom-visible {
          transform: scale(1);
        }

        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          background-color: #38a169; /* Green color */
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .scroll-to-top.visible {
          opacity: 1;
        }

        .scroll-to-top:hover {
          background-color: #2f855a; /* Darker green on hover */
        }

        /* Responsive Styling */
        @media (max-width: 768px) {
          .scroll-to-top {
            bottom: 10px;
            right: 10px;
            width: 40px;
            height: 40px;
          }
        }
        
        @media (max-width: 480px) {
          .scroll-to-top {
            bottom: 10px;
            right: 10px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <section className="text-gray-600 body-font">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 w-full text-3xl text-white mt-4 p-6">
          About
        </div>
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center ">
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center scroll-animate">
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-t from-teal-200 to-emerald-950 animate-scale">
              Welcome to easytree
              <br className="lg:inline-block" /> Simplify Your Links with ease
            </h1>
            <p>
      Hey! I&#39;m <strong>Hamza Siddiqui</strong>, a final-year Electrical Engineering student at 
      <strong>Delhi Technological University (DTU)</strong>, batch <strong>2K22/EE/114</strong>.
    </p>
    <p>
      I&#39;m passionate about solving real-world problems using the power of technology. I created 
      <strong>Easytree</strong> with a simple goal &mdash; to make long, messy URLs short, clean, and shareable.
      From building the front end to integrating the database and deploying it live, I handled everything 
      end-to-end to gain hands-on experience in full-stack web development.
    </p>
    <p>
      This project isn&#39;t just a portfolio piece &mdash; it reflects my journey of learning, debugging, and building
      something meaningful. I believe in continuous learning, building tools that help others, and writing 
      clean, efficient code that scales.
    </p>
    <p>
      Thanks for stopping by &mdash; feel free to explore Easytree and give your feedback!
    </p>
            <div className="flex justify-center gap-3">
              <Link href="/">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800  h-11">
                  <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                    Try Now
                  </span>
                </button>
              </Link>
               <Link href="https://github.com/Hamza705-tech/easyfy.website.git" target="_blank">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 ">
                  <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0  ">
                    Git hub
                  </span>
                </button>
              </Link> 
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 scroll-animate">
            <Image
              className="object-cover object-center rounded-lg shadow-xl mix-blend-darken animate-zoom"
              alt="Developer"
              src="/IMG_20250803_090839.jpg"
              width={400}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Scroll-to-Top Button */}
      <div
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        ↑
      </div>
    </main>
  );
};

export default About;
