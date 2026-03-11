import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Search Engine Optimization",
    tag: "SEO",
    desc: "We engineer your digital presence to rank where it matters. Technical audits, content optimization, and link-building strategies that compound over time.",
    details: ["Technical SEO Audits", "Keyword Strategy", "On-Page Optimization", "Link Building"],
  },
  {
    title: "Pay-Per-Click Advertising",
    tag: "PPC",
    desc: "Every dollar tracked, every click intentional. We build and manage campaigns across Google Ads and Meta that deliver measurable return.",
    details: ["Google Ads Management", "Meta Advertising", "Landing Page Optimization", "A/B Testing"],
  },
  {
    title: "Social Media Management",
    tag: "Social",
    desc: "We build audiences that care. Strategy, content creation, and community management across the platforms that matter for your brand.",
    details: ["Content Calendars", "Community Management", "Influencer Outreach", "Analytics & Reporting"],
  },
  {
    title: "Content Strategy",
    tag: "Content",
    desc: "Words and visuals engineered for impact. We create content systems that educate, engage, and convert your ideal audience.",
    details: ["Brand Messaging", "Blog & Article Writing", "Video Strategy", "Email Marketing"],
  },
];

const Services = () => (
  <div>
    <section className="section-spacing pt-32">
      <div className="content-column">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">Services</p>
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
            What we <span className="text-emphasis">deliver.</span>
          </h1>
          <p className="text-muted-foreground max-w-lg font-body leading-relaxed mb-20">
            Four disciplines, each executed with precision. No fluff, no vanity metrics—only work that moves the needle.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.tag} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="border border-border rounded-xl p-8 hover:border-primary group transition-colors duration-300 h-full flex flex-col"
              >
                <span className="text-xs text-primary font-body font-medium uppercase tracking-wider mb-4">
                  {s.tag}
                </span>
                <h2 className="font-heading text-xl text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed font-body mb-6 flex-1">
                  {s.desc}
                </p>
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="text-xs text-muted-foreground font-body flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
