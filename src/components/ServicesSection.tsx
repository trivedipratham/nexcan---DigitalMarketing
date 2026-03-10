import { motion } from "framer-motion";
import { Search, Share2, Target, FileText, Mail } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Search,
    title: "SEO Growth Engine",
    description: "Dominate search rankings with our AI-powered SEO strategies. Technical audits, content optimization, and link building at scale.",
    metrics: "+300% organic traffic avg.",
  },
  {
    icon: Share2,
    title: "Social Media Growth",
    description: "Build communities that convert. Strategic content, influencer partnerships, and paid social amplification across all platforms.",
    metrics: "5X engagement increase",
  },
  {
    icon: Target,
    title: "Performance Advertising",
    description: "Precision-targeted campaigns across Google, Meta, and programmatic networks. Every dollar tracked, optimized, and scaled.",
    metrics: "2.5X ROAS average",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Data-driven content that ranks, converts, and establishes authority. Blog posts, whitepapers, video, and interactive media.",
    metrics: "4X content ROI",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Lifecycle marketing that nurtures leads on autopilot. Smart segmentation, A/B testing, and behavioral triggers.",
    metrics: "45% open rate avg.",
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative">
      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-xs font-display font-bold uppercase tracking-[0.2em] mb-4 block">
            Services
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight">
            What We <span className="gradient-text">Build</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`glass-card-hover p-8 cursor-pointer relative overflow-hidden ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === i && (
                <motion.div
                  className="absolute inset-0 opacity-5"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, hsl(var(--primary)), transparent 70%)",
                  }}
                  layoutId="service-glow"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl uppercase tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-primary text-xs font-display font-bold">
                  {service.metrics}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
