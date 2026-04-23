import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MapPin, Beer, ShoppingBag, Calendar } from 'lucide-react';

// --- Components ---

const HeroSection = () => (
  <section className="relative h-screen w-full overflow-hidden bg-black">
    {/* Cinematic Background Video Placeholder */}
    <div className="absolute inset-0 opacity-60">
      <video 
        autoPlay loop muted playsInline 
        className="h-full w-full object-cover"
      >
        <source src="/brewery-cinematic.mp4" type="video/mp4" />
      </video>
    </div>
    
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-6xl font-black uppercase tracking-tighter text-white md:text-8xl"
      >
        Muddy River <span className="text-amber-500">2.0</span>
      </motion.h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-300">
        From the headwaters of the Susquehanna to your glass. 
        Experience farm-fresh craft in a whole new light.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="bg-amber-600 px-8 py-4 font-bold text-white transition-transform hover:scale-105">
          EXPLORE TAPS
        </button>
        <button className="border border-white px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black">
          OUR STORY
        </button>
      </div>
    </div>
  </section>
);

const BeerCard = ({ name, style, abv, color }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden bg-zinc-900 p-6 transition-all hover:shadow-2xl hover:shadow-amber-900/20"
  >
    <div className="flex justify-between items-start">
      <div className="h-12 w-1 bg-amber-500" />
      <span className="text-xs font-mono text-amber-500">{abv}% ABV</span>
    </div>
    <h3 className="mt-4 text-2xl font-bold text-white uppercase leading-none">{name}</h3>
    <p className="text-zinc-500 text-sm mt-1">{style}</p>
    <div className="mt-6 h-1 w-full bg-zinc-800">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        className="h-full bg-amber-700" 
      />
    </div>
  </motion.div>
);

// --- Main Page Structure ---

export default function BreweryWebsite() {
  const [activeLocation, setActiveLocation] = useState('unadilla');

  const beers = [
    { name: "Hellbender", style: "Cascadian Black IPA", abv: "6.9" },
    { name: "Delco", style: "Modern IPA", abv: "6.0" },
    { name: "Fundilla", style: "Session Pale Ale", abv: "5.5" },
    { name: "Susky Screamer", style: "Cream Ale", abv: "5.6" }
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100 selection:bg-amber-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-6 backdrop-blur-md">
        <div className="text-2xl font-bold tracking-widest uppercase">MUDDY RIVER</div>
        <div className="hidden space-x-8 text-sm font-medium uppercase tracking-widest md:flex">
          <a href="#" className="hover:text-amber-500 transition-colors">Taps</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Locations</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Events</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Shop</a>
        </div>
        <ShoppingBag className="h-6 w-6 cursor-pointer hover:text-amber-500" />
      </nav>

      <HeroSection />

      {/* Location Toggle - Diversity focus */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl font-bold uppercase italic">Fresh on Tap</h2>
            <p className="text-zinc-500 mt-2">Real-time inventory from our farm and taprooms.</p>
          </div>
          <div className="flex bg-zinc-900 p-1 rounded-full border border-zinc-800">
            {['unadilla', 'oneonta'].map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`px-8 py-2 rounded-full text-sm font-bold uppercase transition-all ${
                  activeLocation === loc ? 'bg-amber-600 text-white' : 'text-zinc-500'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beers.map((beer, i) => (
            <BeerCard key={i} {...beer} />
          ))}
        </div>
      </section>

      {/* Diversified Content Section */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-amber-600/20 blur-xl group-hover:bg-amber-600/30 transition-all" />
            <img 
              src="/brewery-event.jpg" 
              alt="Community" 
              className="relative grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
            />
          </div>
          <div className="space-y-6">
            <span className="text-amber-500 font-mono tracking-widest">02. DIVERSIFIED EVENTS</span>
            <h2 className="text-4xl font-bold uppercase">More than just a bar.</h2>
            <p className="text-zinc-400 text-lg">
              From Singo and Trivia to live music and local food trucks, we’ve created 
              a cultural hub in Oneonta and Unadilla. 
            </p>
            <button className="flex items-center gap-2 group font-bold border-b border-amber-600 pb-2">
              VIEW FULL CALENDAR <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 px-8 text-center text-zinc-600 text-sm">
        <p>© 2026 MUDDY RIVER FARM BREWERY — DESIGNED FOR THE HEADWATERS.</p>
      </footer>
    </div>
  );
}
