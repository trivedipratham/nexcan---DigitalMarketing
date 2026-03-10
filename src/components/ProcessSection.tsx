import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research",
    description: "Deep-dive audit of your brand, competitors, market positioning, and audience behavior. We uncover the data that informs every decision.",
    detail: "Competitive analysis • Audience mapping • Technical audit • Market gap identification",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "Custom growth blueprint built on data. We design multi-channel strategies with clear KPIs, timelines, and resource allocation.",
    detail: "Channel strategy • Budget modeling • KPI framework • Content calendar",
  },
  {
    icon: Rocket,
    title: "Campaign Execution",
    description: "Precision launch across all channels. Real-time optimization, A/B testing, and agile adjustments to maximize every dollar.",
    detail: "Creative production • Media buying • Landing pages • Tracking setup",
  },
  {
    icon: TrendingUp,
    title: "Growth Optimization",
    description: "Continuous improvement through data analysis. We scale what works, cut what doesn't, and compound your growth.",
    detail: "Performance analysis • Scaling playbooks • ROI reporting • Strategic pivots",
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

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
            Process
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight">
            How We <span className="gradient-text">Operate</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <motion.div
                key={i}
                className={`glass-card overflow-hidden cursor-pointer transition-all duration-500 ${
                  isActive ? "border-primary/40" : "opacity-70 hover:opacity-100"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveStep(i)}
                style={{
                  filter: !isActive ? "blur(0.5px)" : "none",
                  transform: !isActive ? "scale(0.98)" : "scale(1)",
                }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 ${
                      isActive ? "bg-primary/20" : "bg-secondary"
                    }`}>
                      <step.icon size={24} className={isActive ? "text-primary" : "text-muted-foreground"} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                        <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pl-20">
                      <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                      <p className="text-xs text-primary/80 font-mono">{step.detail}</p>
                    </div>
                  </motion.div>
                </div>

                {isActive && (
                  <div className="h-0.5 bg-gradient-to-r from-neon-violet via-primary to-neon-blue" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
