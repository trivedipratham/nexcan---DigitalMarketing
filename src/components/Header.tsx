import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 md:px-12 h-16">
          <Link to="/" className="font-heading text-lg tracking-tight text-foreground">
            KARMADUDE
          </Link>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1 border border-primary text-primary px-5 py-2 text-sm font-body font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Get Started &rsaquo;
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-[5px] items-end"
            aria-label="Open menu"
          >
            <span className="block h-[2px] w-6 bg-foreground" />
            <span className="block h-[2px] w-4 bg-foreground" />
            <span className="block h-[2px] w-5 bg-foreground" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 32px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-primary flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 text-primary-foreground font-heading text-2xl"
              aria-label="Close menu"
            >
              ✕
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`font-heading text-3xl md:text-5xl tracking-tight transition-opacity duration-200 ${
                      location.pathname === link.path
                        ? "text-primary-foreground"
                        : "text-primary-foreground/60 hover:text-primary-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
