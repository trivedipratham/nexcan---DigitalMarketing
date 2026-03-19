import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden text-center flex items-center justify-center">
        {/* Massive Watermark - Scaled down */}
        <div className="absolute rotate-[-5deg] opacity-[0.01]">
          <span className="text-[40vw] md:text-[25vw] font-display font-black text-white tracking-tighter leading-none select-none uppercase">
            GROW
          </span>
        </div>

        {/* Energy Lines / Mesh Effect */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>

        {/* Central Blackhole Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0.06)_0%,_transparent_60%)] animate-pulse" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Pulsing Core Icon - Scaled down */}
            <div className="relative mb-8 group scale-90">
              <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-10 group-hover:opacity-30 transition-opacity animate-pulse" />
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center relative z-10 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <Zap size={28} className="text-yellow-400 fill-yellow-400/20" />
              </div>
              
              {/* Orbital Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-yellow-400/10 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tighter uppercase leading-[0.95] mb-6">
              Ready to <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-600">Grow?</span>
            </h2>

            <p className="text-zinc-500 font-body text-sm md:text-lg max-w-lg mx-auto leading-relaxed mb-8 md:mb-10 px-4 md:px-0">
              The bridge between where you are and where you want to be starts with a chat. Let's build your success.
            </p>

            {/* Compact Premium CTA Button */}
            <div className="relative group/btn">
              <div className="absolute inset-x-0 -bottom-2 bg-yellow-400/20 blur-xl h-8 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-3 md:gap-4 bg-white text-black px-8 md:px-10 py-4 md:py-5 rounded-full font-display font-black text-[10px] md:text-[12px] tracking-[0.2em] uppercase overflow-hidden hover:bg-yellow-400 transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 whitespace-nowrap">Start Growing Today</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
