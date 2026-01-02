import { ShieldCheck, Database, Cpu, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Data Collection",
      content: "Privacy Agent does not collect, store, or transmit your personal chat history to any external servers for training purposes. All conversations are processed in real-time.",
      icon: <ShieldCheck className="text-blue-600" size={24} />
    },
    {
      title: "2. Local Storage",
      content: "Your chat history and notification settings are stored locally on your device using an SQLite database. We have no access to this data.",
      icon: <Database className="text-blue-600" size={24} />
    },
    {
      title: "3. AI Processing",
      content: "Intelligence is powered by the Gemma 3 27B model and Gemini 2.5 models. While requests are sent to the model API to generate responses, no identifying user data is attached to these requests.",
      icon: <Cpu className="text-blue-600" size={24} />
    },
    {
      title: "4. Third Parties",
      content: "We do not sell, trade, or otherwise transfer your information to outside parties. Your data is yours.",
      icon: <Share2 className="text-blue-600" size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Navigation Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition mb-8 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-blue-600 font-medium text-sm mb-8">Last Updated: January 1, 2026</p>
          
          <div className="h-px bg-slate-100 w-full mb-10" />

          {/* Policy Sections */}
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
                  <p className="text-slate-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-slate-400 text-xs mt-8">
          © 2026 Privacy Agent. Built for absolute data sovereignty.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;