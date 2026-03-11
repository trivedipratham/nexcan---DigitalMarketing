import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Deep Navy Background with Edge Glow */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-60" />
      </div>

      {/* Thin Vertical Grid columns */}
      <div className="absolute inset-0 z-0 flex justify-between px-[5%] opacity-20 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-full w-px bg-white/20" />
        ))}
      </div>

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
          className="font-display font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight mb-6 text-foreground drop-shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Business Facelifts <span className="text-primary">Happen Here</span>
        </motion.h1>

        <motion.div
          className="text-foreground text-xl md:text-3xl max-w-3xl mx-auto mb-16 font-light flex flex-wrap justify-center items-center gap-x-2 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span>Web solutions that</span>
          <span className="font-serif italic relative">
            delight your customers.
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-primary stroke-current overflow-visible"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M 5,5 Q 50,8 100,5 T 195,5" />
            </svg>
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 bg-transparent border border-white/30 rounded-full hover:border-primary hover:text-primary overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        </motion.div>

        {/* Animated Browser Mockup (Digital Marketing Video/Carousel Style) */}
        <motion.div
          className="mt-20 relative mx-auto w-full max-w-5xl rounded-[2rem] border-[8px] border-secondary/80 bg-secondary shadow-2xl overflow-hidden drop-shadow-[0_20px_50px_rgba(41,152,255,0.15)]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          style={{ transform: "perspective(1200px) rotateX(2deg)" }}
        >
          {/* Browser Top Bar */}
          <div className="flex h-12 w-full items-center gap-2 bg-secondary/90 px-4">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <div className="mx-auto flex h-6 w-1/3 items-center justify-center rounded-md bg-background/50 text-[10px] text-muted-foreground/80 font-mono">
              analytics.nexcan.dev
            </div>
          </div>

          {/* Video / Animated Dashboard Content Area */}
          <div className="relative aspect-[16/9] w-full bg-background overflow-hidden">
            {/* We use an animated wrapper to slide multiple digital marketing dashboards smoothly */}
            <div className="absolute inset-0 flex w-[300%] animate-carousel">
              {/* Slide 1 - Data Analytics */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
                  alt="Digital Marketing Analytics Dashboard"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-10 left-10 z-20">
                  <h3 className="text-3xl font-display font-bold text-white shadow-black drop-shadow-lg">
                    Real-Time Data Tracking
                  </h3>
                  <p className="text-primary font-medium">
                    Maximize your ROI instantly.
                  </p>
                </div>
              </div>
              {/* Slide 2 - Campaign Scaling */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                  alt="Campaign Scaling"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-10 left-10 z-20">
                  <h3 className="text-3xl font-display font-bold text-white shadow-black drop-shadow-lg">
                    Omnichannel Campaigns
                  </h3>
                  <p className="text-primary font-medium">
                    Dominate platforms where it matters.
                  </p>
                </div>
              </div>
              {/* Slide 3 - Strategic Planning */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                  alt="Strategic Planning"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-10 left-10 z-20">
                  <h3 className="text-3xl font-display font-bold text-white shadow-black drop-shadow-lg">
                    Data-Driven Strategy
                  </h3>
                  <p className="text-primary font-medium">
                    Conversion optimized funnels.
                  </p>
                </div>
              </div>
            </div>
            {/* Optional Overlay scanning line (Neon style) */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/50 shadow-[0_0_8px_hsl(var(--primary))] animate-[scan-line_4s_linear_infinite]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
