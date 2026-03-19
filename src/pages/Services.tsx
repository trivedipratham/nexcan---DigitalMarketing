import { motion } from "framer-motion";
import { 
  Search, 
  Target, 
  Share2, 
  MessageSquare, 
  ArrowUpRight, 
  Sparkles,
  MousePointer2,
  TrendingUp,
  Globe,
  Zap,
  Activity,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import CtaSection from "@/components/CtaSection";
import growth from "../../public/growth.jpg";
import search from "../../public/SEO & Search Engine Help.jpg"
import ad from "../../public/Google Ads Specialist.jpg"
import social from "../../public/Social Media Success.jpg"
import content from "../../public/Content Creation.jpg"
import growthh from "../../public/Grow.jpg"
const services = [
  {
    icon: Search,
    title: "Search Results Success",
    subtitle: "SEO & Search Engine Help",
    desc: "We help your brand show up first in searches. Our tech experts make sure people find you easily when they look for what you offer.",
    features: [
      "Core Web Vitals Mastery",
      "Search Data Structure",
      "High-Authority Backlinks",
      "Search Result Optimization",
      "Local Search Success"
    ],
    img: search,
    gradient: "from-blue-600/30 to-cyan-500/30",
  },
  {
    icon: Target,
    title: "Paid Ad Results",
    subtitle: "Ads & Better Returns",
    desc: "We combine smart numbers with creative ads on Google, Facebook, and LinkedIn to find your customers at the best price.",
    features: [
      "Smart Bidding Models",
      "Ad Testing",
      "Retargeting Design",
      "Attribution Modeling",
      "Product Ad Systems"
    ],
    img: ad,
    gradient: "from-orange-600/30 to-yellow-500/30",
    kpi: "Avg. 4.8x ROAS across all channels"
  },
  {
    icon: Share2,
    title: "Social Media Success",
    subtitle: "Engaging Your Audience",
    desc: "Turning followers into fans. We create content that gets noticed and builds a strong following for your brand.",
    features: [
      "Professional Video Content",
      "Influencer Growth",
      "Engagement Tracking",
      "Real-Time Interaction",
      "Viral Trend Content"
    ],
    img: social,
    gradient: "from-purple-600/30 to-pink-500/30",
    kpi: "210% increase in organic engagement"
  },
  {
    icon: MessageSquare,
    title: "Content and Copy",
    subtitle: "Creating Content and Ads",
    desc: "We build systems to tell your brand's story and help turn interested people into happy customers.",
    features: [
      "Brand Messaging Strategy",
      "Automated Email Systems",
      "Detailed Guides",
      "Sales-Focused Writing",
      "Content Flows"
    ],
    img: content,
    gradient: "from-emerald-600/30 to-teal-500/30",
    kpi: "15% CR Improvement from funnel opt"
  },
  {
    icon: Sparkles,
    title: "Business Growth Advice",
    subtitle: "Expert Advice to Grow Fast",
    desc: "Scale your brands to the next level. We provide the vision and technical plan to grow your business into a market leader.",
    features: [
      "Market Entry Plans",
      "Tech Audits",
      "Growth Forecasting",
      "Brand Refinement",
      "Business Reviews"
    ],
    img: growthh,
    gradient: "from-yellow-400/30 to-zinc-400/30",
    kpi: "8/10 Clients achieve 2X scale in 18 months"
  }
];

const methodology = [
  { icon: Activity, title: "Review", text: "We start by checking your digital presence to find areas to improve." },
  { icon: Zap, title: "Plan Setup", text: "We create a 90-day plan focused on the most important actions first." },
  { icon: ShieldCheck, title: "Daily Checks", text: "We check things daily to make sure your budget is spent wisely." },
  { icon: Cpu, title: "Growth Stage", text: "Once we have a winning plan, we scale it up to help you lead your market." }
];

const Services = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#04070e] text-white min-h-screen selection:bg-yellow-400 selection:text-black font-body overflow-x-hidden">
    
    {/* ── AMBIENT BACKGROUND ── */}
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-400/5 blur-[150px] rounded-full" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] blend-overlay" />
    </div>

    {/* ── CONTENT ── */}
    <div className="relative z-10 w-full font-body">
      
      {/* ── CINEMATIC ARCHITECTURAL HERO ── */}
      <section className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-12 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        
        {/* Background Layer: System Pips & Kinetic Watermark */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute inset-0 bg-[#04070e]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:50px_50px]" />
          
          {/* Vertical Grid Lines */}
          <div className="absolute inset-0 flex justify-around opacity-[0.03]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-px h-full bg-white" />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 0.02, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-display font-black text-white tracking-tighter leading-none whitespace-nowrap"
          >
            NEXCAN SUCCESS
          </motion.div>
        </div>

        {/* Atmospheric Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -100, 0],
                opacity: [0, 0.5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 8 + i * 2, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 0.5
              }}
              className="absolute w-0.5 h-0.5 bg-yellow-400 rounded-full"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%` 
              }}
            />
          ))}
        </div>

        <div className="relative z-20 max-w-[1450px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-16 lg:gap-24">
          
          {/* LEFT: THE NARRATIVE ARC */}
          <div className="lg:w-[50%] space-y-6 sm:space-y-10 text-left">
            <ScrollReveal>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex items-center gap-2 sm:gap-4 bg-white/[0.03] border border-white/5 py-2 px-3 sm:px-5 rounded-full backdrop-blur-md w-fit">
                   <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400 animate-pulse shrink-0" />
                   <span className="text-yellow-400 font-mono text-[8px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black">Full-Service Digital Marketing</span>
                </div>
                
                <h1 className="text-[13vw] sm:text-6xl md:text-8xl lg:text-[110px] font-display font-black tracking-tighter leading-[0.85] uppercase pr-2 sm:pr-10">
                  GROWTH <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-white/40">PLANS.</span>
                </h1>
              </div>

              <div className="relative pl-4 sm:pl-10 border-l border-white/10 mt-6 sm:mt-12">
                <p className="text-zinc-400 text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-xl">
                   Smart <span className="text-white font-medium">marketing systems</span> designed to help your investment grow.
                </p>
                <div className="absolute top-0 left-[-2px] w-1 h-8 sm:h-12 bg-yellow-400" />
              </div>

              <div className="pt-6 sm:pt-12 flex flex-wrap gap-4 sm:gap-8 items-center">
                 <Link to="/contact" className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-yellow-400 text-black font-display text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] overflow-hidden rounded-xl sm:rounded-2xl">
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                       Deploy Strategy <ArrowUpRight size={16} />
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: THE 3D VISUAL ELEMENT */}
          <div className="lg:w-[45%] relative">
            <ScrollReveal delay={0.3}>
              <div className="relative aspect-square w-full max-w-[320px] sm:max-w-[450px] md:max-w-[600px] mx-auto">
                {/* Architectural Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-white/[0.05] rounded-full hidden sm:block"
                    style={{ margin: `${i * 12}%`, borderStyle: i === 1 ? 'dashed' : 'solid' }}
                  />
                ))}
                
                {/* The Core Image/Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative rounded-2xl sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden group shadow-[0_0_100px_rgba(250,204,21,0.05)]"
                  >
                    <img 
                      src={growth} 
                      alt="Digital Architecture" 
                      className="w-full h-full object-cover brightness-[0.7] group-hover:brightness-100 transition-all duration-1000 scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent opacity-40" />
                    
                    {/* Floating HUD Elements */}
                    <div className="absolute top-3 left-3 sm:top-8 sm:left-8 p-2 sm:p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl space-y-1 sm:space-y-2">
                       <div className="flex items-center gap-1.5 sm:gap-2">
                          <Activity size={10} className="text-yellow-400 sm:w-3 sm:h-3" />
                          <span className="text-[8px] sm:text-[10px] font-mono text-white/80 tracking-widest uppercase">Live Activity</span>
                       </div>
                       <div className="h-0.5 sm:h-1 w-16 sm:w-24 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="h-full w-1/2 bg-yellow-400"
                          />
                       </div>
                    </div>

                    <div className="absolute bottom-3 right-3 sm:bottom-8 sm:right-8 p-2 sm:p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl text-right">
                       <p className="text-sm sm:text-[24px] font-display font-black text-white leading-none">99.9%</p>
                       <p className="text-[8px] sm:text-[10px] font-mono text-zinc-300 uppercase tracking-widest mt-0.5 sm:mt-1">Uptime_Efficiency</p>
                    </div>
                  </motion.div>
                </div>

                {/* Satellite Nodes */}
                <div className="absolute inset-0 pointer-events-none hidden sm:block">
                   {[Search, Target, Share2].map((Icon, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          x: Math.cos((i * 120) * (Math.PI / 180)) * 180,
                          y: Math.sin((i * 120) * (Math.PI / 180)) * 180
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-black/80 border border-white/10 flex items-center justify-center text-yellow-400 backdrop-blur-xl shadow-2xl"
                        style={{ zIndex: 30 }}
                      >
                         <Icon size={20} />
                      </motion.div>
                   ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── THE SERVICE STAGE (ALTERNATING LAYOUT) ── */}
      <section id="services-list" className="pb-16 sm:pb-32 px-4 sm:px-6 md:px-12 lg:px-24 pt-16 sm:pt-32">
        <div className="max-w-[1400px] mx-auto space-y-20 sm:space-y-32 md:space-y-48">
          {services.map((s, i) => (
            <ScrollReveal key={i}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-12 lg:gap-32`}>
                
                {/* Visual Anchor */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[5/5] rounded-2xl sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className=" object-cover transition-all duration-[1.5s] ease-out" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${s.gradient} opacity-20 group-hover:opacity-10 transition-opacity`} />
                  </div>
                  
                  {/* Decorative Architectural Elements */}
                  <div className={`absolute -bottom-8 ${i % 2 === 0 ? '-right-8' : '-left-8'} w-32 h-32 bg-yellow-400/5 blur-[60px] rounded-full pointer-events-none`} />
                </div>

                {/* Content Narrative */}
                <div className="w-full lg:w-1/2 space-y-6 sm:space-y-10">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-6">
                       <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-xl shrink-0">
                          <s.icon size={24} className="sm:w-8 sm:h-8" />
                       </div>
                       <div className="h-px flex-1 bg-white/10" />
                       <span className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.6em] font-black shrink-0">Solution 0{i+1}</span>
                    </div>

                    <div className="space-y-2 sm:space-y-4">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase leading-none pr-2 sm:pr-10">
                        {s.title}
                      </h2>
                      <p className="text-yellow-400 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black">{s.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4">
                    {s.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-yellow-400 shrink-0" />
                        <span className="text-[9px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-zinc-200 font-bold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── THE DIGITAL BLUEPRINT (METHODOLOGY) ── */}
      <section id="methodology" className="py-20 sm:py-32 md:py-48 px-4 sm:px-6 md:px-12 lg:px-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12 mb-16 sm:mb-24 md:mb-32 border-b border-white/5 pb-10 sm:pb-20">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-yellow-400 font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.8em] font-black">Methodology_System</p>
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none">
                  THE <span className="text-zinc-800">PLAN.</span>
                </h2>
              </div>
              <p className="max-w-md text-zinc-500 font-light text-base sm:text-xl leading-relaxed">
                Our work is precise. We use a clear plan to ensure your growth is <span className="text-white">steady and sustainable.</span>
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {methodology.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3.5rem] bg-white/[0.02] border border-white/5 group hover:bg-yellow-400 hover:border-transparent transition-all duration-700 h-full flex flex-col justify-between overflow-hidden">
                  <div className="absolute -top-10 -right-10 text-[6rem] sm:text-[10rem] font-display font-black text-white/[0.01] group-hover:text-black/5 pointer-events-none">
                    0{i + 1}
                  </div>
                  <div className="space-y-4 sm:space-y-8 relative z-10">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-black group-hover:text-yellow-400 transition-all">
                      <item.icon size={18} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="space-y-2 sm:space-y-4">
                      <h3 className="text-base sm:text-xl md:text-2xl font-display font-black text-white group-hover:text-black uppercase tracking-tighter">{item.title}</h3>
                      <p className="text-zinc-500 group-hover:text-black/70 text-xs sm:text-sm md:text-base font-light leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE RECORD ── */}
      <section className="py-20 sm:py-32 md:py-48 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto text-center">
          <ScrollReveal>
            <div className="space-y-12 sm:space-y-24">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-24 items-center">
                {[
                  { val: "50+", sub: "Global Markets Penetrated", label: "Scale" },
                  { val: "12x", sub: "Avg Client ROI Velocity", label: "Velocity" },
                  { val: "10+", sub: "Creative & Technical Minds", label: "Architecture" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-2 sm:space-y-4 group">
                    <p className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tighter leading-none group-hover:text-yellow-400 transition-colors duration-500">{stat.val}</p>
                      <div className="space-y-1">
                       <p className="text-[9px] sm:text-xs font-mono text-zinc-300 uppercase tracking-[0.2em] sm:tracking-[0.5em] font-bold group-hover:text-white transition-colors">{stat.label}</p>
                       <p className="text-[8px] sm:text-[11px] font-mono text-yellow-500/60 uppercase tracking-wider sm:tracking-widest hidden sm:block">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
    </div>
  </div>
);
};

export default Services;
