import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Users, DollarSign, Award } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    prefix: "+",
    label: "Organic Traffic",
    color: "text-primary",
  },
  {
    icon: Users,
    value: 5,
    suffix: "X",
    prefix: "",
    label: "Lead Growth",
    color: "text-neon-violet",
  },
  {
    icon: DollarSign,
    value: 2,
    suffix: "X",
    prefix: "",
    label: "Revenue Increase",
    color: "text-neon-blue",
  },
  {
    icon: Award,
    value: 120,
    suffix: "+",
    prefix: "",
    label: "Brands Scaled",
    color: "text-primary",
  },
];

const AnimatedCounter = ({
  value,
  suffix,
  prefix,
  inView,
}: {
  value: number;
  suffix: string;
  prefix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setCount(0);
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="font-display font-extrabold text-4xl md:text-5xl">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const GrowthDashboard = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [scanComplete, setScanComplete] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setScanComplete(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary/80 text-sm font-display font-semibold uppercase tracking-[0.2em] mb-4 block">
            Results
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-white mb-6">
            Growth <span className="gradient-text">metrics.</span>
          </h2>
        </motion.div>

        <div className="glass-card overflow-hidden relative">
          {/* Scan line */}
          {inView && !scanComplete && (
            <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden z-10">
              <div className="h-full w-full bg-primary animate-scan-line" />
            </div>
          )}

          <div className="p-2">
            {/* Header bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border mb-6">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="text-xs text-muted-foreground ml-3 font-mono">
                live-analytics.nexus
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-6 text-center relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.5, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-4">
                    <metric.icon size={18} className={metric.color} />
                  </div>
                  <div className={metric.color}>
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      prefix={metric.prefix}
                      inView={inView}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                    {metric.label}
                  </p>
                  {/* Glow on complete */}
                  {scanComplete && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        boxShadow: `0 0 40px -10px hsl(var(--primary) / 0.3)`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthDashboard;
