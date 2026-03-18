import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

import HeroSection from "@/components/HeroSection";
// import StatisticsSection from "@/components/StatisticsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ClientsSection from "@/components/ClientsSection";
import CtaSection from "@/components/CtaSection";

const Home = () => {
  return (
    <div className="bg-[#0B0F19] text-foreground overflow-hidden">
      <HeroSection />
      {/* <StatisticsSection /> */}

      {/* ── BALANCED AESTHETIC CREW INTRO ── */}
      <section className="relative py-32 w-full overflow-hidden flex flex-col items-center justify-center bg-[#0B0F19]">
        {/* Aesthetic Fixed Background Image - Optimized Parallax Effect */}
        <div 
          className="absolute inset-0 z-0 bg-[#0B0F19]"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=60&w=1400")',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 0.15,
            filter: 'brightness(0.6)'
          }}
        >
          {/* Gradients to blend it into the dark theme perfectly - Optimized */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-transparent to-[#0B0F19]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(109,40,217,0.08)_0%,_transparent_60%)]" />
        </div>

        <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10">
          
          {/* Top Row: Typography & Overlapping Images */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 mb-20">
            
            {/* Left Col: Bold Typography */}
            <div className="w-full lg:w-[50%] relative">
              <ScrollReveal>
                <div className="inline-flex items-center gap-4 mb-8 relative z-10">
                  <span className="w-12 h-[2px] bg-yellow-400" />
                  <span className="text-yellow-400 font-serif text-xl tracking-wide">The Team</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-[72px] font-display font-bold text-white leading-[1.15] tracking-tight relative z-10 mb-8">
                  Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500">data.</span><br/>
                  Shaped by <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#2563EB]">creativity.</span>
                </h2>

                <p className="text-lg md:text-xl text-zinc-300 font-body leading-relaxed max-w-[480px] font-light">
                  We are a small, expert team of planners and creators. No complicated talk, just real growth for growing brands.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Col: Overlapping Aesthetic Images */}
            <div className="w-full lg:w-[50%] relative h-[450px] md:h-[500px] flex items-center justify-center">
              <ScrollReveal delay={0.2}>
                {/* Main Large Image */}
                <div className="absolute top-0 right-0 md:right-[10%] w-[75%] md:w-[65%] h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl group border border-white/5 z-10 bg-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent z-10" />
                  <img src="/Creative work.jpg" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" alt="Creative work" />
                </div>
                
                {/* Secondary Image Overlapping */}
                <div className="absolute bottom-[-10%] md:bottom-[0%] left-0 w-[55%] md:w-[50%] h-[250px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-[2px] border-[#0B0F19] z-20 group bg-zinc-900">
                  <div className="absolute inset-0 bg-[#6D28D9]/10 z-10 group-hover:bg-[#6D28D9]/0 transition-all duration-700" />
                  <img src="/social1.png" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" alt="Team strategy" />
                </div>

                {/* Floating Experience Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-[20%] right-[-5%] md:right-[-2%] z-30 bg-background/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center text-yellow-400">
                    <span className="font-display font-bold text-sm">NEW</span>
                  </div>
                  <div>
                    <h4 className="text-white font-display font-medium text-sm">Design</h4>
                    <p className="text-zinc-400 text-xs uppercase tracking-widest font-body">Perspective</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>

          {/* Bottom Row: 3-Column Minimal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/5 relative z-10">
            <ScrollReveal delay={0.3}>
              <div className="group">
                <span className="text-yellow-400 font-display font-bold text-xl mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">01</span>
                <h3 className="text-2xl text-white font-display font-medium mb-3">Smart Planning</h3>
                <p className="text-zinc-400 font-body font-light leading-relaxed">
                  We don't guess. We map the fastest, most effective path directly to your business goals.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="group">
                <span className="text-[#6D28D9] font-display font-bold text-xl mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">02</span>
                <h3 className="text-2xl text-white font-display font-medium mb-3">High-Quality Design</h3>
                <p className="text-zinc-400 font-body font-light leading-relaxed">
                  Creating great-looking designs that immediately catch the eye.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="group">
                <span className="text-[#2563EB] font-display font-bold text-xl mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">03</span>
                <h3 className="text-2xl text-white font-display font-medium mb-3">Smart Results</h3>
                <p className="text-zinc-400 font-body font-light leading-relaxed">
                  Turning complicated data into clear results that help your business grow.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      <CapabilitiesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ClientsSection />
      <PricingSection />
      <BlogPreviewSection />
      <CtaSection />
    </div>
  );
};

export default Home;
