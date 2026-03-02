import { useState } from "react";
import { motion } from "motion/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Mail, Phone, MapPin, MessageSquare, Calendar as CalendarIcon, CheckCircle2, Send } from "lucide-react";

export default function Contact() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    farm_location: "",
    crop_type: "",
    farm_size: "",
    consultation_type: "Virtual Consultation",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          consultation_date: startDate?.toISOString(),
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          farm_location: "",
          crop_type: "",
          farm_size: "",
          consultation_type: "Virtual Consultation",
          message: "",
        });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-agri-earth mb-8">Let's Grow Together</h1>
              <p className="text-lg text-agri-earth/70 mb-12 leading-relaxed">
                Ready to transform your farm? Book a consultation with our experts today. Whether you need a virtual assessment or an on-field visit, we're here to help.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="bg-agri-green/10 p-4 rounded-2xl">
                    <Mail className="text-agri-green w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-agri-earth mb-1">Email Us</h4>
                    <p className="text-agri-earth/60">hello@agrigrow.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-agri-green/10 p-4 rounded-2xl">
                    <Phone className="text-agri-green w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-agri-earth mb-1">Call Us</h4>
                    <p className="text-agri-earth/60">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-agri-green/10 p-4 rounded-2xl">
                    <MapPin className="text-agri-green w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-agri-earth mb-1">Our Office</h4>
                    <p className="text-agri-earth/60">123 Agri Park, Innovation Valley, CA 94103</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-3xl overflow-hidden bg-agri-earth/5 relative border border-agri-earth/10">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Map placeholder" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                    <MapPin className="text-agri-green w-5 h-5" />
                    <span className="font-bold text-agri-earth">View on Google Maps</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-agri-earth/5"
          >
            {formStatus === "success" ? (
              <div className="text-center py-20">
                <div className="bg-agri-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="text-agri-green w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-agri-earth mb-4">Booking Confirmed!</h2>
                <p className="text-agri-earth/60 mb-8">
                  Thank you for reaching out. One of our experts will contact you shortly to confirm your consultation details.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="text-agri-green font-bold underline underline-offset-4"
                >
                  Book another consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-bold text-agri-earth mb-8">Book a Consultation</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-agri-earth/60 uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-agri-cream/50 border border-agri-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agri-green/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-agri-earth/60 uppercase tracking-wider">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-agri-cream/50 border border-agri-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agri-green/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-agri-earth/60 uppercase tracking-wider">Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-agri-cream/50 border border-agri-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agri-green/20"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-agri-earth/60 uppercase tracking-wider">Farm Location</label>
                    <input
                      type="text"
                      value={formData.farm_location}
                      onChange={(e) => setFormData({ ...formData, farm_location: e.target.value })}
                      className="w-full bg-agri-cream/50 border border-agri-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agri-green/20"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-agri-earth/60 uppercase tracking-wider">Crop Type</label>
                    <input
                      type="text"
                      value={formData.crop_type}
                      onChange={(e) => setFormData({ ...formData, crop_type: e.target.value })}
                      className="w-full bg-agri-cream/50 border border-agri-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agri-green/20"
                      placeholder="e.g. Corn, Wheat, Grapes"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-agri-earth/60 uppercase tracking-wider">Farm Size (Acres)</label>
                    <input
                      type="text"
                      value={formData.farm_size}
                      onChange={(e) => setFormData({ ...formData, farm_size: e.target.value })}
                      className="w-full bg-agri-cream/50 border border-agri-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agri-green/20"
                      placeholder="e.g. 50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 flex flex-col">
                    <label className="text-sm font-bold text-agri-earth/60 uppercase tracking-wider">Preferred Date</label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-agri-earth/40 w-5 h-5 z-10" />
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="w-full bg-agri-cream/50 border border-agri-earth/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-agri-green/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-agri-earth/60 uppercase tracking-wider">Consultation Type</label>
                    <select
                      value={formData.consultation_type}
                      onChange={(e) => setFormData({ ...formData, consultation_type: e.target.value })}
                      className="w-full bg-agri-cream/50 border border-agri-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agri-green/20 appearance-none"
                    >
                      <option>Virtual Consultation</option>
                      <option>On-field Visit</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-agri-earth/60 uppercase tracking-wider">Message (Optional)</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-agri-cream/50 border border-agri-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agri-green/20"
                    placeholder="Tell us about your challenges..."
                  />
                </div>

                <button
                  disabled={formStatus === "submitting"}
                  type="submit"
                  className="w-full bg-agri-green text-agri-cream py-4 rounded-xl font-bold text-lg hover:bg-agri-green/90 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {formStatus === "submitting" ? "Processing..." : (
                    <>
                      Confirm Booking
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
