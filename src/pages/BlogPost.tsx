import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Share2, Calendar } from "lucide-react";
import { blogApi, BlogPost as BlogPostType } from "@/lib/blogApi";
import CtaSection from "@/components/CtaSection";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const fetchedPost = await blogApi.getBlogById(id);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#04060b] flex flex-col items-center justify-center text-white p-6">
        <div className="w-12 h-12 border-t-2 border-yellow-400 rounded-full animate-spin mb-6" />
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Decrypting Transmission...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#04060b] flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-4xl font-display font-black uppercase mb-6 text-center">Post Not Found</h1>
        <Link to="/blog" className="flex items-center gap-3 text-yellow-400 font-mono text-sm uppercase tracking-widest hover:text-white transition-colors">
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#04060b] text-white selection:bg-yellow-400 selection:text-black font-body">
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#04060b]" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-yellow-400/[0.02] blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-white/[0.015] blur-[150px] rounded-full" />
      </div>

      <article className="relative z-10 pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Navigation & Metadata */}
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
              <Link to="/blog" className="flex items-center gap-3 text-zinc-500 hover:text-yellow-400 transition-colors font-mono text-[10px] uppercase tracking-widest font-black">
                <ArrowLeft size={14} /> Return to Archives
              </Link>
              <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2 text-zinc-600">
                    <Calendar size={12} className="text-yellow-400/50" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">{post.date || post.publish_date}</span>
                 </div>
                 <div className="flex items-center gap-2 text-zinc-600">
                    <Clock size={12} className="text-yellow-400/50" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">{post.readTime || post.read_time} Read</span>
                 </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Content */}
          <header className="mb-16 space-y-8">
            <ScrollReveal delay={0.1}>
              <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 font-mono text-[10px] uppercase tracking-widest font-black mb-6">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter uppercase leading-[0.95] text-white">
                {post.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-6 py-10 border-y border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=soul_alex" className="w-full h-full object-cover" alt={post.author} />
                </div>
                <div className="space-y-1">
                  <p className="text-white font-display text-lg font-black uppercase tracking-tight">{post.author}</p>
                  <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest font-black">Marketing Strategy Lead</p>
                </div>
                <div className="ml-auto">
                   <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all">
                      <Share2 size={18} />
                   </button>
                </div>
              </div>
            </ScrollReveal>
          </header>

          {/* Featured Image */}
          <ScrollReveal delay={0.3}>
            <div className="relative aspect-[16/9] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl mb-16">
              <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Article Body */}
          <ScrollReveal delay={0.4}>
            <div className="prose prose-invert prose-zinc max-w-none">
              <div 
                className="text-zinc-300 text-xl font-body font-light leading-relaxed space-y-10 blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </ScrollReveal>

          {/* Author Footer Card */}
          <ScrollReveal delay={0.5}>
             <div className="mt-32 p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center gap-10">
                <div className="w-32 h-32 rounded-[2rem] overflow-hidden border-2 border-yellow-400/20 shrink-0">
                   <img src="https://i.pravatar.cc/150?u=soul_alex" className="w-full h-full object-cover" alt={post.author} />
                </div>
                <div className="space-y-4 text-center md:text-left">
                   <div className="space-y-1">
                      <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-black text-white/40">Written By</p>
                      <h4 className="text-3xl font-display font-black uppercase text-white">{post.author}</h4>
                   </div>
                   <p className="text-zinc-400 font-light leading-relaxed max-w-xl">
                      Alex is a Senior Marketing Strategist at Nexcan, specializing in cognitive search evolution and predictive brand narrative. With over a decade of experience in the digital-first economy.
                   </p>
                   <div className="flex items-center justify-center md:justify-start gap-4">
                      <button className="text-yellow-400 font-mono text-[10px] uppercase tracking-widest border-b border-yellow-400/20 pb-1 hover:text-white transition-colors">View All Articles</button>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <button className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest hover:text-white transition-colors">LinkedIn Profile</button>
                   </div>
                </div>
             </div>
          </ScrollReveal>

          {/* Related Navigation */}
          <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between">
             <button 
              onClick={() => navigate('/blog')}
              className="group flex items-center gap-4 text-zinc-500 hover:text-white transition-colors"
             >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                   <ArrowLeft size={20} />
                </div>
                <span className="font-display font-black text-xs uppercase tracking-widest">Previous Article</span>
             </button>
             
             <Link 
              to="/blog"
              className="hidden md:flex items-center gap-2 text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em]"
             >
                Archive Directory
             </Link>

             <button 
              onClick={() => navigate('/blog')}
              className="group flex items-center gap-4 text-zinc-500 hover:text-white transition-colors text-right"
             >
                <span className="font-display font-black text-xs uppercase tracking-widest">Next Insight</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-all">
                   <ArrowLeft size={20} className="rotate-180" />
                </div>
             </button>
          </div>
        </div>
      </article>

      <CtaSection />

      <style>{`
        .blog-content h3 {
          font-family: inherit;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.05em;
          font-size: 2.5rem;
          color: white;
          margin-top: 4rem;
          margin-bottom: 2rem;
        }
        .blog-content p {
          margin-bottom: 2rem;
        }
        .blog-content ul, .blog-content ol {
          margin-left: 1.5rem;
          margin-bottom: 3rem;
          space-y: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 1rem;
          color: #a1a1aa;
        }
        .blog-content strong {
          color: #facc15;
          font-weight: 800;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
