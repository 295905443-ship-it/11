import React, { useState } from 'react';
import { generateLuxuryItinerary } from '../services/gemini';
import { GeneratedItinerary, ItineraryRequest } from '../types';

const AIPlanner: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedItinerary | null>(null);
  const [formData, setFormData] = useState<ItineraryRequest>({
    days: 3,
    guests: 2,
    interests: [],
    luxuryLevel: '豪华',
    includeCamping: false,
    vehicleType: 'Alphard Executive'
  });

  const interestsOptions = ['温泉', '艺术 & 美术馆', '自然徒步', '怀石料理', '历史古迹', '摄影'];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      }
      if (prev.interests.length < 3) {
        return { ...prev, interests: [...prev.interests, interest] };
      }
      return prev;
    });
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const itinerary = await generateLuxuryItinerary(formData);
      setResult(itinerary);
    } catch (e) {
      console.error(e);
      alert("生成行程失败，请重试。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="curate" className="py-24 bg-white border-t border-museum-dark/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 fade-in-section">
          <span className="text-museum-accent text-xs tracking-widest uppercase mb-4 block">AI Route Planner</span>
          <h3 className="font-serif text-4xl md:text-5xl text-museum-dark mb-6">私人行程定制</h3>
          <p className="text-museum-stone font-light max-w-xl mx-auto">
            设计您的完美旅程。告诉我们您的偏好，AI 礼宾将为您规划一条穿越关东秘境的专属路线。
          </p>
        </div>

        {!result ? (
          <div className="bg-museum-bg p-8 md:p-16 shadow-inner fade-in-section relative overflow-hidden">
             {loading && (
                <div className="absolute inset-0 z-20 bg-museum-bg flex flex-col items-center justify-center">
                   <div className="w-16 h-16 border-t-2 border-museum-accent rounded-full animate-spin mb-4"></div>
                   <p className="font-serif text-xl animate-pulse">正在为您规划旅程...</p>
                </div>
             )}

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                   <label className="block text-xs uppercase tracking-widest mb-4">旅行天数</label>
                   <div className="flex gap-4 mb-8">
                      {[1, 2, 3, 5, 7].map(d => (
                        <button 
                          key={d}
                          onClick={() => setFormData({...formData, days: d})}
                          className={`w-12 h-12 rounded-full border ${formData.days === d ? 'bg-museum-dark text-white border-museum-dark' : 'border-museum-stone text-museum-stone hover:border-museum-dark'} transition-all`}
                        >
                          {d}
                        </button>
                      ))}
                   </div>

                   <label className="block text-xs uppercase tracking-widest mb-4">出行人数</label>
                   <input 
                      type="range" 
                      min="1" 
                      max="6" 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                      className="w-full h-1 bg-museum-stone/30 rounded-lg appearance-none cursor-pointer accent-museum-dark mb-2"
                   />
                   <div className="text-right text-sm font-serif italic mb-8">{formData.guests} 人</div>

                   <label className="block text-xs uppercase tracking-widest mb-4">指定车型</label>
                   <select 
                     value={formData.vehicleType}
                     onChange={(e) => setFormData({...formData, vehicleType: e.target.value as any})}
                     className="w-full p-3 bg-white border border-museum-stone/30 text-museum-dark text-sm focus:outline-none focus:border-museum-dark transition-colors"
                   >
                     <option value="Alphard Executive">Alphard Executive (4-5人 舒适)</option>
                     <option value="HiAce Grand Cabin">HiAce Grand Cabin (6-9人 宽敞)</option>
                   </select>
                </div>

                <div>
                   <label className="block text-xs uppercase tracking-widest mb-4">兴趣 (最多选3项)</label>
                   <div className="flex flex-wrap gap-3 mb-8">
                      {interestsOptions.map(int => (
                         <button
                            key={int}
                            onClick={() => handleInterestToggle(int)}
                            className={`px-4 py-2 text-sm border ${formData.interests.includes(int) ? 'bg-museum-dark text-white border-museum-dark' : 'border-museum-stone/50 text-museum-stone hover:border-museum-dark'} transition-all`}
                         >
                            {int}
                         </button>
                      ))}
                   </div>

                   <div className="mb-8 flex items-center gap-4 p-4 border border-museum-stone/20 bg-white">
                      <input 
                        type="checkbox" 
                        id="camping"
                        checked={formData.includeCamping}
                        onChange={(e) => setFormData({...formData, includeCamping: e.target.checked})}
                        className="w-5 h-5 accent-museum-accent"
                      />
                      <label htmlFor="camping" className="text-sm cursor-pointer select-none">
                        <span className="block font-medium">加入露营体验</span>
                        <span className="text-xs text-museum-stone">包含全套 Snow Peak 装备与食材</span>
                      </label>
                   </div>
                   
                   <button 
                    onClick={handleGenerate}
                    disabled={formData.interests.length === 0}
                    className="w-full bg-museum-accent text-white py-4 uppercase tracking-[0.2em] hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                      生成行程方案
                   </button>
                </div>
             </div>
          </div>
        ) : (
          <div className="bg-white border border-museum-dark/10 p-8 md:p-12 shadow-2xl fade-in-section">
            <div className="flex justify-between items-start mb-8 border-b border-museum-dark/10 pb-8">
               <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-museum-dark mb-2">{result.title}</h2>
                  <p className="text-museum-stone font-light">{result.summary}</p>
               </div>
               <button onClick={() => setResult(null)} className="text-xs uppercase tracking-widest underline hover:text-museum-accent">
                 重置
               </button>
            </div>

            <div className="space-y-12">
               {result.days.map((day) => (
                  <div key={day.day} className="grid grid-cols-1 md:grid-cols-12 gap-8">
                     <div className="md:col-span-2">
                        <span className="text-5xl font-serif text-museum-bg font-bold stroke-black" style={{WebkitTextStroke: '1px #1A1A1A'}}>
                           0{day.day}
                        </span>
                     </div>
                     <div className="md:col-span-10 border-l border-museum-dark/10 pl-8">
                        <h4 className="text-xl font-serif mb-4">{day.title}</h4>
                        <div className="space-y-2 mb-4">
                           {day.activities.map((act, i) => (
                              <p key={i} className="text-museum-stone font-light flex items-center gap-2">
                                 <span className="w-1 h-1 bg-museum-accent rounded-full"></span>
                                 {act}
                              </p>
                           ))}
                        </div>
                        <p className="text-sm uppercase tracking-widest text-museum-dark">
                           <span className="text-museum-stone">住宿:</span> {day.stay}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="mt-12 text-center">
              <a href="#contact" className="inline-block border border-museum-dark px-12 py-4 uppercase tracking-[0.2em] hover:bg-museum-dark hover:text-white transition-all">
                预订此行程
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIPlanner;