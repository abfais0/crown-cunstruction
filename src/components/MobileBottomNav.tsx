import { Phone, Mail, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
      <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full p-2 flex items-center justify-between shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-2 text-gold-500 hover:text-gold-400 transition-colors"
        >
          <Phone size={20} fill="currentColor" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Call</span>
        </a>
        <div className="w-px h-8 bg-white/10" />
        <a
          href="#quote"
          className="flex-1 flex flex-col items-center justify-center py-2 text-white hover:text-gold-500 transition-colors"
        >
          <MessageSquare size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Estimate</span>
        </a>
        <div className="w-px h-8 bg-white/10" />
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('toggle-chatbot'))}
          className="flex-1 flex flex-col items-center justify-center py-2 text-white hover:text-gold-500 transition-colors"
        >
          <MessageSquare size={20} className="text-gold-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Chat</span>
        </button>
      </div>
    </div>
  );
}
