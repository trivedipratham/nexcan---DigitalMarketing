import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, className = "", delay = 0 }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
);

ScrollReveal.displayName = "ScrollReveal";

export default ScrollReveal;
