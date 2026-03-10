import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/mo",
    description: "For brands ready to establish a digital foundation.",
    features: ["SEO Audit & Strategy", "Social Media Management (2 platforms)", "Monthly Performance Report", "Content Calendar", "Email Support"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$5,500",
    period: "/mo",
    description: "For brands scaling aggressively across channels.",
    features: ["Everything in Starter", "Paid Advertising Management", "Content Marketing (8 articles/mo)", "Email Automation Setup", "Bi-weekly Strategy Calls", "Dedicated Account Manager"],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "$12,000",
    period: "/mo",
    description: "For enterprise brands demanding full-stack growth.",
    features: ["Everything in Growth", "Multi-channel Campaigns", "Custom Analytics Dashboard", "Influencer Partnerships", "Weekly Optimization Sprints", "Executive Reporting", "24/7 Priority Support"],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-32">
      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-xs font-display font-bold uppercase tracking-[0.2em] mb-4 block">
            Pricing
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight">
            Invest In <span className="gradient-text">Growth</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative rounded-xl flex flex-col ${
                plan.highlighted ? "gradient-border" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={`glass-card p-8 flex flex-col flex-1 ${
                plan.highlighted ? "neon-glow" : ""
              }`}>
                {plan.highlighted && (
                  <div className="flex items-center gap-1 text-xs text-primary font-display font-bold uppercase mb-4">
                    <Zap size={12} />
                    Most Popular
                  </div>
                )}
                <h3 className="font-display font-bold text-2xl uppercase mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="font-display font-extrabold text-4xl">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={plan.highlighted ? "btn-neon w-full text-center" : "btn-ghost-neon w-full text-center"}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
