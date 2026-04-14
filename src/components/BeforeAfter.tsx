import { motion } from "motion/react";
import React, { useState } from "react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            Proven Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gold-500">Transformation</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            See the difference our professional waterproofing and underpinning services make. 
            From damp, unstable foundations to dry, reinforced living spaces.
          </p>
        </div>

        <div 
          className="relative aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80"
              alt="After"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 right-8 bg-gold-500 text-black px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest">After</div>
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&w=2000&q=80"
              alt="Before"
              className="w-full h-full object-cover grayscale brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest">Before</div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-gold-500 cursor-ew-resize"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shadow-2xl shadow-gold-500/50">
              <MoveHorizontal size={24} className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
