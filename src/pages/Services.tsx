import { motion } from "motion/react";
import { Microscope, BarChart3, Leaf, Droplets, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const detailedServices = [
  {
    title: "Soil & Crop Analysis",
    icon: Microscope,
    description: "Our comprehensive soil testing goes beyond basic NPK. We analyze microbial activity, organic matter, and micronutrient profiles to build a complete picture of your land's health.",
    features: ["Advanced Lab Testing", "Microbial Activity Mapping", "Nutrient Deficiency Correction", "Crop Health Monitoring"],
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Farm Financial Planning",
    icon: BarChart3,
    description: "Agriculture is a business. We help you manage it like one with sophisticated financial modeling, risk assessment, and long-term investment strategies.",
    features: ["Cash Flow Optimization", "ROI Modeling for Tech", "Grant & Subsidy Assistance", "Market Trend Analysis"],
    image: "https://images.unsplash.com/photo-1454165833767-02a6ed8a499a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Agri-Tech Implementation",
    icon: Zap,
    description: "We help you navigate the complex world of agritech, selecting and deploying the tools that actually deliver value for your specific operation.",
    features: ["IoT Sensor Networks", "Drone Surveying", "Automated Machinery Setup", "Data Management Platforms"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Irrigation Optimization",
    icon: Droplets,
    description: "Water is your most precious resource. Our smart irrigation solutions ensure every drop is used effectively, reducing costs and protecting yields.",
    features: ["Smart Drip Systems", "Soil Moisture Monitoring", "Water Quality Analysis", "Drought Resilience Planning"],
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-agri-earth mb-6"
          >
            Our Consulting Services
          </motion.h1>
          <p className="text-lg text-agri-earth/70 max-w-2xl mx-auto">
            We provide end-to-end support for modern farming, from the microscopic details of soil health to the macro-level of financial planning.
          </p>
        </div>
      </section>

      <section className="px-6 space-y-32">
        {detailedServices.map((service, idx) => (
          <div key={service.title} className="max-w-7xl mx-auto">
            <div className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            )}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="bg-agri-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <service.icon className="text-agri-green w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold text-agri-earth mb-6">{service.title}</h2>
                <p className="text-lg text-agri-earth/70 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-agri-earth/80 font-medium">
                      <div className="w-2 h-2 rounded-full bg-agri-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-agri-green font-bold hover:gap-4 transition-all"
                >
                  Learn more about this service
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={cn(
                  "aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl",
                  idx % 2 === 1 ? "lg:order-1" : ""
                )}
              >
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Sustainability Section */}
      <section className="mt-32 px-6 py-24 bg-agri-green text-agri-cream">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-agri-accent mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">Sustainability is at our Core</h2>
          <p className="text-xl text-agri-cream/80 leading-relaxed mb-12">
            Every service we offer is designed with long-term ecological health in mind. We believe that the most profitable farms are those that work in harmony with nature, not against it.
          </p>
          <Link
            to="/contact"
            className="bg-agri-cream text-agri-green px-8 py-4 rounded-full font-bold text-lg hover:bg-agri-accent hover:text-agri-cream transition-all"
          >
            Start Your Sustainable Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
