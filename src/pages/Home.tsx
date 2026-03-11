import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, BarChart3, Users, PenTool, TrendingUp, Zap, Target, MessageSquare, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import DashboardMockup from "@/components/DashboardMockup";

/* ── Rotating hero phrases ── */
const phrases = [
  "boost your revenue.",
  "dominate search rankings.",
  "amplify your brand.",
  "drive real results.",
];

const RotatingText = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % phrases.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom min-w-[200px] md:min-w-[340px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-emphasis absolute left-0 whitespace-nowrap"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

/* ── Scroll badge ── */
const ScrollBadge = () => (
  <div className="absolute bottom-8 left-8 w-20 h-20 md:w-24 md:h-24 animate-spin-slow hidden md:block">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
      </defs>
      <text className="fill-muted-foreground text-[11px] font-body uppercase tracking-[0.3em]">
        <textPath href="#circlePath">SCROLL FOR MORE · SCROLL FOR MORE · </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <ChevronDown className="text-muted-foreground" size={20} />
    </div>
  </div>
);

/* ── Wave divider ── */
const WaveDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
      <path
        d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,30 1440,40 L1440,100 L0,100 Z"
        className="fill-secondary"
      />
    </svg>
  </div>
);

/* ── Services data ── */
const services = [
  { icon: Search, title: "Search Engine Optimization", desc: "Dominate organic search results and drive qualified traffic that converts into customers.", tag: "SEO" },
  { icon: Target, title: "Pay-Per-Click Advertising", desc: "Precision-targeted ad campaigns on Google & Meta with transparent ROI tracking.", tag: "PPC" },
  { icon: Users, title: "Social Media Management", desc: "Build engaged communities across platforms that turn followers into loyal customers.", tag: "Social" },
  { icon: PenTool, title: "Content Strategy", desc: "Compelling content systems—blogs, video, email—engineered for engagement and conversions.", tag: "Content" },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Real-time dashboards and monthly reports so you always know what's working.", tag: "Analytics" },
  { icon: Zap, title: "Conversion Optimization", desc: "A/B testing, landing page design, and UX improvements that lift your bottom line.", tag: "CRO" },
];

/* ── Why choose us ── */
const reasons = [
  {
    title: "We're Results-Obsessed.",
    desc: "Every campaign we run is tied to measurable outcomes. No vanity metrics, no fluff—just data-driven strategies that move the needle for your business.",
  },
  {
    title: "We're Transparent.",
    desc: "You'll always know where your budget goes and what it's producing. Real-time dashboards, honest reporting, and zero hidden fees.",
  },
  {
    title: "We're Your Growth Partners.",
    desc: "We don't just execute—we strategize alongside you. Think of us as your in-house marketing team, without the overhead.",
  },
];

/* ── Testimonials ── */
const testimonials = [
  {
    quote: "Karmadude doubled our organic traffic in 6 months. Their SEO strategy was methodical and the results speak for themselves.",
    name: "Sarah Chen",
    role: "CEO, TechFlow",
  },
  {
    quote: "The PPC campaigns they built reduced our cost-per-lead by 40%. Their team is responsive, data-driven, and genuinely cares about our growth.",
    name: "Marcus Rivera",
    role: "Marketing Director, Elevate Health",
  },
  {
    quote: "Our social media went from crickets to a thriving community of 50K+ followers. The content strategy they developed is a game-changer.",
    name: "Priya Patel",
    role: "Founder, GreenLeaf Co.",
  },
];

/* ── Process steps ── */
const processSteps = [
  { num: "01", title: "Consult", desc: "Schedule a free strategy call. We listen, analyze, and identify your biggest growth opportunities." },
  { num: "02", title: "Strategize", desc: "We build a custom roadmap tailored to your goals, audience, and competitive landscape." },
  { num: "03", title: "Execute", desc: "Our team deploys campaigns across channels—SEO, PPC, social, content—with surgical precision." },
  { num: "04", title: "Grow", desc: "Watch your metrics climb. We optimize continuously so your growth never plateaus." },
];

/* ── Stats ── */
const stats = [
  { value: "200+", label: "Campaigns Launched" },
  { value: "3.2x", label: "Average ROI" },
  { value: "98%", label: "Client Retention" },
  { value: "$12M+", label: "Revenue Generated" },
];

/* ══════════════ HOME PAGE ══════════════ */
const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground leading-[1.1] mb-6">
              We Make Digital Growth{" "}
              <span className="text-emphasis relative inline-block">
                Happen Here
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C30 3 70 2 100 5C130 8 170 4 198 7" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4 font-body leading-relaxed">
              Digital marketing solutions that <RotatingText />
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm hover:brightness-110 transition-all duration-200"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-full font-body font-medium text-sm hover:border-primary hover:text-primary transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <DashboardMockup />
          </ScrollReveal>
        </div>
        <ScrollBadge />
      </section>

      {/* ── STATS BAR ── */}
      <WaveDivider />
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <p className="font-heading text-3xl md:text-4xl text-primary">{s.value}</p>
                <p className="text-muted-foreground text-xs md:text-sm font-body mt-2 uppercase tracking-wider">{s.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider flip />

      {/* ── CREW INTRO ── */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-heading text-foreground leading-snug max-w-3xl mx-auto">
              We're a crew of strategists, creatives, and data nerds who{" "}
              <span className="text-emphasis">plan, create, and optimize</span> so you can focus on running your business.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="section-spacing pt-0">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">What We Do</p>
                <h2 className="text-3xl md:text-5xl font-heading text-foreground">
                  Our <span className="text-emphasis">Services</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm font-body mt-4 md:mt-0 max-w-sm font-emphasis italic">
                Go enjoy your coffee break. We got this. ☕
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.tag} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: "hsl(var(--primary))" }}
                  transition={{ duration: 0.2 }}
                  className="border border-border rounded-2xl p-8 h-full flex flex-col bg-card hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.2)] transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <span className="text-[10px] text-primary font-body font-semibold uppercase tracking-[0.15em] mb-2">{s.tag}</span>
                  <h3 className="font-heading text-lg text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body flex-1">{s.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all duration-200"
              >
                Explore all services <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <WaveDivider />
      <section className="bg-secondary py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">Why Karmadude</p>
            <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-16">
              When we get to work,{" "}
              <span className="text-emphasis">the results have you wishing you'd found us sooner.</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.1}>
                <WhyCard {...r} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider flip />

      {/* ── TESTIMONIALS ── */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body text-center">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground text-center mb-16">
              Hear what our <span className="text-emphasis">clients say.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <blockquote className="text-foreground text-lg md:text-2xl font-body leading-relaxed max-w-2xl mx-auto mb-8">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  <p className="font-heading text-sm text-primary">{testimonials[activeTestimonial].name}</p>
                  <p className="text-muted-foreground text-xs font-body mt-1">{testimonials[activeTestimonial].role}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeTestimonial ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <WaveDivider />
      <section className="bg-secondary py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">How It Works</p>
              <h2 className="text-3xl md:text-5xl font-heading text-foreground max-w-2xl mx-auto">
                The process is simple.{" "}
                <span className="text-emphasis">The results are transformative.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div className="text-center md:text-left">
                  <span className="font-heading text-5xl text-primary/20">{step.num}</span>
                  <h3 className="font-heading text-xl text-foreground mt-2 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider flip />

      {/* ── FINAL CTA ── */}
      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <MessageSquare size={40} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-6">
              Ready to grow?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto font-body leading-relaxed">
              Every great result starts with a conversation. Let's talk about what digital growth looks like for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-body font-semibold text-sm hover:brightness-110 transition-all duration-200"
            >
              Let's Start Your Process Today <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

/* ── Why Choose Us Card (expandable) ── */
const WhyCard = ({ title, desc }: { title: string; desc: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      onClick={() => setOpen(!open)}
      className="border border-border rounded-xl p-6 md:p-8 cursor-pointer hover:border-primary/50 transition-colors duration-300 bg-background"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg md:text-xl text-foreground">{title}</h3>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-sm font-body leading-relaxed mt-4 pr-8">{desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
