import { motion } from "motion/react";
import { ArrowRight, Leaf, BarChart3, Droplets, ShieldCheck, Microscope, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const services = [
  {
    title: "Soil & Crop Analysis",
    description: "Advanced diagnostic testing to optimize nutrient management and crop health.",
    icon: Microscope,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Farm Financial Planning",
    description: "Data-driven strategies to maximize ROI and ensure long-term financial stability.",
    icon: BarChart3,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Agri-Tech Implementation",
    description: "Deploying IoT, drones, and smart sensors for precision farm management.",
    icon: Leaf,
    color: "bg-agri-accent/20 text-agri-green",
  },
  {
    title: "Irrigation Optimization",
    description: "Smart water management systems to reduce waste and improve drought resilience.",
    icon: Droplets,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    title: "Sustainability Consulting",
    description: "Transitioning to regenerative practices that protect soil and boost yields.",
    icon: ShieldCheck,
    color: "bg-amber-100 text-amber-700",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
            alt="Vast green farm"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-agri-cream/50 via-agri-cream/80 to-agri-cream" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-agri-green/10 text-agri-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Leaf className="w-4 h-4" />
              <span>Leading Agri-Tech Innovation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-agri-earth leading-[1.1] mb-6">
              Transforming Farms into <span className="text-agri-green">Profitable Ecosystems</span>
            </h1>
            <p className="text-lg text-agri-earth/70 mb-10 max-w-xl leading-relaxed">
              We combine data-driven insights with sustainable practices to help modern farmers achieve higher yields and long-term growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-agri-green text-agri-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-agri-green/90 transition-all shadow-xl hover:shadow-agri-green/20 flex items-center justify-center gap-2"
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="bg-white text-agri-earth border border-agri-earth/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-agri-cream transition-all flex items-center justify-center"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000"
                alt="Farmer looking at tablet"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-agri-green/10 p-2 rounded-lg">
                  <BarChart3 className="text-agri-green w-6 h-6" />
                </div>
                <span className="font-bold text-2xl text-agri-earth">24%</span>
              </div>
              <p className="text-xs text-agri-earth/60 font-medium">Average yield increase for our clients in 2025.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-agri-earth mb-4">Our Core Services</h2>
            <p className="text-agri-earth/60 max-w-2xl mx-auto">
              Comprehensive agricultural solutions tailored to your farm's unique needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-agri-cream border border-agri-earth/5 hover:border-agri-green/20 hover:shadow-xl transition-all"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", service.color)}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-agri-earth">{service.title}</h3>
                <p className="text-sm text-agri-earth/60 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-agri-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=600" alt="Drone over farm" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=600" alt="Soil testing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=600" alt="Greenhouse" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600" alt="Farmer with expert" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-agri-earth mb-8">Why Choose AgriGrow?</h2>
            <div className="space-y-8">
              {[
                { title: "Certified Agricultural Experts", desc: "Our team consists of PhD agronomists and veteran farm managers with decades of experience." },
                { title: "Data-Driven Insights", desc: "We don't guess. We use real-time data and predictive analytics to drive every decision." },
                { title: "Customized Farm Strategies", desc: "Every farm is unique. We build bespoke plans that respect your land's specific ecology." },
                { title: "Sustainable & Profitable", desc: "We prove that environmental stewardship and high profitability can go hand-in-hand." },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="bg-agri-green text-agri-cream w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-agri-earth mb-2">{item.title}</h4>
                    <p className="text-agri-earth/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-agri-earth mb-4">Trusted by Modern Farmers</h2>
            <p className="text-agri-earth/60">Real stories from the fields.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Robert Chen", farm: "Chen Family Vineyards", quote: "AgriGrow's irrigation optimization saved us 30% on water costs while actually improving the quality of our harvest." },
              { name: "Sarah Jenkins", farm: "Jenkins Organic Grains", quote: "The financial planning services were a game-changer. We finally have a clear roadmap for expansion and sustainability." },
              { name: "David Miller", farm: "Miller Dairy & Crops", quote: "Their soil analysis revealed nutrient deficiencies we'd missed for years. Our corn yield is up by 15% this season." },
            ].map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-agri-cream p-10 rounded-3xl border border-agri-earth/5 italic text-agri-earth/80 relative"
              >
                <div className="text-agri-green text-6xl absolute top-4 left-4 opacity-10 font-serif">“</div>
                <p className="mb-8 relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4 not-italic">
                  <div className="w-12 h-12 rounded-full bg-agri-accent/20 flex items-center justify-center">
                    <Users className="text-agri-green w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-agri-earth">{t.name}</p>
                    <p className="text-xs text-agri-green font-semibold uppercase tracking-wider">{t.farm}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-agri-green rounded-[3rem] p-12 md:p-20 text-center text-agri-cream relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-agri-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-agri-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Ready to Maximize Your Farm's Potential?</h2>
          <p className="text-agri-cream/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Join hundreds of successful farmers who have transformed their operations with our expert consulting.
          </p>
          <Link
            to="/contact"
            className="bg-agri-cream text-agri-green px-10 py-5 rounded-full font-bold text-xl hover:bg-agri-accent hover:text-agri-cream transition-all inline-flex items-center gap-3 relative z-10"
          >
            Book Your Free Consultation
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
