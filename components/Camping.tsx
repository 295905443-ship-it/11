import React from 'react';

const Camping: React.FC = () => {
  return (
    <section id="camping" className="relative py-32 bg-museum-stone/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2 fade-in-section order-2 md:order-1">
             <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 border-t border-l border-museum-dark opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Luxury Camping" 
                  className="w-full h-[500px] object-cover shadow-xl"
                />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 border-b border-r border-museum-dark opacity-20"></div>
             </div>
          </div>

          <div className="w-full md:w-1/2 fade-in-section order-1 md:order-2">
            <h3 className="font-serif text-4xl md:text-6xl mb-8 text-museum-dark">
              野奢 <br/>
              <span className="text-museum-accent italic text-3xl md:text-5xl">露营体验</span>
            </h3>
            <p className="text-museum-stone text-lg font-light leading-relaxed mb-8">
              感受日本山野的原始之美，而不失舒适。我们的“Glamping”套餐包含全套 Snow Peak 顶级装备搭建、私人主厨 BBQ 服务，以及富士山脚或伊豆海边的私密营地选择。
            </p>
            
            <ul className="space-y-4">
               {[
                 "Snow Peak 顶级帐篷与装备",
                 "私人绝景营地 (富士山/伊豆)",
                 "严选和牛 BBQ 食材",
                 "附近温泉接送服务"
               ].map((item, i) => (
                 <li key={i} className="flex items-center text-museum-dark font-light tracking-wide border-b border-museum-dark/10 pb-2">
                   <span className="text-museum-accent mr-4">✦</span> {item}
                 </li>
               ))}
            </ul>

            <button className="mt-12 bg-museum-dark text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-museum-accent transition-colors duration-300">
              查看露营套餐
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Camping;