import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Plus, Filter, Search, Target, TrendingUp, BarChart3, Globe, Zap, Users, MessageSquare, Mail } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import CtaSection from "@/components/CtaSection";
import organic from "../../public/Organic Traffic.jpg"
import roi from "../../public/Precision ROI Scaling.jpg"
import social from "../../public/The Social Revolution.jpg"
import leads from "../../public/Leads Generated.jpg"
import email from "../../public/Email Marketing.jpg"
import global from "../../public/Global Expansion.jpg"
const categories = [
  "All Projects",
  "SEO & Search",
  "Paid Media",
  "Social Growth",
  "Content Strategy",
  "Email Marketing"
];

const caseStudies = [
  {
    id: "01",
    title: "The Organic Powerhouse",
    client: "Lumens Retail",
    category: "SEO & Search",
    metric: "+320%",
    metricLabel: "Organic Traffic",
    description: "How we helped a brand lead their market using smart search tools and building trust.",
    image: organic,
    color: "from-yellow-400 to-yellow-600",
    glow: "rgba(250, 204, 21, 0.2)",
    tags: ["Strategy", "Technical SEO", "Backlinks"]
  },
  {
    id: "02",
    title: "Precision ROI Scaling",
    client: "Velocity Tech",
    category: "Paid Media",
    metric: "4.8X",
    metricLabel: "Return on Ad Spend",
    description: "Scaling a SaaS company's sales through smart Meta and LinkedIn ads.",
    image: roi,
    color: "from-blue-400 to-blue-600",
    glow: "rgba(37, 99, 235, 0.2)",
    tags: ["Meta Ads", "LinkedIn Ads", "Automation"]
  },
  {
    id: "03",
    title: "The Social Revolution",
    client: "Zest Beverage Co",
    category: "Social Growth",
    metric: "12M+",
    metricLabel: "Impressions",
    description: "Building a large following from scratch using influencer partnerships and short video stories.",
    image: social,
    color: "from-purple-400 to-purple-600",
    glow: "rgba(147, 51, 234, 0.2)",
    tags: ["TikTok", "Influencers", "Viral"]
  },
  {
    id: "04",
    title: "Authority Engines",
    client: "Nexus Financial",
    category: "Content Strategy",
    metric: "150%",
    metricLabel: "Leads Generated",
    description: "Establishing market leadership through high-value reports and strategic guest publishing.",
    image: leads,
    color: "from-emerald-400 to-emerald-600",
    glow: "rgba(16, 185, 129, 0.2)",
    tags: ["Whitepapers", "Blog", "PR"]
  },
  {
    id: "05",
    title: "Retention Reimagined",
    client: "Aura Skincare",
    category: "Email Marketing",
    metric: "42%",
    metricLabel: "Repeat Revenue",
    description: "Turning a static email list into a revenue-generating tool through smart emails and custom lists.",
    image: email,
    color: "from-pink-400 to-pink-600",
    glow: "rgba(236, 72, 153, 0.2)",
    tags: ["Klaviyo", "Automation", "Retention"]
  },
  {
    id: "06",
    title: "Global E-comm Expansion",
    client: "Nordic Gears",
    category: "SEO & Search",
    metric: "8",
    metricLabel: "New Markets",
    description: "Helping an outdoor equipment brand grow globally through multi-language SEO and global tools.",
    image: global,
    color: "from-orange-400 to-orange-600",
    glow: "rgba(249, 115, 22, 0.2)",
    tags: ["I18n", "Global SEO", "Scale"]
  }
];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const filteredCases = caseStudies.filter(c => {
    const matchesCategory = activeCategory === "All Projects" || c.category === activeCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div ref={containerRef} className="bg-[#0b0d17] text-white selection:bg-yellow-400 selection:text-black font-body">
      
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-yellow-400/[0.04] blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-blue-600/[0.04] blur-[160px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(11,15,25,0)_0%,rgba(11,15,25,0.8)_100%)]" />
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-28 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        {/* Massive Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02]">
           <h1 className="text-[28vw] font-display font-black leading-none tracking-tighter uppercase select-none">
             RESULTS
           </h1>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/[0.03] border border-white/5 py-2 px-4 sm:px-6 rounded-full backdrop-blur-sm mb-6 sm:mb-12">
               <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400 animate-pulse shrink-0" />
               <span className="text-yellow-400 font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black">Success Stories</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-[14vw] sm:text-7xl md:text-8xl lg:text-[140px] font-display font-black tracking-tighter uppercase leading-[0.8] mb-6 sm:mb-12">
              <span className="block text-white">DIGITAL.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white/90 to-white/40 underline decoration-yellow-400/20 underline-offset-[6px] sm:underline-offset-[12px]">SUCCESS.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-base sm:text-xl md:text-2xl text-zinc-300 font-body font-light max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-20 px-2">
              A deep look into the growth plans we've built for brands that want more than average results.
            </p>
          </ScrollReveal>

          {/* Statistics Strip */}
          <ScrollReveal delay={0.6}>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 items-center px-2 sm:px-4 py-6 sm:py-12 border-y border-white/5 bg-white/[0.01]">
               <div className="text-center group">
                   <p className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-white group-hover:text-yellow-400 transition-colors">₹50M+</p>
                  <p className="text-zinc-400 font-mono text-[8px] sm:text-xs uppercase tracking-wider sm:tracking-widest mt-1 sm:mt-3">Revenue Generated</p>
               </div>
               <div className="text-center group border-x border-white/5 px-2">
                  <p className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-white group-hover:text-yellow-400 transition-colors">450%</p>
                  <p className="text-zinc-400 font-mono text-[8px] sm:text-xs uppercase tracking-wider sm:tracking-widest mt-1 sm:mt-3">Avg ROI Scale</p>
               </div>
               <div className="text-center group">
                  <p className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-white group-hover:text-yellow-400 transition-colors">120+</p>
                  <p className="text-zinc-400 font-mono text-[8px] sm:text-xs uppercase tracking-wider sm:tracking-widest mt-1 sm:mt-3">Global Partners</p>
               </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
        >
        </motion.div>
      </section>

      {/* ── FILTER SECTION ── */}
      <section className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 sticky top-24 z-40 bg-[#04060b]/98 backdrop-blur-2xl border-y border-white/5">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
               {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-display text-[9px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest transition-all duration-300 border ${
                      activeCategory === cat 
                        ? 'bg-yellow-400 text-black border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.2)]' 
                        : 'bg-white/[0.02] text-zinc-400 border-white/5 hover:border-yellow-400/30 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
               ))}
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 text-zinc-600 bg-white/[0.02] border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl w-full md:w-auto">
               <Search size={14} className="shrink-0" />
               <input 
                 type="text" 
                 placeholder="Search project..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="bg-transparent border-none outline-none text-[10px] sm:text-xs font-mono tracking-widest text-white placeholder:text-zinc-500 w-full md:w-48"
               />
            </div>
         </div>
      </section>

      {/* ── CASE STUDIES LIST ── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-32 lg:space-y-64">
          {filteredCases.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-12 lg:gap-24`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-[62%] relative group">
                <div className="relative aspect-[4/3] rounded-2xl sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] bg-zinc-900">
                   <img 
                     src={study.image} 
                     alt={study.title} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1200ms] ease-out"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                   
                   {/* Results Badge */}
                   <div className="absolute top-3 left-3 sm:top-10 sm:left-10 bg-black/80 backdrop-blur-2xl border border-white/10 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                      <p className={`text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${study.color}`}>
                        {study.metric}
                      </p>
                      <p className="text-[8px] sm:text-xs font-display text-zinc-400 uppercase tracking-widest mt-1 font-bold">{study.metricLabel}</p>
                   </div>
                </div>
                
                {/* Decorative Glow */}
                <div className="absolute inset-0 -z-10 blur-[120px] opacity-20 transition-opacity duration-1000 group-hover:opacity-40" style={{ backgroundColor: study.glow }} />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-[38%] space-y-6 sm:space-y-10">
                <div className="space-y-4 sm:space-y-8">
                  <div className="flex items-center gap-3 sm:gap-6">
                     <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/[0.03] border border-white/5 text-yellow-400 font-mono text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black shrink-0">
                       {study.category}
                     </span>
                     <div className="h-px flex-1 bg-white/5" />
                     <span className="text-zinc-400 font-mono text-[9px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold shrink-0">Client_{study.id}</span>
                  </div>
                   
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-display font-black tracking-tighter uppercase leading-[0.95] text-white">
                    {study.title}
                  </h2>
                   
                  <p className="text-base sm:text-lg text-zinc-300 font-body font-light leading-relaxed border-l-2 border-yellow-400/20 pl-4 sm:pl-6">
                    {study.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4">
                   {study.tags.map((tag, idx) => (
                      <span key={idx} className="text-[9px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider sm:tracking-widest border border-white/5 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/[0.01] hover:text-white transition-colors">
                        {tag}
                      </span>
                   ))}
                </div>

                <div className="pt-4 sm:pt-8 group/btn">
                  <Link to="/contact" className="inline-flex items-center gap-4 sm:gap-8 group">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-all duration-700 shadow-2xl shrink-0">
                        <ArrowUpRight size={20} className="sm:w-7 sm:h-7 group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                    <div className="space-y-1 text-left">
                        <p className="text-white font-display font-black text-base sm:text-xl uppercase tracking-tighter">View Case Study</p>
                        <p className="text-[9px] sm:text-[11px] font-mono text-yellow-400/60 uppercase tracking-wider sm:tracking-widest font-black group-hover:text-yellow-400 transition-colors">Full Project Report</p>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <div className="py-22">
        <CtaSection />
      </div>

      {/* ── FOOTER STYLE PADDING ── */}
      <div className="h-40 bg-[#04060b]" />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;
