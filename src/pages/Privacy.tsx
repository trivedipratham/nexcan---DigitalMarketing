import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import CtaSection from "@/components/CtaSection";

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Data Collection",
      content: "We collect information you provide directly to us when you request a quote, subscribe to our newsletter, or contact us. This may include your name, email address, company name, and project details. We also automatically collect technical data like IP addresses and browser types."
    },
    {
      icon: Lock,
      title: "How We Use Data",
      content: "Your data is used to provide and maintain our services, notify you about changes, provide customer support, and gather analysis or valuable information so that we can improve our services. We do not sell your personal data to third parties."
    },
    {
      icon: Shield,
      title: "Information Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems."
    },
    {
      icon: FileText,
      title: "Cookies Policy",
      content: "Nexcan uses cookies to improve your experience on our site. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser that enables the site's or service provider's systems to recognize your browser and capture and remember certain information."
    }
  ];

  return (
    <div className="min-h-screen bg-[#04060b] text-white selection:bg-yellow-400 selection:text-black font-body overflow-x-hidden">
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#04060b]" />
        
        {/* Kinetic Grid Layer */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
               backgroundSize: '100px 100px'
             }} />
        
        {/* Sophisticated Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-yellow-400/[0.02] blur-[200px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-white/[0.015] blur-[180px] rounded-full" />
      </div>

      {/* ── HERO ARCHITECTURE ── */}
      <section className="relative z-10 pt-40 pb-20">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-8">
                <Shield size={14} className="text-yellow-400" />
                <span className="text-yellow-400 text-[10px] font-mono uppercase tracking-[0.4em] font-black">Legal Protocol</span>
             </div>
             <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-12">
               Privacy <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-200 to-zinc-800">Policy.</span>
             </h1>
             <div className="max-w-2xl mx-auto space-y-6">
                <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
                  Transparency is the cornerstone of our trust. Learn how Nexcan protects and handles your digital identity.
                </p>
                <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest font-black">Effective Date: March 17, 2026</p>
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CORE POLICY INTERFACE ── */}
      <section className="relative z-10 py-20 pb-40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-32">
            {sections.map((section, idx) => (
              <ScrollReveal key={idx} delay={0.2 + idx * 0.1}>
                <div className="space-y-10 group">
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500">
                        <section.icon size={24} />
                      </div>
                      <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter text-white">
                        {section.title}
                      </h2>
                    </div>
                    <div className="h-px w-20 bg-yellow-400/20 group-hover:w-full transition-all duration-1000" />
                  </div>
                  
                  <p className="text-zinc-400 text-lg md:text-xl leading-[1.8] font-light font-body">
                    {section.content}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            {/* Legal Clause */}
            <ScrollReveal delay={0.5}>
              <div className="relative p-12 md:p-20 rounded-[4rem] bg-white/[0.02] border border-white/5 overflow-hidden group">
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 blur-3xl group-hover:bg-yellow-400/10 transition-colors" />
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <h4 className="text-xl font-display font-black uppercase tracking-widest text-white">Legal Protocol Consent</h4>
                  </div>
                  <p className="text-zinc-500 text-lg leading-relaxed font-light">
                    By accessing Nexcan Digital Marketing's systems and interfaces, you signify your full consent to our privacy architecture. We reserve the absolute right to modify these operational parameters at any time. Significant updates will be transmitted through our primary digital channels.
                  </p>
                  <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest font-black">Ref: PROTOCOL_PX_2026</p>
                    <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">© 2026 Nexcan. All Digital Assets Protected.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── RETURN NAVIGATION ── */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 text-center">
           <ScrollReveal>
              <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.5em] font-black mb-6">Need Further Clarification?</h3>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-6 bg-white text-black px-12 py-6 rounded-2xl font-display font-black text-sm uppercase tracking-[0.4em] overflow-hidden transition-all shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Legal Inquiry</span>
                <ChevronRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
           </ScrollReveal>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default Privacy;
