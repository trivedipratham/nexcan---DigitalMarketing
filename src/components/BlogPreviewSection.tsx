import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { blogApi } from "@/lib/blogApi";

const BlogPreviewSection = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        setLoading(true);
        
        // 1. Fetch Categories first for mapping
        const catRes = await blogApi.getCategoriesWithIds();
        const catData = catRes.data || catRes;
        const mapping: Record<number | string, string> = {};
        
        if (Array.isArray(catData)) {
          catData.forEach((c: any) => {
            const name = c.category_name || c.name;
            if (Array.isArray(c.blog_ids)) {
              c.blog_ids.forEach((id: number | string) => {
                mapping[id] = name;
              });
            }
          });
        }

        // 2. Fetch Latest Blogs (3 posts for preview)
        const result = await blogApi.getAllBlogs(1, 3);
        const allPosts = result.posts || [];
        
        // Enrich posts with dynamic category info
        const enrichedPosts = allPosts.map((p: any) => ({
          ...p,
          category: mapping[p.id] || p.category || 'Digital Marketing'
        }));

        setPosts(enrichedPosts.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch latest blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  return (
    <section className="py-16 md:py-32 relative bg-[#0B0F19] overflow-hidden border-t border-white/5">
      {/* Editorial Watermark */}
      <div className="absolute top-0 right-0 pointer-events-none select-none opacity-[0.03] translate-x-[20%] -translate-y-[10%] z-0">
        <span className="text-[60vw] sm:text-[50vw] md:text-[30vw] font-display font-black text-white tracking-tighter uppercase whitespace-nowrap">
          BLOG
        </span>
      </div>

      <div className="section-container relative z-10 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 mb-12 md:mb-24 px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-yellow-400 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.5em]">
                Blog
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tighter uppercase leading-none">
              Latest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800">
                Articles.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/blog"
              className="group flex items-center gap-3 md:gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all"
            >
              <span className="text-white font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em]">
                View Blog
              </span>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black group-hover:rotate-45 transition-transform">
                <ArrowRight size={14} className="md:size-[16px]" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {loading ? (
            <div className="md:col-span-3 py-20 flex flex-col items-center justify-center gap-6">
              <div className="w-12 h-12 border-t-2 border-yellow-400 rounded-full animate-spin" />
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
                Accessing Data...
              </p>
            </div>
          ) : (
            posts.map((post, i) => (
              <motion.div
                key={post.id || i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative group h-full"
              >
                <div className="relative h-full flex flex-col bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-[2rem] overflow-hidden group/card hover:border-yellow-400/30 transition-all duration-700 shadow-2xl">
                  {/* Image Container with Glaze Effect */}
                  <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 z-20 mix-blend-overlay" />

                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-all duration-1000 ease-out"
                    />

                    {/* Floating Category */}
                    <div className="absolute top-4 left-4 z-30">
                      <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                        <span className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 sm:p-8 flex flex-col flex-1 bg-zinc-950/20 backdrop-blur-md">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 text-zinc-400 font-mono text-[10px] md:text-xs uppercase tracking-widest">
                      <div className="w-4 h-px bg-yellow-400/50" />
                      <Clock size={11} className="text-yellow-400" />
                      {post.read_time || post.readTime} reading
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight leading-[1.2] mb-3 md:mb-4 group-hover/card:text-yellow-400 transition-colors duration-500 line-clamp-2 min-h-[2.5rem] md:min-h-[3.5rem]">
                      {post.title}
                    </h3>

                    <p className="text-zinc-300 text-[13px] md:text-sm leading-relaxed font-light mb-4 md:mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between">
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-white font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] hover:text-yellow-400 transition-colors"
                      >
                        View_Protocol
                      </Link>
                      <ArrowRight
                        size={18}
                        className="text-zinc-700 group-hover/card:text-yellow-400 group-hover/card:translate-x-2 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* Animated Inner Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
