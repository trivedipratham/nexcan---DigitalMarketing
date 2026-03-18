import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { Menu, X, ArrowUpRight, Zap, Target } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/case-studies" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const { scrollY, scrollYProgress } = useScroll();

  const headerY = useTransform(scrollY, [0, 100], [0, -4]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.99]);
  const bridgeOpacity = useTransform(scrollY, [0, 50], [1, 0.4]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.header
        style={{ y: headerY, scale: headerScale }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center items-start pt-6 md:pt-4 px-6 md:px-12 pointer-events-none"
      >
        <div className={`
          flex items-center justify-between w-full max-w-[1400px] pointer-events-auto transition-all duration-700 h-24 px-8 md:px-10 rounded-[2rem]
          ${scrolled 
            ? "bg-[#0B0F19]/80 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-[0.98]" 
            : "bg-transparent border border-transparent shadow-none"
          }
        `}>
          
          {/* Group 1: Brand Anchor */}
          <div className="flex items-center">
            <Link to="/" className="group block focus:outline-none">
              <img 
                src="/NEXCAN%20LOGO%20(1).png" 
                alt="Nexcan Logo" 
                className="h-20 md:h-56 w-auto object-contain transition-all duration-700 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Group 2: Minimalist Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-6 py-2.5 group/link overflow-hidden"
                >
                  <span className={`relative z-10 font-body text-[12px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                    isActive ? "text-yellow-400" : "text-zinc-400 group-hover/link:text-zinc-200"
                  }`}>
                    {link.label}
                  </span>
                  
                  {/* Subtle Indicator for Active/Hover State */}
                  <div className={`
                    absolute bottom-0 left-6 right-6 h-[1.5px] bg-yellow-400 transition-transform duration-500
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"}
                  `} />
                </Link>
              );
            })}
          </nav>

          {/* Group 3: Action & Access */}
          <div className="flex items-center gap-6">
            <Link to="/contact" className={`
              hidden md:flex items-center gap-3 px-8 py-4 rounded-2xl font-heading text-xs uppercase tracking-[0.25em] font-black transition-all duration-500 group relative overflow-hidden
              ${scrolled 
                ? "bg-yellow-400 text-black shadow-lg" 
                : "bg-white/5 text-white border border-white/10 hover:bg-yellow-400 hover:text-black hover:border-transparent"
              }
            `}>
              <span className="relative z-10">Get In Touch</span>
              <Target size={14} className="relative z-10 group-hover:rotate-45 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
            
            <button
              onClick={() => setMenuOpen(true)}
              className={`
                lg:hidden relative w-14 h-14 rounded-2xl border transition-all duration-700 group flex items-center justify-center
                ${scrolled 
                  ? "bg-yellow-400 border-transparent shadow-lg text-black" 
                  : "bg-white/5 border-white/10 backdrop-blur-xl text-white"
                }
              `}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Decorative Bottom Line (Scrolled Only) */}
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className={`absolute bottom-0 left-10 right-10 h-[1px] bg-yellow-400/20 origin-center transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </motion.header>

      {/* Mobile Experience: The Minimalist Half-Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* The Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 220 }}
              className="fixed top-0 right-0 z-[120] w-[80%] md:w-[450px] h-full bg-[#04060b]/98 backdrop-blur-3xl border-l border-white/10 flex flex-col lg:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.8)]"
            >
              {/* Sidebar Header */}
              <div className="p-8 flex justify-between items-center">
                <img 
                  src="/NEXCAN%20LOGO%20(1).png" 
                  alt="Nexcan Logo" 
                  className="h-16 w-auto object-contain"
                />
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-xl"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Minimalist Nav List */}
              <nav className="flex-1 overflow-y-auto px-8 py-10 flex flex-col justify-center space-y-10 custom-scrollbar">
                <div className="space-y-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center gap-4 py-2"
                      >
                         <span className={`font-display text-3xl font-black uppercase tracking-tighter transition-all duration-500 ${
                           location.pathname === link.path 
                             ? "text-yellow-400" 
                             : "text-white/40 group-hover:text-white"
                         }`}>
                           {link.label}
                         </span>
                         {location.pathname === link.path && (
                           <motion.div 
                             layoutId="active_indicator"
                             className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_15px_#facc15]" 
                           />
                         )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Sidebar Footer */}
              <div className="p-8 border-t border-white/5 bg-gradient-to-t from-yellow-400/[0.01] to-transparent">
                <Link 
                  to="/contact" 
                  onClick={() => setMenuOpen(false)} 
                  className="group relative w-full py-6 bg-yellow-400 rounded-2xl flex items-center justify-center font-display text-xs uppercase text-black font-black tracking-[0.3em] gap-4 shadow-[0_20px_50px_rgba(250,204,21,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowUpRight size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;




