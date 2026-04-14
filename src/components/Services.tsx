import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { BUSINESS_INFO } from "../constants";
import { cn } from "../lib/utils";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02] select-none">
        <div className="text-[30vw] md:text-[20vw] font-black leading-none whitespace-nowrap -rotate-12 translate-y-1/4">
          CROWNLINE CONSTRUCTION CROWNLINE
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest mb-6">
                Our Expertise
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
                Engineered <br />
                <span className="text-gold-500">Solutions.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We don't just build; we solve complex structural challenges with 
                precision engineering and high-end craftsmanship.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500">
                  <Icons.ShieldCheck size={24} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-slate-300">Certified Specialists</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {BUSINESS_INFO.services.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Construction;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-gold-500/50 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-8 group-hover:scale-110 transition-transform">
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gold-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
