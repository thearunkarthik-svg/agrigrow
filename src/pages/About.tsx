import { motion } from "motion/react";
import { Target, Eye, Award, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-agri-earth mb-6">Our Story</h1>
            <p className="text-lg text-agri-earth/70 leading-relaxed">
              Founded in 2025, AgriGrow was born from a simple observation: while technology was advancing rapidly, many farmers were being left behind. We set out to bridge that gap, combining traditional wisdom with cutting-edge data science.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-agri-cream p-12 rounded-3xl"
          >
            <div className="bg-agri-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-agri-green w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-agri-earth mb-6">Our Mission</h2>
            <p className="text-agri-earth/70 leading-relaxed">
              To empower farmers worldwide with the tools, knowledge, and data-driven strategies necessary to build sustainable, resilient, and highly profitable agricultural enterprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-agri-green text-agri-cream p-12 rounded-3xl"
          >
            <div className="bg-agri-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="text-agri-accent w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-agri-cream/80 leading-relaxed">
              A future where every farm is a thriving ecosystem, where technology enhances nature's potential, and where farming is both environmentally restorative and financially rewarding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-agri-earth mb-4">Meet Our Experts</h2>
            <p className="text-agri-earth/60">A diverse team of agronomists, data scientists, and veteran farmers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Dr. Sarah Miller", role: "Chief Agronomist", bio: "PhD in Soil Science with 15 years of experience in regenerative agriculture.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { name: "Marcus Thorne", role: "Agri-Tech Lead", bio: "Former IoT engineer dedicated to precision farming and smart sensor networks.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
              { name: "Elena Rodriguez", role: "Farm Finance Consultant", bio: "Expert in agricultural economics and long-term ROI strategies.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold text-agri-earth mb-1">{member.name}</h3>
                <p className="text-agri-green font-semibold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-agri-earth/60 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-24 bg-agri-earth text-agri-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Our Approach to Sustainable Agriculture</h2>
            <div className="space-y-6">
              {[
                "Regenerative soil management practices",
                "Precision resource allocation (water, nutrients)",
                "Biodiversity enhancement strategies",
                "Climate-resilient crop selection",
                "Circular waste management systems",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="text-agri-accent w-6 h-6 shrink-0" />
                  <span className="text-lg text-agri-cream/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000" alt="Hands holding soil" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -top-10 -right-10 bg-agri-accent p-8 rounded-full hidden lg:block">
              <Award className="w-12 h-12" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
