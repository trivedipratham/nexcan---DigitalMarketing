import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Plus, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import osa from "../../public/organic-search.webp"
import paid from "../../public/paid-media-scaled.jpg"
import social from "../../public/social2.png"
/**
 * TECHNICAL COMPONENT: CaseStudiesSection
 * DESIGN PHILOSOPHY: Immersive Parallax Grid & High-End Card Interactions
 * COLORS: Striking contrast between Zinc-950 and Yellow-400
 */

const cases = [
  {
    industry: "E-Commerce",
    strategy: "Top Search Results",
    result: "+320%",
    metric: "Organic Traffic Growth",
    image: osa,
    glow: "rgba(250, 204, 21, 0.15)",
    id: "01"
  },
  {
    industry: "Tech Company",
    strategy: "Smart Paid Ads",
    result: "4.8X",
    metric: "Return on Ad Spend",
    image: paid,
    glow: "rgba(37, 99, 235, 0.15)",
    id: "02"
  },
  {
    industry: "Lifestyle Brand",
    strategy: "Viral Social Growth",
    result: "12M+",
    metric: "Viral Impressions",
    image: social,
    glow: "rgba(147, 51, 234, 0.15)",
    id: "03"
  }
];

const CaseStudiesSection = () => {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="py-24 relative bg-[#0B0F19] overflow-hidden z-10 border-t border-white/5"
    >
      {/* SECTION TRANSITIONS - Top and Bottom gradients for seamless blending */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent z-20 pointer-events-none" />

      {/* Dynamic Background Auras */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-yellow-400/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-purple-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="section-container relative z-10 px-6 lg:px-12">
        
        {/* Header Section - Better alignment & spacing */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 w-full"
          >
            <div className="flex items-center gap-3 text-yellow-400 font-mono text-[10px] md:text-xs uppercase tracking-[0.5em]">
              <Plus size={12} className="animate-spin-slow" /> Strategic Results
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8] md:pr-12">
              IMPACT <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800">REVEALED.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:text-right pb-2 max-w-sm w-full"
          >
             <p className="text-zinc-300 font-body text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
               We don't just launch campaigns; we engineer financial breakthroughs for the world's most ambitious brands.
             </p>
              <Link to="/case-studies" className="group flex items-center gap-3 text-white font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] md:justify-end">
                <span className="border-b border-yellow-400 pb-1 group-hover:text-yellow-400 transition-colors">Archive 2024</span>
                <ArrowUpRight size={14} className="text-yellow-400 group-hover:rotate-45 transition-transform" />
              </Link>
          </motion.div>
        </div>

        {/* Immersive Vertical Grid - Fixed spacing and alignment */}
        <div className="space-y-24 md:space-y-40">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center justify-between`}
            >
              {/* Image Terminal - Responsive Sizing */}
              <div className="w-full lg:w-[62%] relative group perspective-1000">
                <motion.div 
                  className="relative overflow-hidden rounded-2xl md:rounded-[2.5rem] border border-white/10 shadow-3xl bg-zinc-900"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 z-20 pointer-events-none" />
                  
                  {/* Image Wrap */}
                  <div className="h-[300px] md:h-[550px] lg:h-[600px] w-full overflow-hidden">
                     <img
                        src={c.image}
                        alt={c.industry}
                        loading="eager"
                        className="w-full h-full object-cover transition-all duration-1000 ease-out"
                     />
                  </div>

                  {/* Corner Accent Overlay */}
                  <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-bl from-yellow-400/20 to-transparent z-20 pointer-events-none" />
                  
                  <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-30">
                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white transition-all duration-500 shadow-2xl">
                        <ArrowUpRight size={20} className="md:size-24" />
                     </div>
                  </div>
                </motion.div>

                {/* Floating Aura */}
                <div className="absolute inset-0 -z-10 blur-[120px] opacity-20 transition-opacity duration-700" style={{ backgroundColor: c.glow }} />
              </div>

              {/* Glass Data Card - Refined Padding and Spacing */}
              <div className="w-full lg:w-[32%] relative">
                 <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 md:p-14 rounded-3xl md:rounded-[3rem] shadow-2xl relative overflow-hidden group/card md:min-h-[450px] flex flex-col justify-center">
                    {/* Animated Glow on Card */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/10 blur-[60px] rounded-full transition-colors" />

                    <div className="space-y-6 md:space-y-10 relative z-10">
                       <div className="space-y-2 md:space-y-4">
                          <div className="flex items-center gap-3">
                             <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                             <span className="font-mono text-[10px] md:text-xs text-zinc-400 uppercase tracking-[0.4em]">{c.industry}</span>
                          </div>
                          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
                             {c.strategy}
                          </h3>
                       </div>

                       <div className="space-y-2">
                          <span className="text-zinc-400 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.3em] block">Certified Performance</span>
                          <div className="relative overflow-visible">
                             <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-transparent stroke-text tracking-tighter mb-2 md:mb-4 pr-10">
                                {c.result}
                             </p>
                             <div className="flex items-center gap-4">
                                <p className="text-lg md:text-2xl font-display font-bold text-yellow-400 tracking-tight">
                                   {c.metric}
                                </p>
                                <div className="h-px flex-1 bg-white/10" />
                             </div>
                          </div>
                       </div>

                       <div className="pt-8 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">Digital_Engine_v1.0</span>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>



      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          text-shadow: 0 0 30px rgba(255,255,255,0.1);
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection;
