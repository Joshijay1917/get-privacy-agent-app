const Features = () => {
  const features = [
  { 
    title: "Zero-Trace Processing", 
    desc: "Your queries are processed in memory and never written to a server-side database.", 
    icon: "🛡️" 
  },
  { 
    title: "Local-First Storage", 
    desc: "Full chat history stays in SQLite on your phone. We have zero access to your logs.", 
    icon: "💾" 
  },
  { 
    title: "Anonymized Identity", 
    desc: "We use a random device-level UUID. No email, name, or phone number required to chat.", 
    icon: "👤" 
  },
  { 
    title: "Gemini 2.5 Flash", 
    desc: "Blazing fast, state-of-the-art reasoning powered by Google's latest lightweight LLM.", 
    icon: "⚡" 
  },
];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Privacy without Compromise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition group">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features