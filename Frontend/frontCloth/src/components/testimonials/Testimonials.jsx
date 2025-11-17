import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Aarav Singh",
    text: "The AI-generated preview matched my final outfit almost perfectly! Amazing craftsmanship and fast delivery.",
    rating: 5,
  },
  {
    id: 2,
    name: "Meera Kapoor",
    text: "I described my dream lehenga, and they made it exactly how I imagined. Beautiful, detailed, and truly unique.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohit Mehta",
    text: "Loved the premium fabrics and the customization experience. The AI preview made ordering easy.",
    rating: 4,
  },
];

const Testimonials = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-10 lg:px-20 bg-bg text-center relative"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-heading font-semibold mb-4"
      >
        What Our Customers Say
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        className="text-text/80 text-base md:text-lg mb-14 max-w-2xl mx-auto"
      >
        Real experiences from real customers who trusted us with their fashion ideas.
      </motion.p>

      {/* Testimonials Container */}
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl hover:scale-[1.02] transition-transform"
          >
            {/* Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} className="text-accent text-xl" />
              ))}
            </div>

            {/* Text */}
            <p className="text-text/90 italic mb-6 leading-relaxed">
              "{t.text}"
            </p>

            {/* Name */}
            <h4 className="text-lg font-heading text-text/90">
              — {t.name}
            </h4>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
