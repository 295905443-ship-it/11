import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop" 
          alt="Torii Gate in Mist" 
          className="h-full w-full object-cover grayscale-[20%] brightness-75 scale-105 animate-pulse-slow"
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Navigation (Transparent) */}
      <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-6 md:px-16 text-white/90">
        <div className="font-serif text-2xl tracking-widest font-bold">Thousand</div>
        <div className="hidden md:flex gap-12 text-sm tracking-widest font-light">
          <a href="#destinations" className="hover:text-white transition-colors duration-300">目的地</a>
          <a href="#fleet" className="hover:text-white transition-colors duration-300">奢华车队</a>
          <a href="#camping" className="hover:text-white transition-colors duration-300">野奢露营</a>
          <a href="#curate" className="hover:text-white transition-colors duration-300">定制行程</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-xs md:text-sm tracking-[0.4em] mb-6 uppercase opacity-90">
          Curated Journeys
        </h2>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tighter leading-none">
          Thousand
        </h1>
        <div className="h-[1px] w-24 bg-white/50 mb-8"></div>
        <p className="max-w-xl text-sm md:text-base font-light tracking-wide leading-loose text-white/80">
          探索未见的风景。在日本的山川与市井之间，寻找内心的千种可能。<br/>
          <span className="text-xs opacity-70 mt-2 block font-sans">
            Explore the unseen. Between the mountains and the city, find a thousand possibilities within.
          </span>
        </p>

        <a href="#curate" className="mt-16 border border-white/30 px-8 py-4 text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 uppercase">
          开启旅程
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;