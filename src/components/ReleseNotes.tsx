import { Rocket, Sparkles, Bell, Paintbrush, Zap, ChevronRight } from 'lucide-react';

const ReleaseNotes = () => {
  const updates = [
    {
      icon: <Rocket className="text-blue-500" size={20} />,
      title: "Initial Public Release",
      desc: "The complete 'Privacy Agent' experience is live! Launching the full zero-knowledge suite."
    },
    {
      icon: <Sparkles className="text-purple-500" size={20} />,
      title: "Gemma 3 Integration",
      desc: "Powered by the latest 27B open-weights model for ultra-fast, intelligent reasoning."
    },
    {
      icon: <Bell className="text-orange-500" size={20} />,
      title: "Smart Reminders",
      desc: "One-tap reminder detection. The AI knows when you need a nudge and helps you set it."
    },
    {
      icon: <Paintbrush className="text-pink-500" size={20} />,
      title: "Theme Update",
      desc: "Fully optimized Light Mode UI designed for maximum readability and crisp aesthetics."
    },
    {
      icon: <Zap className="text-yellow-500" size={20} />,
      title: "Size Optimization",
      desc: "Removed unnecessary libraries. The APK is now leaner, faster, and more battery-efficient."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Version Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-lg font-bold border border-blue-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            Version 1.0.0 is Live
          </span>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">What's New</h2>
          <p className="text-slate-500 mt-2">Latest updates and improvements to Privacy Agent</p>
        </div>

        <div className="bg-slate-50 rounded-[2.5rem] p-4 md:p-8 border border-slate-200 shadow-sm">
          <div className="grid gap-6">
            {updates.map((update, index) => (
              <div 
                key={index} 
                className="flex items-start gap-5 p-4 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  {update.icon}
                </div>
                <div className="grow">
                  <h4 className="font-bold text-slate-900 flex items-center justify-between">
                    {update.title}
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {update.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social / Support Footer inside Release Notes */}
          <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 px-4 text-sm text-slate-400 font-medium">
            <p>Released on January 2, 2026</p>
            <div className="flex gap-4">
              <a href="/Feedback" className="hover:text-blue-600 transition">Feedback</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReleaseNotes;