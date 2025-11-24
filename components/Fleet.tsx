import React from 'react';

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 fade-in-section text-center md:text-left">
          <span className="text-museum-accent text-xs tracking-widest uppercase mb-4 block">Fleet & Service</span>
          <h3 className="font-serif text-4xl md:text-5xl text-museum-dark">陆地头等舱</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Main Image */}
          <div className="relative fade-in-section">
            <div className="aspect-[16/9] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1632245889029-e4179042d53d?q=80&w=2070&auto=format&fit=crop" 
                 alt="Luxury Van Exterior" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
               />
            </div>
            <p className="mt-4 text-xs tracking-widest text-museum-stone uppercase">Toyota Alphard Executive Lounge</p>
          </div>

          {/* Details */}
          <div className="space-y-12 fade-in-section">
             <div>
               <h4 className="font-serif text-2xl mb-4">极致舒适的移动空间</h4>
               <p className="text-museum-stone font-light leading-relaxed">
                 我们的车队选用顶配版 Toyota Alphard/Vellfire Executive Lounge。配备航空级独立座椅、宽敞的腿部空间以及卓越的隔音系统。无论是穿梭于东京的繁华，还是行驶在伊豆的海岸公路上，都能保证您如履平地的舒适体验。
               </p>
             </div>

             <div className="grid grid-cols-2 gap-8">
                <div className="border-t border-museum-stone/20 pt-4">
                  <h5 className="font-serif text-lg mb-2">尊享设施</h5>
                  <ul className="text-sm text-museum-stone font-light space-y-2">
                    <li>• Nappa 真皮航空座椅</li>
                    <li>• 车载 Wi-Fi & 充电接口</li>
                    <li>• 隐私玻璃与遮阳帘</li>
                    <li>• 高级音响系统</li>
                  </ul>
                </div>
                <div className="border-t border-museum-stone/20 pt-4">
                  <h5 className="font-serif text-lg mb-2">私人管家</h5>
                  <ul className="text-sm text-museum-stone font-light space-y-2">
                    <li>• 精通中日双语司机</li>
                    <li>• 全程行李协助</li>
                    <li>• 每日车内清洁消毒</li>
                    <li>• 依云矿泉水与时令茶点</li>
                  </ul>
                </div>
             </div>
          </div>
        </div>

        {/* Interior Feature Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 fade-in-section">
           <div className="relative h-64 md:h-80 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop" alt="Interior View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white tracking-widest font-serif text-lg">全景视野</span>
              </div>
           </div>
           <div className="relative h-64 md:h-80 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop" alt="Scenic Route" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white tracking-widest font-serif text-lg">沿途风景</span>
              </div>
           </div>
           <div className="relative h-64 md:h-80 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=2070&auto=format&fit=crop" alt="Premium Service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white tracking-widest font-serif text-lg">贴心服务</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;