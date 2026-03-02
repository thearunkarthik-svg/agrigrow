import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Sprout, Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-agri-cream/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-agri-green p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Sprout className="text-agri-cream w-6 h-6" />
          </div>
          <span className="font-serif text-2xl font-bold text-agri-green tracking-tight">
            AgriGrow
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-agri-green",
                location.pathname === link.href ? "text-agri-green" : "text-agri-earth/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-agri-green text-agri-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-agri-green/90 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-agri-earth" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-agri-cream border-t border-agri-earth/10 p-6 shadow-xl flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium",
                location.pathname === link.href ? "text-agri-green" : "text-agri-earth/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-agri-green text-agri-cream px-6 py-3 rounded-xl text-center font-semibold"
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
