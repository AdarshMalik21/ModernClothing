import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

import axiosInstance from "../../api/axios";

// ⭐ Accept props: mode ("random" or "category") + categorySlug
export default function Reel({ mode = "random", categorySlug = null }) {
  const [reels, setReels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});
  const [soundOn, setSoundOn] = useState(false);

  const videoRefs = useRef([]);

  // ⭐ Fetch reels once based on mode
  useEffect(() => {
    let url = "reels/";

    if (mode === "random") url += "?random=true";
    if (mode === "category" && categorySlug)
      url += `?category=${categorySlug}`;

    axiosInstance
      .get(url)
      .then((res) => {
        setReels(res.data);
      })
      .catch((err) => console.error("Error fetching reels:", err));
  }, [mode, categorySlug]);

  // ⭐ Autoplay only the current video
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentIndex]);

  // ⭐ Scroll handler for TikTok-style switching
  const wrapperRef = useRef(null);

  const handleScroll = () => {
    const container = wrapperRef.current;
    if (!container) return;

    const scrollPos = container.scrollTop;
    const fullHeight = container.clientHeight;

    const index = Math.round(scrollPos / fullHeight);

    // update active reel if index changes
    if (index !== currentIndex) {
      setCurrentIndex(index);
      setSoundOn(false);
    }

    // infinite loop
    // if (index >= reels.length - 1) {
    //   setTimeout(() => {
    //     container.scrollTo({ top: 0, behavior: "smooth" });
    //     setCurrentIndex(0);
    //   }, 400);
    // }
  };

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (reels.length === 0) {
    return (
      <section className="w-full flex justify-center items-center py-32">
        <p className="text-gray-400 text-lg">Loading reels...</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center w-full py-10 bg-bg">
      <h2 className="text-4xl font-heading text-white mb-8">
        Trending Styles
      </h2>

      {/* ⭐ Vertical Scroll Container */}
      <div
        ref={wrapperRef}
        onScroll={handleScroll}
        className="
          w-[90%] max-w-md h-[75vh] overflow-y-scroll 
          snap-y snap-mandatory scrollbar-hide rounded-3xl bg-black
          scrollbar-hide

        "
      >
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="
              snap-start w-full h-[75vh] relative 
              flex justify-center items-center select-none
            "
          >
            {/* VIDEO */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-full object-contain"
              src={reel.video}
              muted={!soundOn}
              loop
              playsInline
            />

            {/* RIGHT BUTTONS */}
            <div className="absolute right-4 top-[25%] flex flex-col items-center gap-6 text-white">
              {/* LIKE */}
              <button
                onClick={() => toggleLike(reel.id)}
                className="text-3xl drop-shadow-lg"
              >
                {liked[reel.id] ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
              </button>

              {/* SAVE */}
              <button
                onClick={() => toggleSave(reel.id)}
                className="text-3xl drop-shadow-lg"
              >
                {saved[reel.id] ? (
                  <FaBookmark className="text-accent" />
                ) : (
                  <FaRegBookmark />
                )}
              </button>

              {/* SOUND */}
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
              to={`/product/${reel.product.id}`}
              className="
                absolute bottom-6 right-6 
                bg-accent text-white rounded-full font-semibold shadow-lg
                px-4 py-2 text-sm hover:bg-accent/80 transition
              "
            >
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
