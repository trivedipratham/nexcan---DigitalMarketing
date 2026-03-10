import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Morphing background shape */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] opacity-20 animate-morph blur-[100px]"
          style={{
            background: "linear-gradient(135deg, hsl(263 84% 58%), hsl(217 91% 53%))",
          }}
        />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="section-container relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-xs font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            NEXT-GEN DIGITAL MARKETING
          </div>
        </motion.div>

        <motion.h1
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Scale Your Brand
          <br />
          <span className="gradient-text">With Next-Gen</span>
          <br />
          Marketing
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We combine strategy, data, and creativity to help businesses dominate online.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Link to="/contact" className="btn-neon">
            Start Free Strategy Call
            <ArrowRight size={16} />
          </Link>
          <Link to="/case-studies" className="btn-ghost-neon">
            <Play size={14} />
            View Success Stories
          </Link>
        </motion.div>

        {/* Floating metric cards */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: "300%", label: "Avg. Traffic Growth" },
            { value: "5X", label: "Lead Generation" },
            { value: "120+", label: "Brands Scaled" },
            { value: "98%", label: "Client Retention" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card p-5 text-center group hover:border-primary/30 transition-all duration-500"
            >
              <div className="font-display font-extrabold text-2xl md:text-3xl text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
