import React, { useRef, useEffect } from "react";
import heroVideo from '../../assets/hero-bg.mp4';
import { Link } from "react-router-dom"; 

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to play video and handle any errors
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        console.error("Error playing video:", err);
      }
    };
    
    playVideo();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-7xl md:text-7xl font-heading font-semibold tracking-tight">
          Wear Your Imagination.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
          Custom AI-designed clothing, crafted uniquely for you.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/browse"
            className="bg-accent text-white px-8 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Browse Designs
          </Link>

          <Link
            to="/create"
            className="border border-white/40 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition"
          >
            Create Your Own
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;
