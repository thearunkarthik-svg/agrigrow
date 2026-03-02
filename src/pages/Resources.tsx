import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image_url: string;
  author: string;
  published_at: string;
}

export default function Resources() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-agri-earth mb-6">Resources & Insights</h1>
            <p className="text-lg text-agri-earth/70">
              Stay updated with the latest trends in agritech, sustainable farming, and agricultural finance.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-agri-earth/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-agri-earth/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-agri-green/20 transition-all"
            />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-agri-earth/5 aspect-video rounded-3xl mb-6" />
                <div className="h-6 bg-agri-earth/5 rounded w-3/4 mb-4" />
                <div className="h-4 bg-agri-earth/5 rounded w-full mb-2" />
                <div className="h-4 bg-agri-earth/5 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {filteredBlogs.length > 0 && !searchTerm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20"
              >
                <Link to={`/resources/${filteredBlogs[0].slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img
                      src={filteredBlogs[0].image_url}
                      alt={filteredBlogs[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="bg-agri-green text-agri-cream px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        Featured Article
                      </span>
                      <span className="text-agri-earth/40 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(filteredBlogs[0].published_at).toLocaleDateString()}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-agri-earth mb-6 group-hover:text-agri-green transition-colors">
                      {filteredBlogs[0].title}
                    </h2>
                    <p className="text-lg text-agri-earth/70 mb-8 leading-relaxed">
                      {filteredBlogs[0].excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-agri-green/10 flex items-center justify-center">
                        <User className="text-agri-green w-5 h-5" />
                      </div>
                      <span className="font-bold text-agri-earth">{filteredBlogs[0].author}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredBlogs.slice(searchTerm ? 0 : 1).map((blog, idx) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/resources/${blog.slug}`} className="group block">
                    <div className="aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg">
                      <img
                        src={blog.image_url}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-agri-green font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {blog.category}
                      </span>
                      <span className="text-agri-earth/30 text-xs">•</span>
                      <span className="text-agri-earth/40 text-xs">
                        {new Date(blog.published_at).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-agri-earth mb-4 group-hover:text-agri-green transition-colors leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-agri-earth/60 text-sm leading-relaxed mb-6 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-agri-green font-bold text-sm group-hover:gap-3 transition-all">
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-agri-earth/40">No articles found matching your search.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
