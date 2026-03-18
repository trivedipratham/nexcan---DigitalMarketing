import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, TrendingUp, Zap, Target } from "lucide-react";

const testimonials = [
  {
    quote: "Nexcan Digital transformed our online presence. The returns from their ads were better than we expected. Our organic search visitors grew by 450% in months.",
    name: "Sarah Chen",
    role: "CMO @ TechVault",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    impact: "+450% ROI"
  },
  {
    quote: "Their data-driven approach is genuinely different. They don't guess — they know exactly what levers to pull. We've seen a 12X increase in quality leads.",
    name: "Marcus Rivera",
    role: "Founder @ ScaleUp Labs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    impact: "12X Leads"
  },
  {
    quote: "No other agency operates with this level of precision. They are a great partner that helped our team grow much faster.",
    name: "Emily Nakamura",
    role: "VP Marketing @ HealthBridge",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    impact: "Market Leader"
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-[#0B0F19] overflow-hidden relative border-t border-white/5">
      {/* Cinematic Kinetic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(109,40,217,0.1),transparent_70%)]" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-black text-white/[0.03] tracking-tighter uppercase leading-none select-none whitespace-nowrap"
          animate={{ x: ["-10%", "10%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        >
          SUCCESS
        </motion.div>
      </div>

      <div className="section-container relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          
          {/* Performance Dashboard Col */}
          <div className="w-full lg:w-[35%] space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-yellow-400/5 border border-yellow-400/10"
              >
                <Zap size={14} className="text-yellow-400" />
                <span className="text-yellow-400 text-xs font-mono uppercase tracking-[0.4em]">Validation Bureau</span>
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl font-display font-bold text-white tracking-tighter leading-none uppercase">
                Client <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Success.</span>
              </h2>
            </div>

            {/* Futuristic Instrument Stats */}
            <div className="grid grid-cols-1 gap-8">
              {[
                { label: "Active Campaigns", val: "450+", icon: Target, color: "text-zinc-400" },
                { label: "Avg. ROI Per Brand", val: "4.8X", icon: TrendingUp, color: "text-yellow-400" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <stat.icon size={40} />
                  </div>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-[0.3em] mb-2">{stat.label}</p>
                  <p className={`text-4xl font-display font-black ${stat.color} tracking-tighter`}>{stat.val}</p>
                  <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      className={`h-full bg-gradient-to-r ${i === 0 ? 'from-zinc-700 to-zinc-500' : 'from-yellow-600 to-yellow-400'}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonial Spotlight Col */}
          <div className="w-full lg:w-[60%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Massive Decorative Quote Wall */}
                <div className="absolute -top-16 -left-12 pointer-events-none select-none">
                  <span className="text-[200px] font-black text-white/[0.03] leading-none">“</span>
                </div>

                <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-12 lg:p-14 shadow-2xl overflow-hidden group min-h-[400px] md:min-h-[420px] lg:min-h-[450px] flex flex-col">
                  {/* Internal Glow Follow (Simulated) */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/5 blur-[100px] rounded-full group-hover:bg-yellow-400/10 transition-colors duration-1000" />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between flex-1">
                    <p className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white leading-[1.4] tracking-tight mb-8">
                      {testimonials[index].quote}
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-auto">
                      <div className="flex items-center gap-5">
                        <div className="relative">
                          <div className="absolute inset-0 bg-yellow-400 blur-md opacity-20 rounded-2xl" />
                          <img 
                            src={testimonials[index].image} 
                            alt={testimonials[index].name} 
                            className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl object-cover border border-white/20 relative z-10"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-display font-bold text-white tracking-tight mb-0.5">
                            {testimonials[index].name}
                          </h4>
                          <p className="text-[11px] font-mono text-yellow-400/80 uppercase tracking-widest">
                            {testimonials[index].role}
                          </p>
                        </div>
                      </div>

                      {/* Verified Impact Badge */}
                      <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center min-w-[140px] self-start md:self-center">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-0.5 font-bold">Verified Impact</span>
                        <span className="text-xl font-display font-black text-white">{testimonials[index].impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Professional Navigation Interface */}
            <div className="mt-12 flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-3xl p-4 md:p-6 backdrop-blur-xl">
              <div className="flex gap-4">
                <button 
                  onClick={prev}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-transparent transition-all duration-500"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={next}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-transparent transition-all duration-500"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Orbital Progress Indicators */}
              <div className="flex gap-3 px-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className="relative group"
                  >
                    <div className="w-12 h-1 rounded-full overflow-hidden bg-white/5 group-hover:bg-white/10 transition-colors">
                      <motion.div 
                        animate={{ width: i === index ? "100%" : "0%" }}
                        className="h-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)]"
                      />
                    </div>
                  </button>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-[0.3em] font-bold">
                 Spotlight <span className="text-yellow-400">0{index + 1}</span> / 0{testimonials.length}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
