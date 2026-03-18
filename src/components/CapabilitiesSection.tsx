import { motion } from "framer-motion";
import { 
  Search, 
  Rocket, 
  ShieldCheck, 
  Share2, 
  FileText, 
  Video,
  ChevronRight
} from "lucide-react";

/**
 * TECHNICAL COMPONENT: CapabilitiesSection
 * DESIGN PHILOSOPHY: Extreme Information Density & Vertical Efficiency
 */

const capabilities = [
  {
    icon: Search,
    title: "Search Optimization (SEO)",
    description: "Improving your search rankings so more people can find your business easily.",
    tags: ["Keywords", "Backlinks", "Audit"],
    id: "01"
  },
  {
    icon: Rocket,
    title: "Results-Focused Ads",
    description: "Smart ads designed to find real customers and get the best return on your spend.",
    tags: ["Google Ads", "Meta", "Scale"],
    id: "02"
  },
  {
    icon: ShieldCheck,
    title: "Smart Brand Strategy",
    description: "Building a strong brand and story to help you lead your market.",
    tags: ["Identity", "Voice", "Equity"],
    id: "03"
  },
  {
    icon: Share2,
    title: "Social Media Strategy",
    description: "Growing your social media presence and community with content that gets shared.",
    tags: ["Engagement", "Viral", "Meta"],
    id: "04"
  },
  {
    icon: FileText,
    title: "Content and Copy",
    description: "Creating great content that builds trust and helps turn readers into customers.",
    tags: ["Inbound", "Email", "Video"],
    id: "05"
  },
  {
    icon: Video,
    title: "Viral Reel Production",
    description: "Creating high-impact, cinematic reels that dominate social media algorithms and drive massive engagement.",
    tags: ["Cinematic", "Trending", "Viral"],
    id: "06"
  }
];

const CapabilitiesSection = () => {
  return (
    <section className="py-20 relative bg-[#0B0F19] overflow-hidden border-t border-white/5">
      {/* Decorative Grid Overlay - Very subtle to maintain professional look */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Compact Horizontal Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16 px-6 border-l-4 border-yellow-400">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase leading-none">
              Systems & <span className="text-yellow-400">Capabilities.</span>
            </h2>
            <div className="flex items-center gap-4 text-zinc-400 font-mono text-xs uppercase tracking-[0.4em]">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" /> SERVICES LIVE</span>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-zinc-300 font-body text-base max-w-[280px]"
          >
            We use smart systems to help your business grow and succeed online.
          </motion.p>
        </div>

        {/* Dense 3-Column Grid with Spacing */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, i) => {
            const cycleDuration = capabilities.length * 2; // Each card gets 2 seconds of focus
            const cardDelay = i * 2;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-zinc-900/20 border border-white/5 p-8 transition-all duration-300 hover:bg-zinc-900/40"
              >
                <div className="flex flex-col h-full">
                  {/* ID & Icon Row */}
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-mono text-[11px] text-white/90 tracking-widest uppercase">Service Segment</span>
                    <motion.div 
                      animate={{ 
                        opacity: [0.4, 1, 1, 0.4],
                        scale: [1, 1.1, 1.1, 1],
                        borderColor: ["#27272a", "#facc15", "#facc15", "#27272a"] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: cycleDuration - 2,
                        delay: cardDelay,
                        ease: "easeInOut" 
                      }}
                      className="w-10 h-10 rounded-lg bg-yellow-400/5 flex items-center justify-center text-yellow-400 border border-white/10"
                    >
                      <item.icon size={20} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.h3 
                    animate={{ 
                      color: ["#ffffff", "#facc15", "#facc15", "#ffffff"],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: cycleDuration - 2,
                      delay: cardDelay,
                      ease: "easeInOut" 
                    }}
                    className="font-display font-bold text-xl mb-3 tracking-tight"
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-zinc-300 text-sm font-body leading-relaxed mb-8 flex-1">
                    {item.description}
                  </p>

                  {/* Inline Tags & Action */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex gap-2">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="text-[11px] font-mono text-white/80 uppercase tracking-tighter">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      animate={{ 
                        x: [0, 4, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: cycleDuration - 2,
                        delay: cardDelay
                      }}
                    >
                    </motion.div>
                  </div>
                </div>

                {/* Sequential Laser Line Effect */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                  initial={{ width: "0%", left: "0%" }}
                  animate={{ 
                    width: ["0%", "100%", "0%"],
                    left: ["0%", "0%", "100%"]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: cycleDuration - 2,
                    delay: cardDelay,
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Status Row */}
        <div className="flex justify-between items-center mt-12 px-2 opacity-50 select-none">
          <span className="font-mono text-[11px] text-white tracking-[0.5em]">EXPERT SOLUTIONS</span>
          <div className="flex gap-4">
             <div className="w-1 h-1 bg-white" />
             <div className="w-1 h-1 bg-white" />
             <div className="w-1 h-1 bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
