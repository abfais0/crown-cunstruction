import { motion } from "motion/react";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center pt-24 md:pt-20 overflow-hidden bg-[#050505]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        
        {/* Diagonal Gold Overlays matching reference */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gold-500/20 skew-x-[25deg] transform translate-x-1/4" />
          <div className="absolute top-0 right-0 w-[40%] h-full bg-gold-500/10 skew-x-[25deg] transform translate-x-1/2" />
          <div className="absolute top-0 right-[10%] w-[15%] h-full bg-gold-500/30 skew-x-[25deg]" />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-12 md:py-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 md:mb-6"
          >
            <div className="h-[2px] w-8 md:w-12 bg-gold-500" />
            <span className="text-gold-500 font-bold uppercase tracking-[0.3em] text-[8px] md:text-xs">
              Excellence in Construction
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-6xl md:text-8xl font-bold leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 text-white"
          >
            Premium Construction. <br />
            <span className="text-gold-500">Built to Last.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-xl mb-8 md:mb-12 leading-relaxed font-light"
          >
            Trust Crownline Construction for top-quality work that stands the test of time. 
            Specializing in foundation repair and structural integrity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6"
          >
            <a
              href="#quote"
              className="group relative flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-black px-8 py-4 md:px-10 md:py-5 font-bold text-base md:text-lg transition-all overflow-hidden"
            >
              <span className="relative z-10">Get Free Estimate</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </a>

            {/* Phone Box matching reference */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gold-500/20 blur-xl group-hover:bg-gold-500/30 transition-all" />
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="relative flex items-center gap-3 sm:gap-4 bg-black/80 border-l-4 border-gold-500 px-4 py-3 sm:px-8 sm:py-4 backdrop-blur-md"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold-500 flex items-center justify-center text-black flex-shrink-0">
                  <Phone size={16} className="sm:w-5 sm:h-5" fill="currentColor" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] text-gold-500 uppercase font-black tracking-[0.2em]">Call Now</div>
                  <div className="text-base sm:text-2xl font-bold text-white whitespace-nowrap">{BUSINESS_INFO.phone}</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Features Bar */}
      <div className="relative md:absolute bottom-0 left-0 right-0 z-30 bg-black/40 backdrop-blur-md border-t border-white/5 py-6 md:py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:flex md:flex-wrap justify-center md:justify-between gap-y-4 gap-x-4 md:gap-8">
          {[
            { icon: ShieldCheck, text: "Licensed & Insured" },
            { icon: ShieldCheck, text: "GTA Wide Service" },
            { icon: ShieldCheck, text: "Free Site Inspection" },
            { icon: ShieldCheck, text: "Structural Warranty" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-3">
              <item.icon size={16} className="text-gold-500 flex-shrink-0 md:w-[18px] md:h-[18px]" />
              <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-slate-400 leading-tight">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
