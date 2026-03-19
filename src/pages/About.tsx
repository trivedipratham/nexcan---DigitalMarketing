import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import {
  Zap,
  Target,
  TrendingUp,
  Users,
  Globe,
  Award,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Database,
  Network,
  BarChart3,
  Globe2,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import CtaSection from "@/components/CtaSection";
import about from "../../public/about us.jpg";
import mission from "../../public/mission.jpg";
const ButterCounter = ({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useSpring(0, {
    damping: 30,
    stiffness: 60,
    restDelta: 0.001,
  });

  const displayValue = useTransform(motionValue, (latest) => {
    return latest.toFixed(decimals) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const stats = [
  {
    label: "Website Traffic",
    val: 300,
    suffix: "%",
    decimals: 0,
    icon: TrendingUp,
    color: "from-white/80 to-white/40",
    sub: "Growth Rates",
  },
  {
    label: "New Leads",
    val: 5,
    suffix: "X",
    decimals: 0,
    icon: Target,
    color: "from-yellow-400 to-yellow-600",
    sub: "Conversion Rates",
  },
  {
    label: "Campaigns Managed",
    val: 120,
    suffix: "+",
    decimals: 0,
    icon: Award,
    color: "from-white/80 to-white/40",
    sub: "Our Stats",
  },
  {
    label: "Clients",
    val: 50,
    suffix: "+",
    decimals: 0,
    icon: Users,
    color: "from-yellow-400 to-yellow-600",
    sub: "Trusted Brands",
  },
];

const values = [
  {
    title: "Strategy Based on Facts",
    description:
      "We use real data and market research to build plans that get the results you expect.",
    icon: Database,
    delay: 0.1,
  },
  {
    title: "New Creative Ideas",
    description:
      "We use the latest tech and creative ideas to tell stories that get noticed.",
    icon: Sparkles,
    delay: 0.3,
  },
  {
    title: "Clear and Honest",
    description:
      "We provide live reports and talk clearly, so you always know what's happening.",
    icon: BarChart3,
    delay: 0.2,
  },
  {
    title: "Always Improving",
    description:
      "The digital world changes fast. We keep improving our work to help you succeed in the long run.",
    icon: RefreshCw,
    delay: 0.4,
  },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const flowHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotateS = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div
      ref={containerRef}
      className="bg-[#04060b] text-white overflow-hidden relative selection:bg-yellow-400 selection:text-black font-body"
    >
      {/* ── BACKGROUND LAYER (STABILIZED Z-INDEX) ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* 1. Glowing Grid Base */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* 2. Massive Kinetic Watermark */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full h-auto opacity-[0.015] select-none text-center">
          <motion.div
            style={{ x: textX }}
            className="text-[30vw] font-black font-display tracking-tighter uppercase whitespace-nowrap leading-none"
          >
            OUR STORY • OUR MISSION • OUR PEOPLE • OUR STORY
          </motion.div>
        </div>

        {/* 3. Floating Nodes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 6 + i, repeat: Infinity, delay: i * 2 }}
              className="absolute"
              style={{
                left: `${(i * 20) % 100}%`,
                top: `${(i * 15) % 100}%`,
              }}
            >
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full blur-[2px]" />
            </motion.div>
          ))}
        </div>

        {/* 4. Drifting Liquid Orbs */}
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-400/[0.02] blur-[180px] rounded-full"
        />
      </div>

      {/* ── CONTENT WRAPPER ── */}
      <div className="relative z-10 pt-10">
        {/* ── SECTION 1: HERO (REFINED CINEMATIC) ── */}
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-12 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
          {/* ── ARCHITECTURAL BACKGROUND ELEMENTS ── */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            {/* Subtle Kinetic Watermark */}
            <motion.div
              style={{ y: useTransform(scrollY, [0, 1000], [0, 150]) }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-white/[0.015] tracking-tight leading-none"
            >
              NEXCAN
            </motion.div>

            {/* Prism Flare Background */}
            <div className="absolute top-1/4 -right-1/4 w-[60%] h-[60%] bg-yellow-400/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />
            <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Digital Dust Particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.sin(i) * 50, 0],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}

            {/* Structural Grid Pips */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[size:40px_40px]" />
          </div>

          <div className="max-w-[1450px] w-full mx-auto relative z-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
            {/* ── LEFT: THE NARRATIVE ARC ── */}
            <div className="lg:w-[55%] space-y-8 md:space-y-12">
              <ScrollReveal delay={0.2}>
                <div className="relative">
                  <h1 className="text-[12vw] sm:text-[9vw] lg:text-[90px] font-display font-black tracking-tighter leading-[0.9] uppercase pr-2 sm:pr-10">
                    <span className="text-white block mb-2 underline underline-offset-[8px] sm:underline-offset-[12px] decoration-yellow-400/20">
                      THE NEXCAN
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-white/40 block">
                      STORY.
                    </span>
                  </h1>

                  {/* Subtle Blueprint Label */}
                  <div className="mt-4 sm:mt-8 flex items-center gap-4 opacity-50">
                    <span className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest leading-none border border-zinc-800 px-3 py-1 rounded">
                      Modern Standard
                    </span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="space-y-6 sm:space-y-10">
                  <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-body font-light max-w-lg leading-relaxed pr-2 sm:pr-8 border-l-2 border-yellow-400/30 pl-4 sm:pl-8">
                    We are a results-focused digital marketing agency
                    dedicated to helping businesses grow online.
                    Our team combines{" "}
                    <span className="text-white font-medium">
                      creativity, technology, and marketing expertise
                    </span>{" "}
                    to develop strategies that drive traffic and increase sales.
                  </p>

                  <div className="flex items-center gap-4 sm:gap-8 pt-4">
                    <div className="flex -space-x-3 sm:-space-x-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.15, zIndex: 10, y: -4 }}
                          className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-[#04060b] overflow-hidden bg-zinc-900 shadow-xl transition-all duration-300 relative group"
                        >
                          <img
                            src={`https://i.pravatar.cc/150?u=soul_${i}`}
                            alt="Specialist"
                            className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-700"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="space-y-1 border-l border-white/5 pl-4 sm:pl-8">
                      <p className="text-white font-display text-sm sm:text-lg font-black uppercase tracking-tighter leading-none">
                        10+ Dedicated Experts
                      </p>
                      <p className="text-zinc-400 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">
                        Working Globally
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ── RIGHT: THE VISION CORE (POLISHED) ── */}
            <div className="lg:w-[45%] flex justify-center items-center">
              <ScrollReveal delay={0.6}>
                <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] aspect-square group mx-auto">
                  {/* Simplified Holographic Atmosphere */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 50,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[-10%] border border-white/[0.03] rounded-full hidden sm:block"
                  />

                  {/* The Visual Engine */}
                  <div className="bg-[#0d121f]/40 backdrop-blur-3xl border border-white/10 rounded-2xl sm:rounded-[3rem] md:rounded-[3.5rem] relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.5)] z-20 transition-all duration-700 hover:border-yellow-400/20">
                    <img
                      src={about}
                      className="w-full aspect-square object-cover brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-[1500ms]"
                      alt="Holographic Vision"
                    />

                    {/* Scanner Line */}
                    <motion.div
                      animate={{ y: ["-100%", "200%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent z-30 pointer-events-none"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-[#04060b]/80 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Integrated Metric Badges */}
                  <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 p-3 sm:p-6 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl z-30 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400" />
                       <span className="text-[8px] sm:text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-widest">
                         Our Vision
                       </span>
                    </div>
                    <div className="text-white font-display text-lg sm:text-2xl font-black tracking-tighter uppercase whitespace-nowrap">
                      ONLINE
                    </div>
                  </div>

                  <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 p-3 sm:p-6 bg-[#04060b]/90 backdrop-blur-xl border border-white/5 rounded-2xl sm:rounded-3xl z-30 shadow-2xl flex items-center gap-3 sm:gap-4 group-hover:translate-y-2 transition-transform duration-500">
                    <span className="text-white font-display text-base sm:text-xl font-black">
                      EST. 2026
                    </span>
                    <div className="w-px h-6 sm:h-8 bg-white/5" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: THE VISION ── */}
        <section className="py-20 sm:py-32 md:py-48 px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-32 items-center">
            <div className="relative group z-20">
              <ScrollReveal>
                <div className="relative aspect-[4/5] rounded-2xl sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
                  <img
                    src={mission}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                    alt="Team meeting"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-transparent to-transparent opacity-60" />
                </div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative sm:absolute -bottom-0 sm:-bottom-10 -left-0 sm:-left-10 bg-yellow-400 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[3rem] md:rounded-[3.5rem] shadow-2xl max-w-full sm:max-w-[340px] z-30 mt-4 sm:mt-0"
                >
                  <h3 className="text-black font-display font-black text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">
                    Our Mission
                  </h3>
                  <p className="text-black font-body text-sm sm:text-base leading-relaxed font-bold">
                    To help brands connect with people through great design and smart ideas.
                  </p>
                </motion.div>
              </ScrollReveal>
            </div>

            <div className="space-y-8 sm:space-y-12 z-20 relative">
              <ScrollReveal>
                <div className="space-y-6 sm:space-y-8">
                  <div className="inline-flex items-center gap-3 sm:gap-4 text-yellow-400 font-serif text-lg sm:text-2xl tracking-wide">
                    <div className="w-10 sm:w-16 h-px bg-yellow-400" />
                    <span>Who We Are</span>
                  </div>
                  <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-display font-black text-white tracking-tighter uppercase leading-[0.85] pr-2 sm:pr-10">
                    Creative <br />
                    In <span className="text-zinc-800">Spirit.</span>
                  </h2>
                  <div className="space-y-4 sm:space-y-6 text-zinc-300 font-body text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
                    <p>
                      Nexcan started as a response to the robotic nature of
                      digital marketing. We saw agencies treating people as
                      leads and brands as numbers. We decided to be different.
                    </p>
                    <p>
                      We are a team of poets, painters, coders, and dreamers who
                      believe that the best work comes from genuine curiosity
                      and a passion for craftsmanship.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: WHAT WE BELIEVE (COLLECTIVE ARCHITECTURE) ── */}
        <section className="py-20 sm:py-32 md:py-48 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
          {/* Background Atmospheric Layer */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-yellow-400/5 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-white/[0.02] blur-[200px] rounded-full" />
          </div>

          <div className="max-w-[1500px] w-full mx-auto relative z-20">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-12 sm:mb-16 md:mb-24 gap-8 sm:gap-12">
              <ScrollReveal>
                <div className="relative">
                  <p className="text-yellow-400 font-mono text-[10px] sm:text-xs uppercase tracking-[0.5em] sm:tracking-[1em] font-black mb-4 sm:mb-6">
                    Our Core Values
                  </p>
                  <h2 className="text-[12vw] sm:text-[10vw] lg:text-[110px] font-display font-black text-white tracking-tighter leading-[0.85] uppercase pr-2 sm:pr-10">
                    WHAT WE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white/20">
                      BELIEVE.
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="max-w-xs text-right hidden lg:block border-r-2 border-yellow-400/20 pr-10 mb-2">
                  <p className="text-zinc-400 font-mono text-[11px] leading-relaxed uppercase tracking-widest font-black">
                    where creativity meets results.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
              {values.map((val, i) => (
                <ScrollReveal
                  key={i}
                  delay={val.delay}
                  className={`md:col-span-6 lg:col-span-${i === 0 || i === 3 ? "7" : "5"} ${i % 2 === 0 ? "" : "md:mt-20"}`}
                >
                  <div className="relative group perspective-1000">
                    <div className="absolute -top-6 left-10 flex items-center gap-3 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                      <div className="h-px w-6 bg-zinc-500" />
                      <span className="text-[10px] font-mono text-zinc-400">
                        VAL_ID_0{i + 1}
                      </span>
                    </div>

                    <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3.5rem] bg-white/[0.01] backdrop-blur-3xl border border-white/5 overflow-hidden transition-all duration-1000 group-hover:bg-white/[0.03] group-hover:border-white/10 group-hover:translate-y-[-8px] shadow-2xl">
                      <div className="absolute -inset-24 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                      <div className="relative z-10 space-y-6 sm:space-y-10">
                        <div className="flex justify-between items-start">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl md:rounded-[2rem] bg-[#0d121f] border border-white/5 flex items-center justify-center text-yellow-400 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-700 shadow-xl">
                            <val.icon size={22} className="sm:w-7 sm:h-7" />
                          </div>
                          <span className="text-8xl font-display font-black text-white/[0.02] absolute -top-6 -right-2 pointer-events-none select-none group-hover:text-yellow-400/[0.03] transition-colors duration-1000">
                            0{i + 1}
                          </span>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-black text-white tracking-tighter uppercase group-hover:text-yellow-400 transition-colors duration-500">
                            {val.title}
                          </h3>
                          <p className="text-zinc-300 font-body text-sm sm:text-base leading-relaxed font-light max-w-sm group-hover:text-zinc-200 transition-colors duration-500">
                            {val.description}
                          </p>
                        </div>

                        <div className="pt-4 sm:pt-8">
                          <div className="relative h-[1px] w-full bg-white/[0.03] overflow-hidden rounded-full">
                            <motion.div
                              className="absolute inset-0 bg-yellow-400"
                              initial={{ x: "-100%" }}
                              whileInView={{ x: "0%" }}
                              transition={{
                                duration: 2,
                                delay: 0.5 + i * 0.2,
                                ease: "circOut",
                              }}
                            />
                          </div>
                          <div className="flex justify-between mt-3">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                              Verified
                            </span>
                            <span className="text-[10px] font-mono text-yellow-400/70 uppercase tracking-widest font-black">
                              100% Commitment
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: MILESTONES ── */}
        <section className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#04060b] relative overflow-hidden border-y border-white/5">
          {/* Section Background Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/[0.03] blur-[120px] rounded-full" />
          </div>

          <div className="max-w-[1450px] w-full mx-auto relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-24 items-center">
              <div className="lg:col-span-4 space-y-8 sm:space-y-12">
                <ScrollReveal>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[1px] bg-yellow-400" />
                      <p className="text-yellow-400 font-mono text-[10px] uppercase tracking-[0.4em] font-black">
                        Our Performance
                      </p>
                    </div>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-black text-white tracking-tighter leading-[0.85] uppercase pr-2 sm:pr-10">
                      THE <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-white/40">
                        RECORD.
                      </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-body font-light leading-relaxed border-l-2 border-yellow-400/20 pl-4 sm:pl-8">
                       Our path is defined by hard work and the{" "}
                      <span className="text-white">fast growth</span> of
                      our global clients.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-xl">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center text-black">
                      <Sparkles size={20} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-white font-display text-lg font-black uppercase leading-none">
                        Peak Results
                      </p>
                      <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                        Verified Data
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {stats.map((stat, i) => (
                    <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                      <div className="group relative">
                        {/* Ambient Card Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[4rem]" />

                        <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[3rem] md:rounded-[4rem] bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-700 group-hover:bg-white/[0.04] group-hover:border-yellow-400/20 group-hover:-translate-y-2">
                          {/* Internal Grid Texture */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.01)_1px,transparent_0)] bg-[size:30px_30px]" />

                           <div className="relative z-10 space-y-6 sm:space-y-10">
                            <div className="flex justify-between items-start">
                              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500 shadow-xl">
                                <stat.icon size={20} className="sm:w-6 sm:h-6" />
                              </div>
                              <div className="text-right">
                                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest font-black">
                                  {stat.sub}
                                </p>
                                <p className="text-[11px] font-mono text-yellow-400/50 uppercase tracking-widest font-black mt-1">
                                  Stat 0{i + 1}
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-xs font-mono text-zinc-300 uppercase tracking-[0.4em] font-black group-hover:text-yellow-400 transition-colors">
                                {stat.label}
                              </h3>
                              <p
                                className={`text-5xl sm:text-6xl md:text-8xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${stat.color} leading-none`}
                              >
                                <ButterCounter
                                  value={stat.val}
                                  suffix={stat.suffix}
                                  decimals={stat.decimals}
                                />
                              </p>
                            </div>

                            <div className="pt-8 border-t border-white/5 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                              <div className="flex gap-1">
                                {[...Array(4)].map((_, j) => (
                                  <div
                                    key={j}
                                    className="w-1 h-3 bg-white/10 rounded-full overflow-hidden"
                                  >
                                    <motion.div
                                      animate={{
                                        height: ["20%", "100%", "20%"],
                                      }}
                                      transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: j * 0.2,
                                      }}
                                      className="w-full bg-yellow-400"
                                    />
                                  </div>
                                ))}
                              </div>
                              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                                Verified Data
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </div>
    </div>
  );
};

export default About;
