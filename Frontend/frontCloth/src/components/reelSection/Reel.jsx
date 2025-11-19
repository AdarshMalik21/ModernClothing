import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import video1 from "../../assets/clothvideo1.mp4";
import video2 from "../../assets/clothvideo2.mp4";

const reels = [
  {
    id: 1,
    video: video1,
    shopLink: "/product/1",
  },
  {
    id: 2,
    video: video2,
    shopLink: "/product/2",
  },
];

export default function Reel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});
  const [soundOn, setSoundOn] = useState(false);

  const videoRef = useRef(null);

  // Play/Pause sound when user taps volume button
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !soundOn;
    }
  }, [soundOn, currentIndex]);

  const nextReel = () => {
    setCurrentIndex((prev) => (prev + 1) % reels.length);
    setSoundOn(false); // reset sound
  };

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentReel = reels[currentIndex];

  return (
    <section className="flex flex-col items-center w-full py-20 bg-bg">
      <h2 className="text-4xl font-heading text-white mb-8">Trending Styles</h2>

      {/* ⚠️ FIXED: Removed overflow scrollbar */}
      <div className="relative w-[90%] max-w-md aspect-[9/16]  h-[75vh] bg-black rounded-3xl shadow-xl 
                      overflow-hidden select-none">

        {/* VIDEO (never causes overflow) */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          src={currentReel.video}
          playsInline
          muted={!soundOn}
          loop
          autoPlay
        />

        {/* RIGHT BUTTONS */}
        <div className="absolute right-4 top-[25%] flex flex-col items-center gap-6 text-white">

          {/* LIKE */}
          <button
            onClick={() => toggleLike(currentReel.id)}
            className="text-3xl drop-shadow-lg"
          >
            {liked[currentReel.id] ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
          </button>

          {/* SAVE */}
          <button
            onClick={() => toggleSave(currentReel.id)}
            className="text-3xl drop-shadow-lg"
          >
            {saved[currentReel.id] ? (
              <FaBookmark className="text-accent" />
            ) : (
              <FaRegBookmark />
            )}
          </button>

          {/* SOUND (plays only when tapped) */}
          <button
            onClick={() => setSoundOn(!soundOn)}
            className="text-3xl drop-shadow-lg"
          >
            {soundOn ? (
              <FaVolumeUp className="text-white" />
            ) : (
              <FaVolumeMute className="text-white" />
            )}
          </button>
        </div>

        {/* SHOP NOW */}
        <Link
          to={`/product/${currentReel.id}`}
          className="
    absolute bottom-6 right-6 
    bg-accent text-white rounded-full font-semibold shadow-lg
    transition hover:bg-accent/80

    /* 🔥 RESPONSIVE FIX */
    px-3 py-1.5 text-xs scale-90
    sm:px-4 sm:py-2 sm:text-sm sm:scale-100
    md:px-6 md:py-2.5 md:text-base
  "
        >
          Shop Now
        </Link>

        {/* NEXT BUTTON */}
        <button
          onClick={nextReel}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/20 
                     text-white rounded-full text-sm backdrop-blur-md hover:bg-white/30 transition"
        >
          Next ⬇
        </button>
      </div>
    </section>
  );
}
