import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B0F19] pt-12 pb-8 overflow-hidden border-t border-white/5">
      {/* Cinematic Parallax Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=60&w=1400")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.08,
          filter: "brightness(0.5)",
        }}
      />

      {/* Decorative Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-transparent to-[#0B0F19] z-1" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent z-1" />

      <div className="section-container relative z-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-10">
          {/* Brand Identity */}
          <div className="space-y-6">
            <div>
              <img
                src="/NEXCAN%20LOGO%20(1).png"
                alt="Nexcan Logo"
                className="h-24 md:h-32 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-700"
              />
              <p className="text-zinc-300 text-base font-body leading-relaxed max-w-sm">
                A top digital marketing agency built for fast growth. We help
                businesses lead their market with results that matter.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/nexcandigitalservices/" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-yellow-400 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Core Navigation */}
          <div className="space-y-6">
            <p className="text-white font-mono text-sm uppercase tracking-[0.4em] font-bold">
              Menu
            </p>
            <nav className="flex flex-col gap-4">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About", path: "/about" },
                { label: "Our Work", path: "/case-studies" },
              ].map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-base font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Market Insights */}
          <div className="space-y-6">
            <p className="text-white font-mono text-sm uppercase tracking-[0.4em] font-bold">
              Updates
            </p>
            <nav className="flex flex-col gap-4">
              {[
                { label: "Blog", path: "/blog" },
                { label: "Pricing", path: "/pricing" },
                { label: "Contact", path: "/contact" },
                { label: "Support", path: "#" },
              ].map((l) => (
                <Link
                  key={l.label}
                  to={l.path}
                  className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-base font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-yellow-400 transition-colors" />
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Global Reach */}
          <div className="space-y-6">
            <p className="text-white font-mono text-sm uppercase tracking-[0.4em] font-bold">
              Connect
            </p>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: "kanak@nexcan.co" },
                { icon: Phone, text: "+91 9601879846" },
                { icon: MapPin, text: "142 Marylinn Dr Milpitas CA 95035, CA, USA" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-zinc-300 transition-all hover:text-white cursor-default"
                >
                  <div className="mt-1 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-yellow-400/80">
                    <item.icon size={16} />
                  </div>
                  <span className="text-base font-medium leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* High-Tech Display Panel & Emerging Watermark */}
        <div className="relative mb-[-3%] pointer-events-none select-none flex flex-col items-center">
          {/* Static Submerged Text Container */}
          <div className="relative overflow-visible pb-4">
            <h2
              className="text-[12vw] font-display font-black italic text-white/[0.10] tracking-[0.4em] leading-none text-center uppercase whitespace-nowrap relative z-10 scale-y-[0.95]"
              style={{
                WebkitTextStroke: "1.5px rgba(253, 251, 133, 0)",
                maskImage:
                  "linear-gradient(to bottom, white 40%, rgba(143, 29, 29, 0.54) 50%, transparent 90%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, white 40%, rgba(255,255,255,0.2) 50%, transparent 90%)",
              }}
            >
              NEXCAN
            </h2>

            {/* Light Rays / Projection Beams (Faster, pulsed static) */}
            <div className="absolute inset-0 z-0 flex justify-center opacity-40">
              {[...Array(6)].map((_, i) => (
                <div
                  key={`ray-${i}`}
                  className="absolute bottom-[-20%] w-[1px] h-[150%] bg-gradient-to-t from-yellow-400/40 via-yellow-400/5 to-transparent blur-[3px]"
                  style={{ left: `${20 + i * 12}%` }}
                />
              ))}
            </div>
          </div>

          {/* Underglow Reflection from the Panel */}
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 h-32 w-[90%] bg-yellow-400/5 blur-[120px] rounded-full z-0" />

          {/* THICK SMOKE CLOUD (Matching reference image) */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-visible z-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1, y: 0 }}
                animate={{
                  opacity: [0, 0.25, 0],
                  scale: [1, 2.5],
                  y: [-20, -120],
                  filter: ["blur(40px)", "blur(80px)"],
                }}
                transition={{
                  duration: 8 + Math.random() * 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 10,
                }}
                className="absolute w-40 h-40 rounded-full bg-gradient-to-tr from-zinc-300/10 via-white/5 to-transparent blur-[60px]"
                style={{
                  left: `${(Math.random() - 0.5) * 120}%`,
                  bottom: "30%",
                }}
              />
            ))}

            {/* Kinetic Data Particles (Rising Nodes - KEPT) */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`p-${i}`}
                initial={{
                  opacity: 0,
                  y: 100,
                  x: (Math.random() - 0.5) * 1000,
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                  y: [40, -200],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
                className="absolute w-[1.5px] h-[1.5px] bg-yellow-400 shadow-[0_0_8px_#FACC15]"
              />
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-[0.2em]">
            © {currentYear} Nexcan. Built for Success.
          </p>
          <div className="flex gap-8">
            <Link
              to="#"
              className="text-zinc-400 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/Privacy"
              className="text-zinc-400 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </div>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all"
          >
            <ArrowUpRight size={18} className="-rotate-45" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
