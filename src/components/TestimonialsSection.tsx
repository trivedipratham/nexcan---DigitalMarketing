import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nexus Digital transformed our online presence. The ROI from their campaigns exceeded every projection we had.",
    name: "Sarah Chen",
    role: "CMO, TechVault",
    result: "+340% revenue growth",
  },
  {
    quote:
      "Their data-driven approach is genuinely different. They don't guess — they know exactly what levers to pull.",
    name: "Marcus Rivera",
    role: "Founder, ScaleUp Labs",
    result: "5X lead generation",
  },
  {
    quote:
      "We've worked with agencies before, but none operated with this level of precision and transparency.",
    name: "Emily Nakamura",
    role: "VP Marketing, HealthBridge",
    result: "2X patient signups",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32">
      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary/80 text-sm font-display font-semibold uppercase tracking-[0.2em] mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-white mb-6">
            Hear what our <span className="gradient-text">clients say.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-8 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Quote size={24} className="text-primary/30 mb-6" />
              <blockquote className="text-foreground text-lg leading-relaxed mb-8 flex-1">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center font-display font-bold text-sm text-background">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-primary font-display font-bold uppercase">
                  {t.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
