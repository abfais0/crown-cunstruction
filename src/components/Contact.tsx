import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 skew-x-12 transform translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold-500/5 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest mb-6">
              Get in Touch
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              Let's Secure Your <br />
              <span className="text-gold-500">Foundation.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed font-light">
              Don't wait for small cracks to become big problems. Contact Toronto's 
              leading structural experts for a comprehensive site evaluation.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-2">
                <div className="text-[10px] text-gold-500 uppercase font-black tracking-[0.2em] mb-2">Direct Line</div>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-bold text-white hover:text-gold-500 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="space-y-2">
                <div className="text-[10px] text-gold-500 uppercase font-black tracking-[0.2em] mb-2">Email Address</div>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xl font-bold text-white hover:text-gold-500 transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="space-y-2">
                <div className="text-[10px] text-gold-500 uppercase font-black tracking-[0.2em] mb-2">Service Area</div>
                <div className="text-xl font-bold text-white">{BUSINESS_INFO.location}</div>
              </div>

              <div className="space-y-2">
                <div className="text-[10px] text-gold-500 uppercase font-black tracking-[0.2em] mb-2">Business Hours</div>
                <div className="text-xl font-bold text-white">Mon - Sat: 8am - 6pm</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full" />
            <div className="relative bg-white/5 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>
                  <div className="relative group">
                    <select className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer">
                      <option className="bg-slate-900">Select Service</option>
                      {BUSINESS_INFO.services.map(s => (
                        <option key={s.title} className="bg-slate-900">{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="relative group">
                    <textarea
                      rows={3}
                      placeholder="Project Details"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-black font-black uppercase tracking-[0.2em] py-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Request
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
