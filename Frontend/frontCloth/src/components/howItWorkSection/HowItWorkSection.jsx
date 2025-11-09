import { motion } from "framer-motion";
import { FiEdit3, FiImage, FiPackage } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HowItWorkSection = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto text-center">

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-heading font-semibold mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ amount: 0.4 }} // <-- THIS makes it re-trigger
      >
        How It Works
      </motion.h2>

      <div className="grid gap-16 md:grid-cols-3">

        <motion.div
          className="flex flex-col items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
        >
          <FiEdit3 className="text-accent text-5xl mb-6" />
          <h3 className="text-xl font-semibold font-body mb-3">Describe Your Look</h3>
          <p className="text-text/70 max-w-xs leading-relaxed">
            Tell us the vibe — we’ll handle the rest.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
        >
          <FiImage className="text-accent text-5xl mb-6" />
          <h3 className="text-xl font-semibold font-body mb-3">See It Instantly</h3>
          <p className="text-text/70 max-w-xs leading-relaxed">
            AI previews your outfit on a real model.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
        >
          <FiPackage className="text-accent text-5xl mb-6" />
          <h3 className="text-xl font-semibold font-body mb-3">Tailored & Delivered</h3>
          <p className="text-text/70 max-w-xs leading-relaxed">
            Handcrafted and delivered to your door.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorkSection;
