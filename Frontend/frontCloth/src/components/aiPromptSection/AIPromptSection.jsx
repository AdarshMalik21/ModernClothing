import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OpenAI from "openai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* Utility to download generated image */
// const downloadImage = (url) => {
//   const fileName = `youNiquethreads_design_${Date.now()}.png`;
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = fileName;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

const AIPromptSection = () => {
  const [query, setQuery] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDesignerInfo, setShowDesignerInfo] = useState(false);
  const navigate = useNavigate();

  /* Animation on scroll setup */
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const handleAI = async () => {
    if (!query.trim()) {
      alert("Please describe your design idea first.");
      return;
    }
    setLoading(true);
    setImageUrl("");
    try {
      
      const client = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY, // replace with env variable later
        baseURL: "https://api.a4f.co/v1",
        dangerouslyAllowBrowser: true,
      });

      const response = await client.images.generate({
        model: "provider-5/imagen-4-fast",
        prompt: query,
        n: 1,
        size: "1024x1024",
      });

      const generatedUrl = response.data[0].url;
      setImageUrl(generatedUrl);
      // downloadImage(generatedUrl);
    } catch (error) {
      console.error("Image generation failed:", error);
      alert("Image generation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = () => {
    if (imageUrl) {
      // downloadImage(imageUrl);
      navigate("/", { state: { imageUrl } });
    } else {
      alert("Please generate an image first.");
    }
  };

  return (
    <section
    
      ref={ref}
      className="relative flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 py-20 text-center overflow-visible bg-bg"
    >
      {/* Background gradient moved behind content */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 opacity-20 pointer-events-none -z-10" />

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="relative z-20 max-w-3xl w-full"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6 leading-tight">
          Design Your Dream Outfit with AI
          
        </h2>

        <p className="text-text/80 text-base md:text-lg mb-10 px-4">
          Describe your style — color, fabric, fit, and vibe.  
          Our AI will bring your idea to life instantly.
        </p>

        {/* Search Bar */}
        <div className="
          w-full max-w-3xl mx-auto 
          bg-white/5 backdrop-blur-md 
          rounded-2xl border border-white/10 shadow-lg 
          p-3
        ">

      <div className="flex flex-col sm:flex-row items-center gap-3">

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. Black satin kurta with minimal embroidery..."
          className="
            flex-1 
            px-4 py-3 
            bg-transparent 
            focus:outline-none 
            text-text placeholder:text-text/60 
            text-base sm:text-lg
            w-full
          "
        />

    {/* Button */}
    <button
      onClick={handleAI}
      className="
        w-full sm:w-auto 
        px-5 py-3 
        bg-accent hover:bg-accent/80 
        text-white 
        rounded-xl 
        transition 
        text-base font-medium
      "
    >
      {loading ? "Generating..." : "Generate"}
    </button>
  </div>

</div>

        {/* Generated image preview */}
        {imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col items-center w-full relative z-30"
          >
            <img
              src={imageUrl}
              alt="Generated Design"
              className="w-full max-w-md rounded-xl shadow-lg border border-white/10"
            />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-md justify-center px-4">
              <button
                onClick={handleViewDetails}
                className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition duration-300 whitespace-nowrap"
              >
                View Details
              </button>

              <button
                onClick={() => setShowDesignerInfo(true)}
                className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition duration-300 whitespace-nowrap"
              >
                Call Designer
              </button>
            </div>
          </motion.div>
        )}

        {/* Designer Modal */}
        {showDesignerInfo && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
            <div className="bg-white/10 backdrop-blur-xl text-white p-6 rounded-2xl shadow-xl text-center w-full max-w-sm border border-white/20">
              <h3 className="text-2xl font-heading mb-4">Designer Info</h3>
              <p className="text-lg mb-1">Name: Jane Doe</p>
              <p className="text-lg mb-4">Mobile: +91-9876543210</p>
              <button
                onClick={() => setShowDesignerInfo(false)}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full transition font-bold"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Background glow */}
      <div className="absolute -bottom-10 w-[500px] h-[500px] bg-accent/10 blur-3xl rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default AIPromptSection;
