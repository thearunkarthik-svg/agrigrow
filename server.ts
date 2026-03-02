import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";

const db = new Database("agrigrow.db");

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    farm_location TEXT,
    crop_type TEXT,
    farm_size TEXT,
    consultation_date TEXT,
    consultation_type TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT,
    category TEXT,
    image_url TEXT,
    author TEXT,
    published_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed some blog posts if empty
const blogCount = db.prepare("SELECT COUNT(*) as count FROM blog_posts").get() as { count: number };
if (blogCount.count === 0) {
  const insertBlog = db.prepare(`
    INSERT INTO blog_posts (title, slug, excerpt, content, category, image_url, author)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  insertBlog.run(
    "How Precision Agriculture is Changing Modern Farming",
    "precision-agriculture-changing-farming",
    "Discover how data-driven insights and IoT sensors are revolutionizing crop yields and resource management.",
    "# The Future of Farming\n\nPrecision agriculture is no longer a luxury; it's a necessity for sustainable growth...",
    "Agri-Tech",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    "Dr. Sarah Miller"
  );

  insertBlog.run(
    "5 Ways to Improve Crop Yield Sustainably",
    "5-ways-improve-crop-yield-sustainably",
    "Learn practical strategies to boost your farm's productivity while maintaining soil health and ecological balance.",
    "# Sustainable Yield Optimization\n\nBoosting yields doesn't have to come at the cost of the environment...",
    "Sustainable Farming",
    "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
    "Marcus Thorne"
  );

  insertBlog.run(
    "Understanding Soil Health for Maximum Profit",
    "understanding-soil-health-maximum-profit",
    "Your soil is your most valuable asset. Learn how to analyze and improve its nutrient profile for better returns.",
    "# Soil: The Foundation of Profit\n\nHealthy soil leads to healthy crops and healthy bank accounts...",
    "Farm Finance",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
    "Elena Rodriguez"
  );
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/blogs", (req, res) => {
    const blogs = db.prepare("SELECT * FROM blog_posts ORDER BY published_at DESC").all();
    res.json(blogs);
  });

  app.get("/api/blogs/:slug", (req, res) => {
    const blog = db.prepare("SELECT * FROM blog_posts WHERE slug = ?").get(req.params.slug);
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  });

  app.post("/api/bookings", (req, res) => {
    const { name, email, phone, farm_location, crop_type, farm_size, consultation_date, consultation_type, message } = req.body;
    
    try {
      const stmt = db.prepare(`
        INSERT INTO bookings (name, email, phone, farm_location, crop_type, farm_size, consultation_date, consultation_type, message)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(name, email, phone, farm_location, crop_type, farm_size, consultation_date, consultation_type, message);
      res.status(201).json({ success: true, message: "Booking received successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to process booking" });
    }
  });

  app.get("/api/admin/bookings", (req, res) => {
    // In a real app, this would be protected
    const bookings = db.prepare("SELECT * FROM bookings ORDER BY created_at DESC").all();
    res.json(bookings);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
