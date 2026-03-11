import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const FreeAuditSection = () => {
  const [url, setUrl] = useState("");

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[120px] opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="glass-card p-12 md:p-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="text-primary mx-auto mb-6" size={32} />
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mb-4">
            Free marketing <span className="gradient-text">audit.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Submit your website or social media page and receive a comprehensive
            analysis with actionable growth recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL"
              className="flex-1 bg-secondary border border-border rounded-lg px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button className="btn-neon shrink-0 rounded-full bg-primary text-background border-none px-8 py-4 hover:scale-105 transition-transform hover:shadow-[0_0_20px_var(--primary)] text-sm font-semibold flex items-center gap-2 mt-4 sm:mt-0">
              Analyze
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeAuditSection;
