import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp, Cpu, Globe, BarChart, Zap } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Search,
    title: "Market Research",
    subtitle: "Study and Review",
    metric: "100%",
    metricLabel: "Transparency",
    description: "Detailed research into competitors and how customers think. We find exactly where your audience is online.",
    color: "from-blue-400 to-cyan-400"
  },
  {
    icon: Lightbulb,
    title: "Creating Your Plan",
    subtitle: "Growth Strategy",
    metric: "12X",
    metricLabel: "Avg Scaling",
    description: "Designing precise growth plans. Every campaign is built with smart models to make sure your budget is spent efficiently.",
    color: "from-purple-400 to-indigo-400"
  },
  {
    icon: Rocket,
    title: "Going Live",
    subtitle: "Fast Action",
    metric: "0.2s",
    metricLabel: "Response Time",
    description: "Starting your campaign everywhere online at once. We take fast action that adapts to the changing market.",
    color: "from-yellow-400 to-orange-400"
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    subtitle: "Ongoing Improvement",
    metric: "+450%",
    metricLabel: "KPI Uplift",
    description: "Always improving with data. We use smart loops to grow what's working and fix what's not in real-time.",
    color: "from-emerald-400 to-teal-400"
  },
];

const ProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const flowY = useTransform(scrollYProgress, [0, 1], ["-10%", "110%"]);

  return (
    <section 
      ref={containerRef}
      className="pt-32 pb-12 relative bg-[#0B0F19] overflow-hidden border-t border-white/5"
    >
      {/* Cinematic Background - MAINTAINED BASE */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=60&w=1400")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.1,
          filter: 'brightness(0.4)'
        }}
      />

      {/* "WATER FLOWS" - Kinetic Liquid Overlays */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none z-1" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-yellow-400/10 via-transparent to-transparent pointer-events-none z-1" />
      
      {/* Flowing Particles Effect */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent"
            style={{ 
              left: `${(i + 1) * 15}%`,
              top: `${(i % 3) * 30}%`
            }}
            animate={{ 
              y: [0, 1000],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 px-6">
        
        {/* Cinematic Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-yellow-400/50 rounded-full animate-[bounce_1s_infinite_0s]" />
              <div className="w-1 h-5 bg-yellow-400 rounded-full animate-[bounce_1s_infinite_0.2s]" />
              <div className="w-1 h-3 bg-yellow-400/50 rounded-full animate-[bounce_1s_infinite_0.4s]" />
            </div>
            <span className="text-white/80 text-xs font-mono tracking-[0.5em] uppercase">Architecture v4.0</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-none select-none md:pr-12">
            WORKFLOW <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800">SIMPLIFIED.</span>
          </h2>
        </div>

        {/* STEP MATRIX */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Central Fluid Pipe */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block">
            <motion.div 
              style={{ top: flowY }}
              className="absolute left-1/2 -translate-x-1/2 w-4 h-32 bg-gradient-to-b from-transparent via-yellow-400 to-transparent blur-md opacity-30"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`relative group ${i % 2 !== 0 ? 'lg:translate-y-24' : ''}`}
                >
                  {/* Step Card Interface */}
                  <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 overflow-hidden group/card shadow-2xl hover:bg-white/[0.04] transition-all duration-700 h-full">
                    
                    {/* BARS POP OUT - Interactive 3D Metric Bars */}
                    <div className="absolute top-0 right-0 p-4 sm:p-6 flex flex-col gap-1 sm:gap-2 transition-transform duration-500 z-20">
                      {[60, 90, 45].map((h, bi) => (
                        <div key={bi} className="flex items-center gap-2 sm:gap-3 justify-end group/bar">
                          <div className="w-12 sm:w-16 md:w-20 h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden relative">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${h}%` }}
                              className={`h-full bg-gradient-to-r ${step.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                              transition={{ duration: 1.5, delay: 0.5 + (bi * 0.2) }}
                            />
                          </div>
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br ${step.color} opacity-0 group-hover/card:opacity-100 transition-opacity`} />
                        </div>
                      ))}
                    </div>

                    <div className="relative z-10 space-y-8">
                      {/* Icon & Title Group */}
                      <div className="space-y-4 pr-16 md:pr-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-[#0B0F19] shadow-lg transition-transform duration-500 shrink-0`}>
                            <Icon size={24} className="md:size-[28px]" strokeWidth={2.5} />
                          </div>
                          <div>
                            <p className="text-[9px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest">{step.subtitle}</p>
                            <h3 className="text-xl md:text-3xl font-display font-bold text-white tracking-tight">{step.title}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Main Narrative */}
                      <p className="text-zinc-300 font-body text-sm md:text-base leading-relaxed max-w-sm">
                        {step.description}
                      </p>

                      {/* POP-OUT METRIC */}
                      <div className="pt-8 border-t border-white/5 flex items-end justify-between">
                        <div className="space-y-1">
                          <span className="text-[10px] md:text-[11px] font-mono text-zinc-500 block uppercase tracking-[0.2em]">{step.metricLabel}</span>
                          <span className="text-3xl md:text-4xl font-display font-black text-white tracking-tighter leading-none">{step.metric}</span>
                        </div>
                        <div className="flex gap-1.5 pb-1">
                           {[...Array(4)].map((_, di) => (
                             <div key={di} className={`w-1.5 h-1.5 rounded-full ${di < (i + 1) ? 'bg-yellow-400' : 'bg-white/10'}`} />
                           ))}
                        </div>
                      </div>
                    </div>

                    {/* Aesthetic Background Accents */}
                    <div className={`absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-br ${step.color} opacity-0 group-hover/card:opacity-10 blur-[100px] transition-opacity duration-1000`} />
                  </div>

                  {/* Connecting Label (lg only) */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${i % 2 === 0 ? '-left-16 -translate-x-1/2' : '-right-16 translate-x-1/2'} hidden lg:flex items-center gap-4 pointer-events-none z-0`}>
                    <div className={`w-2 h-2 rounded-full border border-yellow-400/50 group-hover:scale-150 transition-transform duration-500`} />
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[1em] whitespace-nowrap [writing-mode:vertical-lr] rotate-180">Protocol v{i + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cinematic Watermark */}
        <div className="mt-8 relative h-24 md:h-40 overflow-hidden pointer-events-none select-none opacity-20">
          <motion.div 
             animate={{ x: ["-100%", "100%"] }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="text-[80px] md:text-[150px] font-black text-transparent stroke-white/10 whitespace-nowrap"
             style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
          >
            NEXCAN DIGITAL WORKFLOW NEXCAN DIGITAL WORKFLOW
          </motion.div>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes bounce {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50% { transform: scaleY(1.5); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
