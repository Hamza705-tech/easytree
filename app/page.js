"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on page load
    const timer = setTimeout(() => setFadeIn(true), 300); // Delay for smooth fade-in
    return () => clearTimeout(timer);
  }, []);


  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const header = document.querySelector("#animated-header");
    const subheader = document.querySelector("#animated-subheader");

    if (header) header.classList.add("animate-header");
    if (subheader) subheader.classList.add("animate-subheader");

    // Scroll animation for elements
    const elements = document.querySelectorAll(".scroll-animate");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((element) => observer.observe(element));

    // Track scroll position for the "scroll-to-top" button
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 10;
      setShowScrollToTop(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listeners and observers on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const createTree = () => { 
    
    router.push(`/generate?handle=${text}`)
  }
  return (
    <main className="bg-gradient-to-t from-teal-200 to-emerald-100">
      <style jsx>{`
        #animate-header {
          animation: slide-in 1.5s ease-out forwards;
        }
        .animate-subheader {
          animation: slide-in 1s ease-in forwards;
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        /* Scroll-to-top button */
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
          align-items: center;
          justify-content: center;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          opacity: 0;
          transform: scale(0.9);
        }

        .scroll-to-top.visible {
          opacity: 1;
          transform: scale(1);
        }

        .scroll-to-top:hover {
          transform: scale(1.1);
        }
      `}</style>

      <section className="  min-h-[100vh] grid grid-cols-1  md:grid-cols-2 h-auto md:h-screen p-6 md:p-12">
    <div  className="flex justify-center flex-col ml-[10vw] gap-3  items-center  text-center md:text-left scroll-animate">
      <div id= "animate-header">
      <p className=" text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-teal-200 to-emerald-950 animate-scale"
          >Everything  you </p>
      <p className=" text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-teal-200 to-emerald-950 animate-scale">are. In one,</p>
      <p  className=" text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-teal-200 to-emerald-950 animate-scale">simple link in bio.</p>
      </div>
      <p  className={ `" text-lg md:text-xl px-4 md:px-6 text-gray-700 font-serif animate-scale mx-auto max-w-lg bg-gradient-to-t from-teal-500 to-emerald-100 p-8 rounded-lg flex flex-col gap-4 transition-all duration-500 ease-in-out ${fadeIn ? "opacity-100" : "opacity-0" }`} >
      EasyTree is the ultimate link-in-bio tool — share everything you create, curate, and sell from one smart link. Works perfectly with Instagram, TikTok, YouTube, and more.
      </p>
      <div className="input flex gap-2">
        <input value={text} onChange={(e)=> setText(e.target.value)} className="px-2 py-2 rounded-md  focus:outline-teal-600  transition-transform duration-200 transform hover:scale-105 focus:ring-2 focus:ring-teal-300 animate__animated animate__fadeIn animate__delay-2s" type="text" placeholder="Enter your Handle" />
        <button onClick={()=> createTree()} className="bg-pink-300 rounded-full px-4 py-4 font-semibold bg-gradient-to-t from-emerald-800 to-teal-100  shadow-lg p-3  my-3 text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl active:scale-95 animate__animated animate__fadeIn animate__delay-2s">Claim your Bittree</button>
      </div>
    </div>
    <div className="flex items-center justify-center flex-col mr-[10vw]">
      <img src="/image.png" alt="homepage image" />

    </div>
      </section>

      {/* Elaboration Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:mt-36">
        {[
          { title: "User-Friendly", description: "Intuitive and easy-to-use interface for everyone.", imageSrc: "/laugh.png" },
          { title: "Fast Processing", description: "Shorten your URLs within seconds.", imageSrc: "/performance.png" },
          { title: "Enhanced Security", description: "Advanced encryption for secure link sharing.", imageSrc: "/cyber-security.png" },
          { title: "Customizable Links", description: "Create personalized URLs to match your brand.", imageSrc: "/networking.png" },
          { title: "No Sign-Up Needed", description: "Get started without any registration hassle.", imageSrc: "/arrow.png" },
          { title: "Multi-Device Support", description: "Access from any device, anywhere.", imageSrc: "/multi-device.png" }
        ].map(({ title, description, imageSrc }, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-xl scroll-animate"
          >
            <div className="w-16 h-16 mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={`${title} icon`}
                width={64}
                height={64}
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">{title}</h3>
            <p className="mt-2 text-center text-gray-600">{description}</p>
          </div>
        ))}
      </section>

      {/* Reviews Section */}
      <section className="p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          What Customers Say About Us
        </h2>
        <div className="flex gap-4 overflow-x-scroll no-scrollbar p-4">
          {[
            { name: "John Doe", review: "An amazing service! Quick and reliable. Highly recommended." },
            { name: "Jane Smith", review: "Super easy to use and very effective. Love the simplicity!" },
            { name: "Alice Brown", review: "Highly secure and no unnecessary logins. Perfect for my needs!" },
            { name: "Robert Johnson", review: "The best URL shortener out there. Fast and reliable." },
            { name: "Emily Davis", review: "Great experience! The customizable links are a game changer." },
          ].map(({ name, review }, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white shadow-lg rounded-lg p-6 w-64 transition-transform transform hover:scale-105 hover:shadow-xl scroll-animate"
            >
              <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
              <p className="text-sm text-gray-600 mt-2">{`"${review}"`}</p>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, star) => (
                  <span key={star} className="text-yellow-400">&#9733;</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
