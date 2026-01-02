import { track } from "@vercel/analytics";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Download } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate()
  const authcontext = useAuth()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleDownload = () => {
    setIsRedirecting(true);

    const FILEID = '12CeEpGVJjXydZcxiqxlx4BBkqJk7Zrbi'
    const driveUrl = `https://drive.google.com/uc?export=download&id=${FILEID}`;

    setTimeout(() => {
      window.open(driveUrl, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
    }, 1000);

    console.log("Redirecting to Google Drive for Privacy Agent APK...");
  };

  return (<>
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div onClick={() => setIsSidebarOpen(true)} className="w-8 h-8 bg-[url('/logo2.png')] bg-cover rounded-lg flex items-center justify-center">
              {/* <span className="text-white font-bold">P</span> */}
            </div>
            <span className="text-xl font-bold text-slate-800">PrivacyAgent</span>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="/" className="hover:text-blue-600 transition">Home</a>
            <a href="/Feedback" className="hover:text-blue-600 transition">Feedback</a>
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#about" className="hover:text-blue-600 transition">How it Works</a>
            <a href="/pricing" className="hover:text-blue-600 transition">Pricing</a>
            <a href="/contact" className="hover:text-blue-600 transition">Contact Dev</a>
          </div>

          <div className="flex gap-3">
            <button onClick={() => { track('APK_Download'); handleDownload() }} className="bg-blue-600 flex gap-2 justify-center items-center text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
              {isRedirecting ? (
                <>Connecting to Secure Server...</>
              ) : (
                <>
                  <Download size={20} />
                  Download APK
                </>
              )}
            </button>
            {authcontext.user === null && <button onClick={() => navigate('/auth')} className="bg-blue-600 hidden md:inline text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
              Log In
            </button>}
          </div>
        </div>

        {/* <div className="md:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2">
          <Menu size={28} className="text-slate-800" />
          </button>
          </div> */}
      </div>
    </nav>
    <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
  </>
  );
};

export default Navbar;