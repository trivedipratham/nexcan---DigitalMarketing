import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const cultureImages = [
  { caption: "Brainstorm sessions", color: "bg-primary/20" },
  { caption: "Late-night launches", color: "bg-secondary" },
  { caption: "Team retreats", color: "bg-muted" },
  { caption: "Creative workshops", color: "bg-primary/10" },
  { caption: "Coffee & code", color: "bg-secondary" },
  { caption: "Client celebrations", color: "bg-muted" },
];

const About = () => {
  const [activeTab, setActiveTab] = useState<"story" | "culture">("story");

  return (
    <div>
      <section className="section-spacing pt-32">
        <div className="content-column">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-12">
              Cause and <span className="text-emphasis">effect.</span>
            </h1>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex gap-6 border-b border-border mb-12">
              {(["story", "culture"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-body font-medium uppercase tracking-wider transition-colors relative ${
                    activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "story" ? "Our Story" : "Culture"}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            {activeTab === "story" ? (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-8">
                  <p className="text-foreground font-body leading-relaxed text-lg">
                    Karmadude Studio was founded on a simple belief:{" "}
                    <span className="text-emphasis">good work yields good results.</span>
                  </p>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    We started as a team of two with a conviction that digital marketing had lost its way—buried under vanity metrics, hollow promises, and recycled playbooks. We set out to build an agency that measured success by the only metric that matters: tangible growth for our clients.
                  </p>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Today, we're a focused team of strategists, designers, and engineers who believe every campaign should be traceable from effort to outcome. We don't do busywork. We do work that compounds.
                  </p>
                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                    {[
                      { num: "50+", label: "Clients served" },
                      { num: "4", label: "Core disciplines" },
                      { num: "100%", label: "Results-focused" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p className="font-heading text-2xl md:text-3xl text-primary">{s.num}</p>
                        <p className="text-xs text-muted-foreground font-body mt-1 uppercase tracking-wider">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="culture"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-muted-foreground font-body leading-relaxed mb-10">
                  We believe the best work comes from people who genuinely enjoy what they do—and who they do it with.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {cultureImages.map((img, i) => (
                    <motion.div
                      key={img.caption}
                      whileHover={{ scale: 1.03 }}
                      className={`${img.color} rounded-xl aspect-[4/3] flex items-end p-4 group relative overflow-hidden cursor-pointer`}
                    >
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300" />
                      <p className="relative text-xs font-body text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                        {img.caption}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default About;
