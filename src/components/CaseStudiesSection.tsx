import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3 } from "lucide-react";

const cases = [
  {
    industry: "Ecommerce Brand",
    strategy: "Facebook Ads Campaign",
    result: "3X Sales Increase",
    growth: "+312%",
    detail:
      "Scaled from $50K to $200K monthly revenue through precision audience targeting and creative optimization.",
  },
  {
    industry: "SaaS Startup",
    strategy: "SEO + Content Marketing",
    result: "5X Organic Leads",
    growth: "+487%",
    detail:
      "Built a content engine that generates 15,000+ monthly organic visits and 400+ qualified leads.",
  },
  {
    industry: "Healthcare Platform",
    strategy: "Multi-Channel Strategy",
    result: "2X Patient Acquisition",
    growth: "+215%",
    detail:
      "Combined paid search, social proof, and email nurturing to double new patient signups in 6 months.",
  },
];

const CaseStudiesSection = () => {
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
            Portfolio
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-white mb-6">
            Check out our work.{" "}
            <span className="gradient-text">Be blown away.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-8 flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-display font-bold uppercase tracking-wider text-muted-foreground">
                  {c.industry}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>

              {/* Visual graph placeholder */}
              <div className="h-32 glass-card rounded-lg mb-6 flex items-end justify-center gap-1 p-4 overflow-hidden">
                {[30, 45, 35, 55, 65, 50, 75, 85, 70, 95].map((h, j) => (
                  <motion.div
                    key={j}
                    className="w-full rounded-t bg-primary/30"
                    style={{ height: `${h}%` }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.05 + 0.3, duration: 0.4 }}
                  />
                ))}
              </div>

              <span className="text-xs text-muted-foreground mb-2">
                {c.strategy}
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {c.result}
              </h3>
              <span className="text-primary font-display font-extrabold text-3xl mb-4">
                {c.growth}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                {c.detail}
              </p>

              <div className="mt-6 flex items-center gap-2 text-primary text-xs font-display font-bold uppercase group-hover:gap-3 transition-all">
                <BarChart3 size={14} />
                View Full Case Study
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
