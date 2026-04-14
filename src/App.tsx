/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import BeforeAfter from "./components/BeforeAfter";
import FreeQuote from "./components/FreeQuote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import ChatBot from "./components/ChatBot";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <FreeQuote />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <MobileBottomNav />
      <ChatBot />
    </div>
  );
}
