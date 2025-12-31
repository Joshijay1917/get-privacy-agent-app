import { ShieldCheck, Cpu, Lock, Zap } from 'lucide-react';

const Workflow = () => {
  const steps = [
  {
    title: "Identity Protection",
    desc: "Your device generates a unique, anonymous ID. Your real name, email, and phone number never enter the chat stream.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Privacy-First Gateway",
    desc: "Requests pass through our Node.js bridge which strips away metadata and enforces strict daily energy limits via Redis.",
    icon: <Cpu className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Zero-Log Inference",
    desc: "Gemini 2.5 Flash processes your query in-memory. We never write your messages to a server-side database.",
    icon: <Lock className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Local Memory",
    desc: "The response is delivered directly to your device and saved in your local SQLite database. You own 100% of your history.",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
  },
];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">System Architecture</h2>
          <h3 className="text-4xl font-bold">How Privacy Agent Protects You</h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: The Image/Diagram */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-800 rounded-2xl border border-slate-700 p-2 shadow-2xl">
              <img 
                src="/workflow.png" 
                alt="Privacy Agent Architecture" 
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side: Step-by-Step Breakdown */}
          <div className="lg:w-1/2 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 relative">
                {/* Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-10 w-0.5 h-12 bg-slate-700"></div>
                )}
                
                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/10">
                  {step.icon}
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technical Footer Note */}
        <div className="mt-20 p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-center">
          <p className="text-blue-300 text-sm font-mono">
            Architecture optimized for: Expo-SQLite + Node.js Gateway + Gemini 2.5 Flash API
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;