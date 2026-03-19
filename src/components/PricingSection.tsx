import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ArrowRight, LayoutGrid, Search, Share2, Target, PenTool, Database } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { id: "SEO", icon: Search, label: "SEO Plans" },
  { id: "Social", icon: Share2, label: "Social Growth" },
  { id: "Ads", icon: Target, label: "Paid Ads" },
  { id: "Content", icon: PenTool, label: "Content & Email" },
  { id: "Full", icon: LayoutGrid, label: "Full Packages" },
  { id: "Addons", icon: Database, label: "Add-Ons" },
];

const pricingData: Record<string, any[]> = {
  SEO: [
    {
      name: "SEO Starter",
      price: "₹8,000",
      description: "Ideal for local businesses starting their organic search journey.",
      features: ["Website SEO Audit", "Keyword Research (10 keywords)", "On-Page SEO Optimization", "Meta Tags Optimization", "Basic Technical SEO", "Google Search Console Setup", "Monthly SEO Report"],
      highlighted: false
    },
    {
      name: "Advanced SEO",
      price: "₹15,000",
      description: "Better optimization for growing brands that want to lead their market.",
      features: ["Complete Website SEO Audit", "Keyword Research (25 keywords)", "On-Page SEO Optimization", "Technical SEO Fixes", "Competitor Analysis", "Local SEO Optimization", "Monthly SEO Report"],
      highlighted: true
    },
    {
      name: "Premium SEO",
      price: "₹30,000",
      description: "Expert-level search results and high-quality link systems.",
      features: ["Advanced SEO Strategy", "Keyword Research (50+ keywords)", "On-Page + Off-Page SEO", "High Quality Backlinks", "Technical SEO Optimization", "Content Optimization", "Weekly Performance Reports"],
      highlighted: false
    }
  ],
  Social: [
    {
      name: "Social Starter",
      price: "₹7,000",
      description: "Keep your social presence active and professionally managed.",
      features: ["8 Social Media Posts / Month", "Account Management", "Caption Writing", "Basic Graphic Design", "Hashtag Strategy", "Monthly Report", "Platforms: Instagram & Facebook"],
      highlighted: false
    },
    {
      name: "Social Growth",
      price: "₹15,000",
      description: "Scale your engagement with strategic Reels and cross-platform growth.",
      features: ["16 Social Media Posts / Month", "Reels & Stories Creation", "Social Media Strategy", "Audience Engagement", "Hashtag Research", "Monthly Performance Report", "Platforms: IG, FB, LinkedIn"],
      highlighted: true
    },
    {
      name: "Social Premium",
      price: "₹30,000",
      description: "Daily content updates and full community management.",
      features: ["25 Posts / Month", "Reels & Video Content", "Social Media Strategy", "Influencer Collaboration Support", "Community Management", "Weekly Reports"],
      highlighted: false
    }
  ],
  Ads: [
    {
      name: "Google Ads Starter",
      price: "₹10,000",
      description: "Efficiently managed PPC campaigns for immediate lead generation.",
      features: ["Campaign Setup", "Keyword Targeting", "Ad Copy Creation", "Basic Conversion Tracking", "Monthly Optimization", "Ad Budget: Separate"],
      highlighted: false
    },
    {
      name: "Google Ads Growth",
      price: "₹20,000",
      description: "Better results with testing to see which ads work best.",
      features: ["Advanced Campaign Setup", "Competitor Analysis", "Conversion Tracking", "A/B Testing", "Ad Optimization", "Weekly Reports"],
      highlighted: true
    },
    {
      name: "Social Ads",
      price: "₹15,000",
      description: "Targeted Meta & Instagram ads to get more customers fast.",
      features: ["Ads Campaign Setup", "Audience Targeting", "Ad Creative Strategy", "Lead Generation Campaigns", "Monthly Optimization", "Facebook & Instagram Ads"],
      highlighted: false
    }
  ],
  Content: [
    {
      name: "Content Marketing",
      price: "₹12,000",
      description: "Search-friendly blog posts to build trust in your brand.",
      features: ["4 SEO Blog Articles / Mo", "Content Strategy", "Keyword Optimization", "Website Content Writing", "Content Performance Tracking"],
      highlighted: true
    },
    {
      name: "Email Marketing",
      price: "₹8,000",
      description: "Emails designed to get more replies and sales.",
      features: ["Email Campaign Setup", "Newsletter Design", "Customer Segmentation", "Automation Workflow", "Email Analytics"],
      highlighted: false
    }
  ],
  Full: [
    {
      name: "Complete Digital",
      price: "₹45,000",
      description: "The 'All-in-One' plan for steady business growth.",
      features: ["Full SEO Services", "Social Media Marketing", "Paid Advertising Management", "Content Marketing", "Email Marketing", "Monthly Holistic Report"],
      highlighted: true
    },
    {
      name: "Enterprise Plan",
      price: "₹90,000+",
      description: "Custom marketing plans for top businesses.",
      features: ["Full Digital Strategy", "Advanced SEO + Ads + Social", "Marketing Automation", "Advanced Analytics", "Dedicated Marketing Manager", "Weekly Strategy Calls"],
      highlighted: false
    }
  ],
  Addons: [
    {
      name: "Website SEO Audit",
      price: "₹5,000",
      description: "A check of your website to find and fix any problems.",
      features: ["Technical Site Audit", "Speed Optimization Check", "Actionable Performance Map"]
    },
    {
      name: "Landing Page Opt",
      price: "₹7,000",
      description: "Redesigning your pages to get more sales from your visitors.",
      features: ["UI/UX Review", "Conversion Copywriting", "Form Optimization"]
    },
    {
      name: "Influencer Setup",
      price: "₹15,000+",
      description: "Finding and working with the best people to promote your brand.",
      features: ["Influencer Identification", "Negotiation & Management", "Campaign ROI Tracking"]
    }
  ]
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("SEO");

  return (
    <section className="pt-32 pb-16 relative bg-[#0B0F19] overflow-hidden">
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/5 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="section-container relative z-10 px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
            <Star size={14} className="text-yellow-400 fill-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-[10px] font-mono uppercase tracking-[0.4em]">Price List</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold text-white tracking-tighter uppercase leading-[0.9] md:leading-none mb-8">
            Our <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-200 to-zinc-800">Plans.</span>
          </h2>
        </motion.div>

        {/* ── CATEGORY TABS ── */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 md:gap-4 mb-10 w-full mx-auto px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`
                flex items-center justify-center gap-2 md:gap-3 px-4 sm:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-display text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300
                ${activeTab === cat.id 
                  ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20" 
                  : "bg-white/5 text-zinc-500 border border-white/5 hover:bg-white/10"
                }
              `}
            >
              <cat.icon size={14} className="md:size-[16px]" />
              <span className="truncate">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* ── PLAN GRID ── */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className={`grid ${activeTab === 'Addons' ? 'md:grid-cols-3' : (pricingData[activeTab]?.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-3')} gap-8 items-stretch max-w-7xl mx-auto`}
            >
              {pricingData[activeTab].map((plan, i) => (
                <div key={i} className="relative group flex flex-col h-full">
                  <div className={`
                    relative h-full flex flex-col rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-12 transition-all duration-500 overflow-hidden
                    ${plan.highlighted 
                      ? "bg-white/[0.04] backdrop-blur-3xl border-2 border-yellow-400/40 shadow-[0_0_50px_rgba(250,204,21,0.1)] z-20" 
                      : "bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 z-10"
                    }
                  `}>
                    <header className="mb-8 md:mb-10">
                      <div className="flex items-center justify-between mb-2">
                         <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">{plan.name}</h3>
                         {plan.highlighted && (
                           <span className="bg-yellow-400 text-black text-[8px] md:text-[9px] font-black uppercase px-2 md:px-3 py-1 rounded-full tracking-widest whitespace-nowrap">Best Choice</span>
                         )}
                      </div>
                      <p className="text-zinc-500 text-[12px] md:text-[13px] leading-relaxed mb-6 h-auto md:h-12">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter">{plan.price}</span>
                        <span className="text-zinc-500 text-[10px] md:text-xs font-medium uppercase tracking-widest whitespace-nowrap">/ Month</span>
                      </div>
                    </header>

                    <div className="space-y-6 mb-12 flex-1">
                      <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em] border-b border-white/5 pb-2">What's Included</p>
                      <ul className="space-y-4">
                        {plan.features.map((f: string, j: number) => (
                          <li key={j} className="flex items-start gap-3 group/item">
                            <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${plan.highlighted ? 'bg-yellow-400/20' : 'bg-white/5 group-hover/item:bg-white/10'}`}>
                              <Check size={12} className={plan.highlighted ? 'text-yellow-400' : 'text-zinc-400'} />
                            </div>
                            <span className="text-zinc-400 text-[13px] leading-snug group-hover/item:text-zinc-200 transition-colors font-light">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/contact?plan=${encodeURIComponent(plan.name)}`}
                      className={`
                        w-full py-5 rounded-3xl font-display font-bold text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-3 transition-all duration-300
                        ${plan.highlighted
                          ? "bg-yellow-400 text-black hover:bg-yellow-300 shadow-xl shadow-yellow-400/20"
                          : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                        }
                      `}
                    >
                      Start Plan <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── STRATEGY CONSULTATION ADD-ON (SPECIAL CARD) ── */}
        {activeTab === 'Addons' && (
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 md:mt-20 max-w-4xl mx-auto p-6 sm:p-12 rounded-3xl sm:rounded-[3.5rem] bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 text-center relative overflow-hidden group"
           >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-2xl">
                    <Star size={28} />
                 </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tighter">Marketing Strategy Consultation</h3>
                    <p className="text-zinc-400 font-light text-sm md:text-base">One-on-one session with our marketing experts to help your business grow.</p>
                 </div>
                 <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-display font-black text-yellow-400">₹3,000</span>
                    <span className="text-zinc-600 font-mono text-[10px] md:text-xs uppercase tracking-widest">/ Session</span>
                 </div>
                 <Link to="/contact?plan=Marketing%20Strategy%20Consultation" className="w-full sm:w-auto px-10 py-4 sm:py-5 bg-white text-black font-display font-black text-[10px] sm:text-xs uppercase tracking-[0.4em] rounded-2xl hover:bg-yellow-400 transition-colors">Book Session</Link>
              </div>
           </motion.div>
        )}

        {/* ── TRUST FOOTER ── */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-6">
            <span className="w-16 h-px bg-white/5" />
            Custom Plans Available on Request
            <span className="w-16 h-px bg-white/5" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

