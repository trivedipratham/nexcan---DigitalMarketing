import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
  ArrowUpRight,
  Plus,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ChevronDown,
  Clock,
  Sparkles,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

import axios from "axios";

const isLocal = typeof window !== 'undefined' && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || (isLocal ? "http://localhost/karmadude-api" : "https://api.karmadude.in");
const API_ENDPOINT = `${API_BASE_URL}/api/nexcan-contacts`;
const API_KEY = import.meta.env.VITE_API_KEY || "karmadude_api_key_secure_2025";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedPlan = params.get('plan');
    if (selectedPlan) {
      setForm(prev => ({
        ...prev,
        subject: `Inquiry: ${selectedPlan}`,
        message: `I'm interested in the ${selectedPlan} plan. Please provide more details.`
      }));
      // Remove query parameters from URL immediately
      // This ensures that refreshing the page clears the data
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(API_ENDPOINT, form, {
        headers: {
          "x-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: "Message sent successfully. Our team will respond within 24 hours."
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(response.data.message || "Failed to send message");
      }
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || error.message || "Failed to send message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "Average Response Time?",
      a: "Our team typically responds within 3-6 business hours for high-priority requests.",
    },
    {
      q: "Global Operations?",
      a: "Yes, we operate across all time zones with a global team of experts.",
    },
    {
      q: "Custom Project Scopes?",
      a: "Every project is custom-tailored to your specific needs and growth goals.",
    },
  ];

  const offices = [
    {
      country: "India",
      city: "Ahmedabad",
      address: "519, Hilltown Landmark, Nikol, Ahmedabad, Gujarat 380049",
      phone: "+91 9601879846"
    },
    {
      country: "USA",
      city: "Milpitas",
      address: "142 Marylinn Dr, Milpitas CA 95035, California",
      phone: ""
    },
    {
      country: "Canada",
      city: "Kitchener",
      address: "27 Cotton Grass St, Kitchener N2E3T7, Canada",
      phone: "+1 289 888 3877"
    },
    {
      country: "United Kingdom",
      city: "London",
      address: "62, KAP HOUSE, 31 ELMGROVE ROAD, HA1 2AR, UK",
      phone: "+44 077 7004 2843"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#04060b] text-white selection:bg-yellow-400 selection:text-black font-body overflow-x-hidden"
    >
      {/* ── HIGH-END BACKGROUND LAYERING ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#04060b]" />

        {/* Architectural Mesh */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Sophisticated Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-yellow-400/[0.02] blur-[200px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-white/[0.015] blur-[180px] rounded-full" />
      </div>

      {/* ── HERO ARCHITECTURE: THE UPLINK TERMINAL ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Architectural Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          {/* Kinetic Watermark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.02, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
          >
            <h2 className="text-[35vw] sm:text-[25vw] font-display font-black tracking-tighter uppercase leading-none">
              CONTACT
            </h2>
          </motion.div>

          {/* Grid Intersections */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:60px_60px]" />

          {/* Vertical Laser lines */}
          <div className="absolute inset-0 flex justify-around opacity-[0.05]">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"
              />
            ))}
          </div>
        </div>

        <div className="max-w-[1450px] w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Left: The Typography Core */}
          <div className="lg:w-[55%] space-y-12">
            <ScrollReveal>
              <div className="flex flex-col space-y-8">
                <div className="inline-flex items-center gap-4 bg-white/[0.03] border border-white/5 py-2 px-5 rounded-full backdrop-blur-md w-fit">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  <span className="text-yellow-400 font-mono text-[11px] uppercase tracking-[0.5em] font-black">
                    Status: Always Online
                  </span>
                </div>

                <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[130px] font-display font-black tracking-tighter leading-[0.85] uppercase select-none">
                  <span className="block text-white/30">LET'S</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                    BRIDGE.
                  </span>
                </h1>
              </div>

              <div className="relative pl-6 sm:pl-10 border-l border-white/10 mt-8 sm:mt-12 max-w-xl">
                <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed">
                  Got questions, ideas, or need support?{" "}
                  <span className="text-white font-medium">
                    Let's start a conversation
                  </span>
                  . We're here to help and answer any question you might have.
                </p>
                <div className="absolute top-0 left-[-2px] w-1 h-12 bg-yellow-400" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: The Visual Core (The 3D Uplink) */}
          <div className="lg:w-[40%] relative">
            <ScrollReveal delay={0.3}>
              <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                {/* Orbital Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{
                      duration: 15 + i * 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border border-white/[0.05] rounded-full"
                    style={{
                      margin: `${i * 10}%`,
                      borderStyle: i === 1 ? "dashed" : "solid",
                    }}
                  />
                ))}

                {/* The Core Visual */}
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full bg-[#0d121f]/40 backdrop-blur-3xl border border-white/10 rounded-3xl sm:rounded-[3rem] p-3 sm:p-4 relative overflow-hidden group shadow-3xl"
                  >
                    <img
                      src="/modern_office_tech_hq.png"
                      className="w-full h-full object-cover rounded-[2.5rem] brightness-[0.4] group-hover:brightness-75 transition-all duration-1000 scale-125 group-hover:scale-110"
                      alt="Technical Core"
                    />

                    {/* HUD Elements */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 z-20">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <p className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest font-black">
                            Link_Status
                          </p>
                          <p className="text-lg font-display font-black text-white">
                            OPERATIONAL
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                          <Sparkles size={14} />
                        </div>
                      </div>

                      <div className="flex flex-col items-end text-right gap-4">
                        <div className="flex gap-2">
                          {[...Array(5)].map((_, j) => (
                            <div
                              key={j}
                              className="h-6 w-1 bg-white/10 rounded-full overflow-hidden"
                            >
                              <motion.div
                                animate={{ height: ["10%", "100%", "10%"] }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: j * 0.1,
                                }}
                                className="w-full bg-yellow-400"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-[0.3em]">
                          Transmission_Rate: 1.25tb/s
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-tr from-[#04060b]/80 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </div>

                {/* Satellite Icons */}
                <div className="absolute inset-0 pointer-events-none">
                  {[Mail, Phone, Globe].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={false}
                      animate={{
                        x: typeof window !== 'undefined' && window.innerWidth < 1024 
                          ? Math.cos((i * 120 + 45) * (Math.PI / 180)) * 140 
                          : Math.cos((i * 120 + 45) * (Math.PI / 180)) * 240,
                        y: typeof window !== 'undefined' && window.innerWidth < 1024 
                          ? Math.sin((i * 120 + 45) * (Math.PI / 180)) * 140 
                          : Math.sin((i * 120 + 45) * (Math.PI / 180)) * 240,
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/80 border border-white/10 flex items-center justify-center text-yellow-400 backdrop-blur-xl shadow-2xl z-30"
                    >
                      <Icon size={18} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CORE CONTACT INTERFACE ── */}
      <section className="relative z-10 pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* LEFT: THE PRECISION FORM */}
            <div className="lg:col-span-12 xl:col-span-7">
              <ScrollReveal delay={0.3} className="h-full">
                <div className="relative group h-full">
                  {/* Outer Glow */}
                  <div className="absolute -inset-1 bg-yellow-400/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[3rem]" />

                  <div className="relative h-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl sm:rounded-[3rem] p-6 sm:p-12 lg:p-14 shadow-2xl overflow-hidden flex flex-col justify-center">
                    {/* Internal Texture */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[size:40px_40px] pointer-events-none" />

                    <div className="relative z-10 space-y-12">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="flex items-center gap-4 sm:gap-5">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-yellow-400 flex items-center justify-center text-black shadow-[0_0_30px_rgba(250,204,21,0.2)] shrink-0">
                            <MessageSquare size={24} />
                          </div>
                          <div className="space-y-1">
                            <h2 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tighter text-white">
                              Get In Touch
                            </h2>
                            <div className="flex items-center gap-2">
                               <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                              <span className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest font-black">
                                Response Status: Active
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
                      >
                        {/* Name Field */}
                        <div className="md:col-span-1 space-y-3">
                          <label className="text-xs font-mono text-yellow-400 uppercase tracking-widest font-black flex items-center gap-2 px-2">
                            <div className="w-1 h-1 rounded-full bg-yellow-400" />
                            Full Name
                          </label>
                          <div className="relative group/input">
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                              }
                              placeholder="e.g. John Doe"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400/50 focus:bg-white/[0.05] transition-all duration-300 font-body"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-yellow-400/5 opacity-0 group-focus-within/input:opacity-100 pointer-events-none transition-all duration-500" />
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="md:col-span-1 space-y-3">
                          <label className="text-xs font-mono text-yellow-400 uppercase tracking-widest font-black flex items-center gap-2 px-2">
                            <div className="w-1 h-1 rounded-full bg-yellow-400" />
                            Email Address
                          </label>
                          <div className="relative group/input">
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                              }
                              placeholder="e.g. john@example.com"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400/50 focus:bg-white/[0.05] transition-all duration-300 font-body"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-yellow-400/5 opacity-0 group-focus-within/input:opacity-100 pointer-events-none transition-all duration-500" />
                          </div>
                        </div>

                        {/* Subject Field */}
                        <div className="md:col-span-2 space-y-3">
                          <label className="text-xs font-mono text-yellow-400 uppercase tracking-widest font-black flex items-center gap-2 px-2">
                            <div className="w-1 h-1 rounded-full bg-yellow-400" />
                            How can we help?
                          </label>
                          <div className="relative group/input">
                            <input
                              type="text"
                              required
                              value={form.subject}
                              onChange={(e) =>
                                setForm({ ...form, subject: e.target.value })
                              }
                              placeholder="Enter the reason for your connection..."
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400/50 focus:bg-white/[0.05] transition-all duration-300 font-body"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-yellow-400/5 opacity-0 group-focus-within/input:opacity-100 pointer-events-none transition-all duration-500" />
                          </div>
                        </div>

                        {/* Message Field */}
                        <div className="md:col-span-2 space-y-3">
                          <label className="text-xs font-mono text-yellow-400 uppercase tracking-widest font-black flex items-center gap-2 px-2">
                            <div className="w-1 h-1 rounded-full bg-yellow-400" />
                            Your Project Goals
                          </label>
                          <div className="relative group/input">
                            <textarea
                              required
                              value={form.message}
                              onChange={(e) =>
                                setForm({ ...form, message: e.target.value })
                              }
                              placeholder="Describe your project, goals, and any specific requirements..."
                              rows={4}
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-6 text-white placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400/50 focus:bg-white/[0.05] transition-all duration-300 font-body resize-none min-h-[120px]"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-yellow-400/5 opacity-0 group-focus-within/input:opacity-100 pointer-events-none transition-all duration-500" />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 pt-4">
                          {submitStatus && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`mb-6 p-4 rounded-xl text-center text-sm font-bold uppercase tracking-wider ${
                                submitStatus.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                              }`}
                            >
                              {submitStatus.message}
                            </motion.div>
                          )}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full flex items-center justify-center gap-6 bg-yellow-400 text-black px-10 py-6 rounded-2xl font-display font-black text-sm uppercase tracking-[0.4em] overflow-hidden transition-all hover:scale-[1.01] active:scale-95 shadow-[0_20px_40px_-10px_rgba(250,204,21,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(250,204,21,0.4)]"
                          >
                            <span className="relative z-10">
                              {isSubmitting
                                ? "Sending..."
                                : "Send Message"}
                            </span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                          </button>

                          <div className="mt-8 flex items-center justify-center gap-6">
                            <div className="flex items-center gap-2">
                               <ShieldCheck
                                size={14}
                                className="text-emerald-400"
                              />
                              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-black">
                                Encrypted
                              </span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-white/10" />
                             <div className="flex items-center gap-2">
                              <Clock size={14} className="text-zinc-500" />
                              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-black">
                                24h Response
                              </span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT: THE INFORMATION CORE */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-8">
              {/* Office Context Image Overlay */}
              <ScrollReveal delay={0.4}>
                <div className="relative h-56 sm:h-64 md:h-80 rounded-3xl sm:rounded-[3rem] overflow-hidden border border-white/5 group">
                  <img
                    src="/modern_office_tech_hq.png"
                    alt={`${offices[0].city} Global HQ`}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  {/* Bottom Vignette for Text Readability */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#04060b] to-transparent z-10" />
                  
                  <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex justify-between items-end gap-4 z-20">
                     <div className="space-y-1">
                      <p className="text-[10px] sm:text-[11px] font-mono text-yellow-400 uppercase tracking-[0.3em] font-black">
                        BASE_LOCATION
                      </p>
                      <h3 className="text-xl sm:text-3xl font-display font-black uppercase text-white leading-tight">
                        {offices[0].city}_HQ
                      </h3>
                      <p className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest font-black line-clamp-2 max-w-[250px]">
                        {offices[0].address}
                      </p>
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full backdrop-blur-3xl border border-white/10 flex items-center justify-center shrink-0 shadow-2xl">
                      <MapPin size={24} className="text-yellow-400" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Direct Channels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 sm:gap-6">
                {[
                  {
                    icon: Mail,
                    label: "Channel_Email",
                    val: "kanak@nexcan.co",
                    sub: "Standard_Outreach",
                  },
                  {
                    icon: Phone,
                    label: "Channel_Voice",
                    val: "+91 96018 79846",
                    sub: "Direct_Uplink",
                  },
                ].map((channel, i) => (
                  <ScrollReveal key={i} delay={0.5 + i * 0.1}>
                    <div className="group p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-white/[0.015] border border-white/5 hover:bg-white/[0.03] transition-all flex items-center gap-6 sm:gap-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all shrink-0">
                        <channel.icon size={20} />
                      </div>
                       <div className="space-y-1">
                        <p className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-black">
                          {channel.label}
                        </p>
                        <p className="text-lg sm:text-xl font-display font-black uppercase text-white hover:text-yellow-400 transition-colors pointer-events-auto cursor-pointer leading-tight">
                          {channel.val}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Senior Interaction: Quick Answers (FAQ) */}
              <ScrollReveal delay={0.7}>
                <div className="p-8 rounded-[3rem] bg-white/[0.01] border border-white/5 space-y-6">
                   <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono text-zinc-300 uppercase tracking-[0.4em] font-black">
                      QUICK_RESOLUTIONS
                    </h3>
                    <ChevronDown size={14} className="text-zinc-700" />
                  </div>
                  <div className="space-y-6">
                    {faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="border-b border-white/5 pb-6 last:border-0 last:pb-0"
                      >
                        <button
                          onClick={() =>
                            setActiveFaq(activeFaq === i ? null : i)
                          }
                          className="w-full flex justify-between items-center text-left hover:text-yellow-400 transition-colors"
                        >
                          <span className="font-display font-black text-sm uppercase tracking-widest">
                            {faq.q}
                          </span>
                          <Plus
                            size={14}
                            className={`transition-transform duration-500 ${activeFaq === i ? "rotate-45" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeFaq === i && (
                             <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-4 text-sm text-zinc-300 leading-relaxed font-light overflow-hidden"
                            >
                              {faq.a}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Trust Bridge Tags */}
              <ScrollReveal delay={0.8}>
                <div className="flex flex-wrap gap-4 pt-4">
                  {[
                    { icon: ShieldCheck, text: "Data_Encrypted" },
                    { icon: Clock, text: "24/7_Watch" },
                    { icon: Globe, text: "Global_Presence" },
                  ].map((tag, i) => (
                     <div
                      key={i}
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5"
                    >
                      <tag.icon size={12} className="text-yellow-400/50" />
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-black">
                        {tag.text}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      {/* ── SOCIAL MATRIX STRIP ── */}
      <section className="relative z-10 py-16 sm:py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                 <div className="p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem] bg-white/[0.015] border border-white/5 hover:border-yellow-400/20 transition-all text-left group h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                        <MapPin size={18} />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-black group-hover:text-zinc-200">{office.country}</span>
                    </div>
                    <h5 className="text-xl font-display font-black uppercase text-white mb-3 tracking-tight">{office.city}</h5>
                    <p className="text-zinc-300 text-xs font-light leading-relaxed mb-4">{office.address}</p>
                    {office.phone && (
                      <p className="text-xs font-mono text-yellow-400/60 font-bold tracking-widest">{office.phone}</p>
                    )}
                 </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-20 sm:mt-32">
             <h4 className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-[0.4em] sm:tracking-[0.6em] font-black mb-8 sm:mb-16">
               OPERATIONAL_HOURS
             </h4>
             <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
                {[
                  { day: "Mon-Fri", hours: "9:00 AM – 7:00 PM" },
                  { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
                  { day: "Sunday", hours: "Rest Day (Closed)" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest font-black">{item.day}</p>
                    <p className="text-base sm:text-lg font-display font-black text-white uppercase">{item.hours}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
