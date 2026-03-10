import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    category: "SEO",
    title: "The Death of Traditional SEO: What Works in 2026",
    excerpt: "Search algorithms have evolved beyond keywords. Here's how AI-driven content strategy is reshaping organic growth.",
    readTime: "8 min",
  },
  {
    category: "Paid Media",
    title: "Why Your ROAS Is Lying to You (And What to Track Instead)",
    excerpt: "Return on ad spend is a vanity metric in isolation. Discover the attribution models that reveal true campaign value.",
    readTime: "6 min",
  },
  {
    category: "Strategy",
    title: "From $0 to $1M ARR: The Marketing Playbook No One Talks About",
    excerpt: "A stage-by-stage breakdown of the marketing systems that took three startups from launch to seven-figure revenue.",
    readTime: "12 min",
  },
];

const BlogPreviewSection = () => {
  return (
    <section className="py-32">
      <div className="section-container">
        <motion.div
          className="flex items-end justify-between mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-primary text-xs font-display font-bold uppercase tracking-[0.2em] mb-4 block">
              Insights
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight">
              Latest <span className="gradient-text">Thinking</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              className="glass-card-hover p-8 flex flex-col cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-display font-bold uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase tracking-tight leading-tight mb-4">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 mt-6 text-xs text-muted-foreground">
                <Clock size={12} />
                {post.readTime} read
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
