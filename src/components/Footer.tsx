import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <img
                src={BUSINESS_INFO.logo}
                alt={BUSINESS_INFO.name}
                className="w-12 h-12 rounded-full border border-gold-500/50"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-xl tracking-tight">
                CROWNLINE<span className="text-gold-500">CONSTRUCTION</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              Premium construction services specializing in underpinning, 
              waterproofing, and structural solutions across the GTA. 
              Quality work that stands the test of time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-slate-950 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-slate-950 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-500 hover:text-gold-500 transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-slate-500 hover:text-gold-500 transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-gold-500 transition-colors text-sm">Our Services</a></li>
              <li><a href="#projects" className="text-slate-500 hover:text-gold-500 transition-colors text-sm">Recent Projects</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-gold-500 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Services</h4>
            <ul className="space-y-4">
              {BUSINESS_INFO.services.slice(0, 5).map(s => (
                <li key={s.title}>
                  <a href="#services" className="text-slate-500 hover:text-gold-500 transition-colors text-sm">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Phone size={16} className="text-gold-500" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-gold-500 transition-colors">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Mail size={16} className="text-gold-500" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-gold-500 transition-colors">{BUSINESS_INFO.email}</a>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <MapPin size={16} className="text-gold-500" />
                <span>{BUSINESS_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs">
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
