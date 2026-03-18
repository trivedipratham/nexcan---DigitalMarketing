import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

const ScrollBadge = () => (
  <div className="absolute bottom-16 left-8 md:bottom-24 md:left-12 w-20 h-20 md:w-28 md:h-28 hidden md:flex items-center justify-center">
    <div className="relative w-full h-full animate-[spin_8s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id="circlePathHero"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="fill-muted-foreground text-[12px] font-body uppercase tracking-[0.25em]">
          <textPath href="#circlePathHero">
            SCROLL FOR MORE • SCROLL FOR MORE •{" "}
          </textPath>
        </text>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <ChevronDown className="text-muted-foreground" size={24} />
    </div>
  </div>
);

const WaveDivider = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 h-24 md:h-36 pointer-events-none select-none">
    <div
      className="absolute bottom-0 w-[200%] h-full flex"
      style={{
        willChange: "transform",
        animation: "wave-move 12s linear infinite",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave_grad_main" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="90%" stopColor="#0B0F19" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="wave_grad_back" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
            <stop offset="90%" stopColor="#0B0F19" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Back Wave - Tileable */}
        <path
          d="M0 80 Q 360 30 720 80 T 1440 80 T 2160 80 T 2880 80 V 120 H 0 Z"
          fill="url(#wave_grad_back)"
          transform="translate(0, 10)"
        />
        {/* Front Wave - Tileable */}
        <path
          d="M0 70 Q 360 20 720 70 T 1440 70 T 2160 70 T 2880 70 V 120 H 0 Z"
          fill="url(#wave_grad_main)"
        />
      </svg>
    </div>

    <style>{`
      @keyframes wave-move {
        from { transform: translate3d(0, 0, 0); }
        to { transform: translate3d(-50%, 0, 0); }
      }
    `}</style>
  </div>
);

const HeroSection = () => {
  const words = [
    "drive more leads.",
    "boost your ROI.",
    "grow your brand.",
    "turn visitors into customers.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-36 pb-32">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#0B0F19] overflow-hidden">
        {/* Cinematic Motion Background (Reliable Alternative to Video) */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1451187530220-4e2bd78f7ad6?auto=format&fit=crop&q=80&w=1600"
            alt="Hero Background"
            className="w-full h-full object-cover filter grayscale"
          />
          {/* Animated Overlay for Video-like feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-transparent to-[#0B0F19] opacity-80" />
        </motion.div>

        {/* Digital Grid & Pips */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

        {/* Dynamic floating mesh gradient orbs (Optimized for performance) */}
        <div className="absolute top-0 w-full h-full opacity-60">
          <motion.div
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(109,40,217,0.3)_0%,_transparent_60%)]"
            style={{ willChange: "transform" }}
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[10%] right-[-10%] w-[50%] h-[70%] pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.3)_0%,_transparent_60%)]"
            style={{ willChange: "transform" }}
            animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.15)_0%,_transparent_60%)]"
            style={{ willChange: "transform" }}
            animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Fine dotted texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,#000_20%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        <motion.h1
          className="font-display font-bold text-3xl md:text-6xl lg:text-6xl leading-[1.15] tracking-tight mb-6 text-foreground"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Digital Growth{" "}
          <span className="text-yellow-400 font-serif">Happens Here</span>
        </motion.h1>

        <motion.div
          className="text-muted-foreground text-lg md:text-2xl font-body mb-10 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span>Nexcan is a results-focused digital marketing agency that</span>
          <span className="font-serif relative inline-flex items-center justify-center sm:justify-start min-w-[200px] sm:min-w-[240px] text-foreground">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="whitespace-nowrap font-medium"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
            <svg
              className="absolute -bottom-3 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-[110%] sm:w-[240px]"
              viewBox="0 0 300 18"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Base thick stroke */}
              <path
                d="M25 12 Q 100 5, 200 9 T 255 10"
                stroke="#FBBF24"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Middle messy stroke */}
              <path
                d="M60 15 Q 150 8, 240 14 Q 260 15, 280 13"
                stroke="#F59E0B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Bottom finishing thin stroke */}
              <path
                d="M90 17 Q 160 14, 230 16"
                stroke="#D97706"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.div>

        {/* <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-body font-bold text-sm hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          >
            Get Started <ArrowRight size={16} />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-full font-body font-medium text-sm hover:border-yellow-400 transition-colors duration-300"
          >
            View Case Studies
          </Link>
        </motion.div> */}

        {/* Dashboard Frame Mockup */}
        <motion.div
          className="relative mx-auto w-full max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>

      <ScrollBadge />
      <WaveDivider />
    </section>
  );
};

export default HeroSection;
