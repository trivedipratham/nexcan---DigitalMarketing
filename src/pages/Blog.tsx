import { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Activity,
  X,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CtaSection from "@/components/CtaSection";
import { useNavigate } from "react-router-dom";
import { blogApi } from "@/lib/blogApi";

const POSTS_PER_PAGE = 20;

const Blog = () => {
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const gridRef = useRef<HTMLDivElement>(null);
  const [blogCategoryMap, setBlogCategoryMap] = useState<
    Record<number, string>
  >({});

  /* ── Fetch all data once ── */
  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const [catResult, blogResult] = await Promise.all([
          blogApi.getCategoriesWithIds(),
          blogApi.getAllBlogs(1, 200),
        ]);

        const catData = Array.isArray(catResult)
          ? catResult
          : catResult?.data || [];
        const map: Record<number, string> = {};

        if (Array.isArray(catData)) {
          catData.forEach((c: any) => {
            const name = c.category_name || c.name || "";
            if (name && Array.isArray(c.blog_ids)) {
              c.blog_ids.forEach((bid: number) => {
                map[bid] = name;
              });
            }
          });
        }

        setBlogCategoryMap(map);

        const posts = (blogResult?.posts || []).map((p: any) => ({
          ...p,
          category: map[p.id] || p.category || "Uncategorized",
        }));

        setAllPosts(posts);
      } catch (err) {
        console.error("Blog init error:", err);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  /* ── Filter + Paginate ── */
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return allPosts;
    const q = searchQuery.toLowerCase();
    return allPosts.filter(
      (p) =>
        p.title?.toLowerCase().includes(q) ||
        p.excerpt?.toLowerCase().includes(q),
    );
  }, [allPosts, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const changePage = (pg: number) => {
    if (pg < 1 || pg > totalPages) return;
    setCurrentPage(pg);
    // Scroll to top of blog section with offset for fixed navbar
    if (gridRef.current) {
      const top = gridRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#04060b] text-white selection:bg-yellow-400 selection:text-black font-body overflow-x-hidden min-h-screen">
      {/* ── BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#04060b]" />
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-yellow-400/[0.025] blur-[200px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-white/[0.015] blur-[180px] rounded-full" />
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-32 lg:pt-44 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12">
            <ScrollReveal>
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3 text-yellow-400 font-mono text-[9px] lg:text-[10px] uppercase tracking-[0.5em]">
                  <Activity size={12} className="animate-pulse" />
                  <span>Live Feed</span>
                </div>
                <h1 className="text-[14vw] sm:text-[12vw] lg:text-[130px] font-display font-black tracking-tighter leading-[0.85] uppercase">
                  <span className="block text-white">NEXCAN</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-white/40 block">
                    BLOG.
                  </span>
                </h1>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="lg:pb-6 max-w-md text-left lg:text-right">
              <p className="text-base sm:text-lg md:text-xl text-zinc-500 font-light leading-relaxed border-l-2 lg:border-l-0 lg:border-r-2 border-yellow-400/30 pl-6 lg:pl-0 lg:pr-8">
                Insights into the{" "}
                <span className="text-white font-medium">
                  latest strategies
                </span>{" "}
                in marketing, AI, and business growth.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BLOG GRID SECTION
         ══════════════════════════════════════════════════════════ */}
      <section ref={gridRef} className="relative z-10 py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* ── HEADER BAR: Title left, Search right ── */}
          <div className="mb-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight">
                All Articles
              </h2>
              <p className="text-zinc-600 text-sm mt-2">
                {filteredPosts.length} article
                {filteredPosts.length !== 1 ? "s" : ""}
                {totalPages > 1 && ` · Page ${currentPage} of ${totalPages}`}
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search
                size={14}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder:text-zinc-700 outline-none focus:border-yellow-400/40 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* ── BLOG CARDS ── */}
          {loading ? (
            <div className="py-32 flex flex-col items-center justify-center gap-6">
              <div className="w-12 h-12 border-t-2 border-yellow-400 rounded-full animate-spin" />
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em] animate-pulse">
                Loading articles...
              </p>
            </div>
          ) : paginatedPosts.length === 0 ? (
            <div className="py-24 text-center space-y-6">
              <div className="w-20 h-20 bg-white/[0.02] border border-white/10 rounded-full flex items-center justify-center mx-auto">
                <Search size={28} className="text-zinc-700" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                No articles found
              </h3>
              <p className="text-zinc-500 text-sm max-w-sm mx-auto">
                Try a different search term.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-yellow-400 text-sm font-medium hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {paginatedPosts.map((post, i) => (
                  <motion.article
                    key={post.id || i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="group flex flex-col rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-white/[0.015] overflow-hidden hover:border-white/[0.12] transition-all duration-500 cursor-pointer"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest text-yellow-400">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4 text-zinc-600 text-[11px]">
                        <Clock size={12} className="text-yellow-400/60" />
                        <span>{post.readTime || post.read_time}</span>
                        <span className="text-zinc-800">•</span>
                        <span>{post.date}</span>
                      </div>

                      <h3 className="text-lg font-display font-bold text-white leading-snug mb-3 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-6">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center gap-2 text-zinc-600 group-hover:text-yellow-400 transition-colors text-xs font-semibold uppercase tracking-wider">
                        Read article
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* ── PAGINATION ── */}
              {totalPages > 1 && (
                <div className="mt-16 pt-12 border-t border-white/5">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                      onClick={() => changePage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-white/10 text-xs sm:text-sm text-white hover:bg-white/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft size={16} />
                      <span className="hidden sm:inline">Previous</span>
                      <span className="sm:hidden">Prev</span>
                    </button>

                    <div className="flex items-center gap-1.5 flex-wrap justify-center">
                      {generatePageNumbers(currentPage, totalPages).map(
                        (item, idx) =>
                          item === "..." ? (
                            <span
                              key={`dots-${idx}`}
                              className="w-10 h-10 flex items-center justify-center text-zinc-700 text-sm"
                            >
                              …
                            </span>
                          ) : (
                            <button
                              key={item}
                              onClick={() => changePage(item as number)}
                              className={`w-10 h-10 rounded-xl border text-sm font-semibold transition-all ${
                                currentPage === item
                                  ? "bg-yellow-400 border-yellow-400 text-black shadow-lg shadow-yellow-400/20"
                                  : "border-white/10 text-zinc-500 hover:text-white hover:border-white/20"
                              }`}
                            >
                              {item}
                            </button>
                          ),
                      )}
                    </div>

                    <button
                      onClick={() => changePage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-white/10 text-xs sm:text-sm text-white hover:bg-white/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <span className="sm:hidden">Next</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <p className="text-center mt-4 text-zinc-700 text-xs font-mono">
                    Page {currentPage} of {totalPages} · {filteredPosts.length}{" "}
                    total articles
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

function generatePageNumbers(
  current: number,
  total: number,
): (number | string)[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | string)[] = [1];
  if (current > 3) pages.push("...");
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

export default Blog;
