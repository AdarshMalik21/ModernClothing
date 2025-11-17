import React, { useRef, useEffect } from "react";
import heroVideo from "../../assets/hero-bg.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) await videoRef.current.play();
      } catch (err) {
        console.error("Video playback failed:", err);
      }
    };
    playVideo();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Background Video */}
      
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold leading-tight">
          Wear Your Imagination.
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-text/80">
          Custom AI-designed clothing, crafted uniquely for you.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-5">
          <Link
            to="/browse"
            className="bg-accent text-white px-6 sm:px-8 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Browse Designs
          </Link>

          <Link
            to="/create"
            className="border border-white/40 text-white px-6 sm:px-8 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition"
          >
            Create Your Own
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;
