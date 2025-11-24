import React from 'react';
import { Location } from '../types';

const locations: Location[] = [
  {
    id: '1',
    name: 'Kamakura',
    jpName: '鎌倉',
    description: '历史与海洋交汇的古都。禅宗寺庙与湘南海岸线。',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop',
    tags: ['历史', '海景']
  },
  {
    id: '2',
    name: 'Hakone',
    jpName: '箱根',
    description: '隐于雾山的温泉乡。森林中的美术馆与黑玉子。',
    image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?q=80&w=1976&auto=format&fit=crop',
    tags: ['温泉', '艺术']
  },
  {
    id: '3',
    name: 'Mt. Fuji',
    jpName: '富士山',
    description: '永恒的灵峰。在圣山脚下体验私人露营与绝景。',
    image: 'https://images.unsplash.com/photo-1490806843928-846c1e16b480?q=80&w=2069&auto=format&fit=crop',
    tags: ['自然', '地标']
  },
  {
    id: '4',
    name: 'Higashi-Izu',
    jpName: '東伊豆',
    description: '崎岖的海岸线与无尽的地平线。世界边缘的驾驶体验。',
    image: 'https://images.unsplash.com/photo-1594953926084-3c6628b0561e?q=80&w=2070&auto=format&fit=crop',
    tags: ['海岸', '绝景']
  },
  {
    id: '5',
    name: 'Shuzenji',
    jpName: '修善寺',
    description: '伊豆的小京都。竹林小径与宁静的河流漫步。',
    image: 'https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?q=80&w=2065&auto=format&fit=crop',
    tags: ['文化', '竹林']
  },
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="bg-museum-bg text-museum-dark py-24">
      <div className="px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <span className="text-museum-accent text-xs tracking-widest uppercase mb-4 block">Route Map</span>
                <h3 className="font-serif text-3xl md:text-4xl italic">
                精选路线与目的地
                </h3>
            </div>
            <p className="max-w-md text-sm text-museum-stone font-light text-right mt-4 md:mt-0">
                从繁华都市到静谧山野，我们的服务覆盖关东全域。点击下方目的地，让 AI 为您规划专属路线。
            </p>
        </div>

        {/* Minimalist Route Visualization (Conceptual Map) */}
        <div className="w-full h-48 md:h-64 mb-16 relative border-t border-b border-museum-stone/20 overflow-hidden hidden md:block fade-in-section">
            <div className="absolute inset-0 flex items-center justify-around opacity-50">
               {/* Simplified connection lines */}
               <svg className="absolute top-0 left-0 w-full h-full" style={{zIndex: 0}}>
                  <path d="M 15% 50% Q 30% 20% 45% 50% T 75% 50%" stroke="#8C8C8C" strokeWidth="1" fill="none" strokeDasharray="5,5" />
               </svg>
               
               <div className="z-10 text-center transform translate-y-4">
                  <div className="w-3 h-3 bg-museum-dark rounded-full mx-auto mb-2"></div>
                  <span className="text-xs tracking-widest">TOKYO</span>
               </div>
               <div className="z-10 text-center transform -translate-y-8">
                  <div className="w-3 h-3 bg-museum-accent rounded-full mx-auto mb-2"></div>
                  <span className="text-xs tracking-widest">KAMAKURA</span>
               </div>
               <div className="z-10 text-center transform translate-y-8">
                  <div className="w-3 h-3 bg-museum-stone rounded-full mx-auto mb-2"></div>
                  <span className="text-xs tracking-widest">HAKONE</span>
               </div>
               <div className="z-10 text-center transform -translate-y-4">
                  <div className="w-3 h-3 bg-museum-dark rounded-full mx-auto mb-2"></div>
                  <span className="text-xs tracking-widest">FUJI</span>
               </div>
               <div className="z-10 text-center transform translate-y-12">
                  <div className="w-3 h-3 bg-museum-stone rounded-full mx-auto mb-2"></div>
                  <span className="text-xs tracking-widest">IZU</span>
               </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 auto-rows-fr">
          {locations.map((loc, index) => {
             // Create an asymmetric grid layout
             const isLarge = index === 0 || index === 3;
             const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
             
             return (
              <div key={loc.id} className={`${colSpan} group relative overflow-hidden cursor-pointer fade-in-section`}>
                <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] w-full overflow-hidden">
                   <img 
                      src={loc.image} 
                      alt={loc.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                   />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 transform md:translate-y-4 md:group-hover:translate-y-0">
                  <span className="text-xs tracking-[0.2em] uppercase border border-white/40 px-2 py-1 mb-2 inline-block backdrop-blur-sm">
                    {loc.jpName}
                  </span>
                  <h4 className="font-serif text-3xl mb-2">{loc.name}</h4>
                  <p className="text-sm font-light text-gray-200 line-clamp-2">
                    {loc.description}
                  </p>
                </div>
              </div>
             )
          })}
        </div>
      </div>
    </section>
  );
};

export default Destinations;