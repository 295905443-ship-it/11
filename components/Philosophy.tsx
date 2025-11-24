import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-24 bg-museum-bg text-museum-dark">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading */}
        <div className="md:col-span-4 fade-in-section">
          <span className="block w-12 h-[1px] bg-museum-dark mb-6"></span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            慢旅的<br/>
            <span className="italic text-museum-stone">艺术</span>
          </h2>
        </div>

        {/* Right Column: Text */}
        <div className="md:col-span-8 flex flex-col gap-10 fade-in-section">
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl text-justify">
            我们相信，真正的奢华不仅在于目的地，更在于此时此刻的静谧。从镰仓的海岸线到富士山脚下的私密营地，我们的私人包车服务专为那些渴望暂停时间的旅行者设计。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-museum-stone font-light leading-loose tracking-wide">
            <div>
              <strong className="block text-museum-dark uppercase tracking-widest mb-2 text-xs">01. 专属定制 (Bespoke)</strong>
              每一条路线都是手工雕琢。无论是修善寺的隐秘旅馆，还是芦之湖的私人日出，我们为您呈现未曾被发现的风景。
            </div>
            <div>
              <strong className="block text-museum-dark uppercase tracking-widest mb-2 text-xs">02. 轻奢出行 (Light Luxury)</strong>
              舒适而不张扬，优雅而不做作。我们的车队是您在山海间穿行的移动庇护所，提供极致的私密与安宁。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;