import { Link } from "react-router-dom";
import { Sprout, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-agri-green text-agri-cream pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <Sprout className="w-8 h-8 text-agri-accent" />
            <span className="font-serif text-2xl font-bold tracking-tight">AgriGrow</span>
          </Link>
          <p className="text-agri-cream/70 text-sm leading-relaxed mb-8">
            Empowering farmers with data-driven insights and sustainable strategies for a more profitable and resilient future.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-agri-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-agri-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-agri-accent transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-agri-cream/70">
            <li><Link to="/" className="hover:text-agri-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-agri-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-agri-accent transition-colors">Services</Link></li>
            <li><Link to="/resources" className="hover:text-agri-accent transition-colors">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-agri-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-agri-cream/70">
            <li>Soil & Crop Analysis</li>
            <li>Farm Financial Planning</li>
            <li>Agri-Tech Implementation</li>
            <li>Irrigation Optimization</li>
            <li>Sustainability Consulting</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-agri-cream/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-agri-accent shrink-0" />
              <span>123 Agri Park, Innovation Valley,<br />CA 94103, USA</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-agri-accent shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-agri-accent shrink-0" />
              <span>hello@agrigrow.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-agri-cream/10 text-center text-xs text-agri-cream/40">
        <p>&copy; {new Date().getFullYear()} AgriGrow Consulting. All rights reserved. Sustainable Growth. Profitable Farms.</p>
      </div>
    </footer>
  );
}
