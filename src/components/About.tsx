import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Clock, Award, ArrowRight } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      desc: "Full liability coverage and WSIB for your peace of mind."
    },
    {
      icon: Clock,
      title: "On-Time Completion",
      desc: "We respect your time and stick to strict project timelines."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      desc: "We stand behind our work with industry-leading warranties."
    },
    {
      icon: CheckCircle2,
      title: "Free Estimates",
      desc: "No-obligation site visits and detailed project quotes."
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="Construction Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Floating Stat */}
              <div className="absolute bottom-10 left-10 right-10 glass-panel p-8 rounded-3xl">
                <div className="text-5xl font-bold text-gold-500 mb-2">15+</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Years of Structural Excellence</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold-500/10 blur-3xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest mb-6">
              Our Story
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              Building on <br />
              <span className="text-gold-500 text-gradient-gold">Integrity.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              At Crownline Construction, we believe that a strong foundation is the 
              key to a lasting legacy. For over 15 years, we've been Toronto's 
              trusted partner for complex structural repairs and high-end construction.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {features.map((item, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-gold-500 font-bold uppercase tracking-[0.2em] group"
            >
              Learn More About Our Process
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
