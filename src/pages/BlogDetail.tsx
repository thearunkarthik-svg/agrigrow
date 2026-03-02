import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import { Calendar, User, Tag, ArrowLeft, Share2 } from "lucide-react";

interface BlogPost {
  title: string;
  content: string;
  category: string;
  image_url: string;
  author: string;
  published_at: string;
}

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="pt-32 min-h-screen flex items-center justify-center">Loading...</div>;
  if (!blog) return <div className="pt-32 min-h-screen flex items-center justify-center">Article not found.</div>;

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-agri-green font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" />
          Back to Resources
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-agri-green/10 text-agri-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="text-agri-earth/40 text-sm flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(blog.published_at).toLocaleDateString()}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-agri-earth mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center justify-between border-y border-agri-earth/10 py-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-agri-green/10 flex items-center justify-center">
                <User className="text-agri-green w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-agri-earth">{blog.author}</p>
                <p className="text-xs text-agri-earth/40">Expert Contributor</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-agri-earth/60 hover:text-agri-green transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-bold">Share</span>
            </button>
          </div>

          <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
            <img src={blog.image_url} alt={blog.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>

          <div className="prose prose-lg max-w-none prose-agri">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
