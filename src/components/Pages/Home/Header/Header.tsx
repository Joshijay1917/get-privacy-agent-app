import { track } from "@vercel/analytics";
import { Download } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

const Header = () => {
  const navigate = useNavigate()
  const authcontext = useAuth()
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleDownload = () => {
    setIsRedirecting(true);

    const githubReleaseUrl = 'https://github.com/Joshijay1917/get-privacy-agent-app/releases/download/1.0.0/privacy-agent-v1.apk';

    setTimeout(() => {
      window.open(githubReleaseUrl, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
    }, 1000);

    console.log("Redirecting to GitHub for Privacy Agent APK download...");
  };

  return (
    <header id="home" className="pt-32 pb-16 px-4 bg-linear-to-b from-blue-100 to-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Content */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Your AI Companion, <br />
            <span className="text-blue-600">On Device Memory</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-lg">
            Experience Gemini 2.5 Flash with total anonymity. We store LLM Memory On Your Device Locally.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => { track('APK_Download'); handleDownload() }} className="px-8 py-4 bg-blue-600 gap-2 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:scale-105 transition">
              {isRedirecting ? (
                <>Connecting to Secure Server...</>
              ) : (
                <p className="flex justify-center items-center gap-2">
                  <Download size={20} />
                  Download APK
                </p>
              )}
            </button>
            {authcontext.user === null && <button onClick={() => navigate('/auth')} className="px-8 py-4 border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition">
              Log In
            </button>}
          </div>
          {/* <p className="mt-4 text-sm text-slate-400 font-mono italic">Launch Date: Jan 1, 2026</p> */}
        </div>

        {/* Right Side: App Mockup */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-68 h-[590px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
            {/* Inner Screen Mockup */}
            <div className="bg-[url('/homepage.png')] bg-bottom bg-cover h-full p-4">
              {/* <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 italic text-[10px] flex items-center justify-center">AI</div>
                <div className="h-2 w-20 bg-slate-100 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-8 w-3/4 bg-blue-50 rounded-lg ml-auto"></div>
                <div className="h-12 w-full bg-slate-50 rounded-lg"></div>
                <div className="h-8 w-2/3 bg-blue-50 rounded-lg ml-auto"></div>
              </div> */}
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -z-10 w-72 h-72 bg-blue-400/20 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;