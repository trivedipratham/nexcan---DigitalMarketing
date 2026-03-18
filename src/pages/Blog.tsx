import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  Plus,
  Search,
  Filter,
  Clock,
  MessageSquare,
  Target,
  Zap,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CtaSection from "@/components/CtaSection";
import seo from "../../public/seo.jpg";
import paidm from "../../public/The Art of Rejection and Saying...jpg";
import brandstrategy from "../../public/Brand Strategy.jpg";
import techai from "../../public/Tech & AI.jpg";
import culture from "../../public/Culture.jpg";
import { useNavigate } from "react-router-dom";
import { blogApi, BlogPost } from "@/lib/blogApi";

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<
    { name: string; id: number | string }[]
  >([]);
  const [activeCategory, setActiveCategory] = useState<string | number>(
    "All Posts",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const result = await blogApi.getCategoriesWithIds();
        const catData = result.data || result;
        if (Array.isArray(catData)) {
          const mappedCategories = catData.map((c: any) => ({
            name: c.category_name || c.name,
            id: c.category_id || c.id,
          }));
          setCategories([
            { name: "All Posts", id: "All Posts" },
            ...mappedCategories,
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    fetchBlogData(currentPage);
  }, [currentPage]);

  const fetchBlogData = async (page: number) => {
    try {
      setLoading(true);
      const result = await blogApi.getAllBlogs(page);
      setPosts(result.posts);
      setTotalPages(result.pagination.totalPages);

      // Window scroll to top of section on page change
      if (page > 1 && containerRef.current) {
        window.scrollTo({ top: 400, behavior: "smooth" });
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter((post) => {
    // Note: If we are using server side pagination, usually filtering also happens on server.
    // However, if the user wants to filter the CURRENT page results, we keep this.
    // If they want global filtering, we might need a different API endpoint or logic.
    // For now, let's stick to current page filtering as per the search query.
    const matchesCategory =
      activeCategory === "All Posts" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt?.toLowerCase() || "").includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured post logic (only on first page, default view)
  const isDefaultView =
    activeCategory === "All Posts" && searchQuery === "" && currentPage === 1;
  const featuredPost = isDefaultView
    ? filteredPosts.find((p) => p.featured || p.is_featured)
    : null;
  const remainingPosts = isDefaultView
    ? filteredPosts.filter((p) => !(p.featured || p.is_featured))
    : filteredPosts;

  return (
    <div
      ref={containerRef}
      className="bg-[#04060b] text-white selection:bg-yellow-400 selection:text-black font-body overflow-x-hidden"
    >
      {/* ── HIGH-END BACKGROUND ARCHITECTURE ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#04060b]" />

        {/* Kinetic Grid Layer */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Massive Watermark */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full text-center opacity-[0.015] select-none pointer-events-none">
          <h1 className="text-[25vw] font-display font-black leading-none tracking-tighter uppercase">
            BLOG
          </h1>
        </div>

        {/* Sophisticated Gradients */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-yellow-400/[0.03] blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-white/[0.02] blur-[150px] rounded-full" />
      </div>

      {/* ── HERO ARCHITECTURE ── */}
      <section className="relative z-10 pt-40 pb-20">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <ScrollReveal>
              <div className="space-y-8">
                <h1 className="text-[10vw] lg:text-[130px] font-display font-black tracking-tighter leading-[0.9] uppercase">
                  <span className="block text-white mb-2 underline underline-offset-[12px] decoration-yellow-400/20">
                    NEXCAN
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-white/40 block">
                    BLOG.
                  </span>
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal
              delay={0.2}
              className="lg:pb-4 max-w-sm lg:ml-auto text-right"
            >
              <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed border-r-2 border-yellow-400/30 pr-8">
                Looking at the{" "}
                <span className="text-white">latest changes</span> in global
                marketing and how businesses grow.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE FILTER MATRIX ── */}
      <section className="relative z-10 sticky top-[80px] py-8 bg-[#04060b]/90 backdrop-blur-3xl border-y border-white/5 overflow-x-auto scrollbar-hide">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-12">
          <div className="flex items-center gap-4 min-w-max">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setCurrentPage(1); // Reset to page 1 on category change
                }}
                className={`px-8 py-4 rounded-2xl font-display text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-500 border ${
                  activeCategory === cat.name
                    ? "bg-yellow-400 text-black border-yellow-400 shadow-[0_15px_30px_rgba(250,204,21,0.2)]"
                    : "bg-white/[0.02] text-zinc-600 border-white/5 hover:border-yellow-400/40 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6 text-zinc-600 bg-white/[0.015] border border-white/10 px-8 py-4 rounded-2xl shadow-xl">
            <Search size={14} className="text-yellow-400/50" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-[10px] font-mono tracking-widest text-white placeholder:text-zinc-800 w-48 font-bold"
            />
          </div>
        </div>
      </section>

      {/* ── CORE JOURNAL INTERFACE ── */}
      <section className="relative z-10 py-32">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
          {/* 1. Featured Insight Card (Power Card) */}
          <ScrollReveal delay={0.3}>
            {featuredPost && (
              <div className="group relative mb-40">
                {/* Dynamic Ambient Blur */}
                <div className="absolute -inset-8 bg-yellow-400/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[5rem]" />

                <div className="relative min-h-[600px] lg:min-h-[750px] overflow-hidden rounded-[4rem] border border-white/10 bg-[#0d121f] shadow-3xl flex flex-col">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-[1500ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-[#04060b]/40 to-transparent" />

                  {/* Featured Overlay Content */}
                  <div className="relative z-10 p-10 md:p-20 pt-24 md:pt-32 flex flex-col justify-end w-full h-full min-h-[600px] lg:min-h-[750px]">
                    <div className="max-w-4xl space-y-8">
                      <div className="flex items-center gap-6">
                        <div className="px-6 py-2 rounded-full backdrop-blur-3xl border border-white/20 bg-white/5">
                          <span className="text-yellow-400 text-[10px] font-mono uppercase tracking-[0.4em] font-black">
                            Featured_Case
                          </span>
                        </div>
                        <div className="h-px w-20 bg-white/10" />
                        <span className="text-zinc-400 font-mono text-[9px] uppercase tracking-widest font-bold">
                          Nexcan_Blog
                        </span>
                      </div>

                      <h2 className="text-5xl md:text-7xl lg:text-[85px] font-display font-black tracking-tighter uppercase leading-[0.95] py-2 text-white group-hover:translate-x-4 transition-transform duration-700">
                        {featuredPost.title}
                      </h2>

                      <p className="text-lg md:text-xl text-zinc-400 font-body font-light max-w-2xl leading-relaxed border-l-2 border-yellow-400/30 pl-8">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-12 pt-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <img
                              src="https://i.pravatar.cc/150?u=soul_alex"
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          </div>
                          <div className="space-y-0.5">
                            <p className="text-white font-display text-sm font-black uppercase tracking-tight">
                              {featuredPost.author}
                            </p>
                            <p className="text-zinc-600 font-mono text-[8px] uppercase tracking-widest font-black">
                              Marketing_Expert
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Clock size={16} className="text-yellow-400" />
                          <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest font-black">
                            {featuredPost.readTime} reading
                          </span>
                        </div>
                        <button
                          onClick={() => navigate(`/blog/${featuredPost.id}`)}
                          className="group/btn flex items-center gap-4 bg-yellow-400 text-black px-10 py-5 rounded-2xl font-display font-black text-[11px] uppercase tracking-[0.3em] overflow-hidden relative shadow-2xl transition-all hover:scale-105 active:scale-95"
                        >
                          <span className="relative z-10">
                            Read Transmission
                          </span>
                          <ArrowRight
                            size={16}
                            className="relative z-10 group-hover/btn:translate-x-2 transition-transform"
                          />
                          <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ScrollReveal>

          {loading ? (
            <div className="py-40 flex flex-col items-center justify-center gap-6">
              <div className="w-16 h-16 border-t-2 border-yellow-400 rounded-full animate-spin" />
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500 animate-pulse">
                Accessing Data Protocols...
              </p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-20 text-center space-y-6">
              <div className="w-20 h-20 bg-white/[0.02] border border-white/10 rounded-full flex items-center justify-center mx-auto text-zinc-600">
                <Search size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-display font-black uppercase text-white">
                  No Insights Found
                </h3>
                <p className="text-zinc-500 font-body font-light">
                  Your search criteria did not match any files in our database.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveCategory("All Posts");
                  setSearchQuery("");
                }}
                className="text-yellow-400 font-mono text-[10px] uppercase tracking-widest border-b border-yellow-400/20 pb-1 hover:text-white transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {remainingPosts.map((post, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.1} className="h-full">
                  <div className="group relative h-full">
                    <div className="relative h-full flex flex-col overflow-hidden rounded-[3.5rem] border border-white/5 bg-white/[0.015] p-10 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-700">
                      {/* Card Image Cover (Low Opacity) */}
                      <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-white/5 flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[1200ms] ease-out"
                        />
                        <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10">
                          <span className="text-yellow-400 text-[9px] font-mono uppercase tracking-widest font-black">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-8 flex flex-col flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Clock size={14} className="text-zinc-700" />
                            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest font-black">
                              {post.readTime || post.read_time}_Read
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.4em] font-black">
                            Article_0{i + 1}
                          </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tighter uppercase leading-[1] text-white group-hover:text-yellow-400 transition-colors duration-500 line-clamp-3 min-h-[3em] md:min-h-[3em]">
                          {post.title}
                        </h3>

                        <p className="text-base text-zinc-500 font-body font-light leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors duration-500 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="pt-6 border-t border-white/5 flex justify-between items-center group/btn-link mt-auto">
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-black">
                              {post.date || post.publish_date}
                            </span>
                          </div>
                          <button
                            onClick={() => navigate(`/blog/${post.id}`)}
                            className="flex items-center gap-4 text-white hover:text-yellow-400 transition-colors"
                          >
                            <span className="font-display font-black text-xs uppercase tracking-widest">
                              Read More
                            </span>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn-link:bg-yellow-400 group-hover/btn-link:text-black group-hover/btn-link:border-yellow-400 transition-all">
                              <ArrowUpRight size={18} />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* ── PAGINATION MATRIX ── */}
          {!loading && totalPages > 1 && (
            <div className="mt-24 flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 font-mono text-[10px] uppercase tracking-widest text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/10 transition-all"
              >
                Prev
              </button>

              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-12 h-12 rounded-xl border font-mono text-xs transition-all ${
                      currentPage === i + 1
                        ? "bg-yellow-400 text-black border-yellow-400 font-bold shadow-lg shadow-yellow-400/20"
                        : "border-white/5 bg-white/[0.02] text-zinc-500 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 font-mono text-[10px] uppercase tracking-widest text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/10 transition-all"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaSection />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Blog;
