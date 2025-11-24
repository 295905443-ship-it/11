import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Destinations from './components/Destinations';
import Fleet from './components/Fleet';
import Camping from './components/Camping';
import AIPlanner from './components/AIPlanner';

const App: React.FC = () => {
  
  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-museum-bg min-h-screen text-museum-dark selection:bg-museum-accent selection:text-white">
      <Hero />
      <Philosophy />
      <Destinations />
      <Fleet />
      <Camping />
      <AIPlanner />
      
      {/* Footer */}
      <footer id="contact" className="bg-museum-dark text-white py-24 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
           <div className="md:col-span-2">
             <h2 className="font-serif text-4xl mb-6">Thousand</h2>
             <p className="text-gray-400 font-light max-w-sm mb-8">
               在自然的静谧中雕刻记忆。<br/>
               关东地区高端私人包车定制服务。
             </p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">IG</a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">WC</a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">LN</a>
             </div>
           </div>
           
           <div>
             <h4 className="uppercase tracking-widest text-xs mb-6 text-gray-500">导航</h4>
             <ul className="space-y-4 text-sm font-light">
               <li><a href="#destinations" className="hover:text-museum-accent transition-colors">目的地</a></li>
               <li><a href="#fleet" className="hover:text-museum-accent transition-colors">奢华车队</a></li>
               <li><a href="#camping" className="hover:text-museum-accent transition-colors">野奢露营</a></li>
               <li><a href="#curate" className="hover:text-museum-accent transition-colors">定制行程</a></li>
             </ul>
           </div>

           <div>
             <h4 className="uppercase tracking-widest text-xs mb-6 text-gray-500">联系我们</h4>
             <ul className="space-y-4 text-sm font-light text-gray-400">
               <li>hello@thousand-journeys.jp</li>
               <li>+81 90-1234-5678</li>
               <li>东京都港区</li>
             </ul>
           </div>
        </div>
        <div className="border-t border-white/10 mt-24 pt-8 text-center text-xs text-gray-600 uppercase tracking-widest">
           © 2024 Thousand Journeys. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;