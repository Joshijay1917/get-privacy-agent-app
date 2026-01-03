import { X, Home, Info, Shield, Mail, Download, Github, MessageSquare, Crown } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
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

  const menuItems = [
    { name: 'Home', icon: <Home size={20} />, href: '/' },
    { name: 'Feedback', icon: <MessageSquare size={20} />, href: '/Feedback' },
    { name: 'Features', icon: <Shield size={20} />, href: '#features' },
    { name: 'How it Works', icon: <Info size={20} />, href: '#about' },
    { name: 'Pricing', icon: <Crown size={20} />, href: '#about' },
    { name: 'Contact Dev', icon: <Mail size={20} />, href: '/contact' },
  ];

  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-60 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Panel */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white z-70 shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header inside Sidebar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <span className="font-bold text-blue-600">Privacy Agent</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-slate-100 rounded-full transition"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 p-4 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-xl transition"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 w-full p-6 border-t border-slate-100 bg-slate-50">
          <button onClick={() => handleDownload()} className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 mb-4">
            {isRedirecting ? (
                <>Connecting to Secure Server...</>
              ) : (
                <>
                  <Download size={20} />
                  Download APK
                </>
              )}
          </button>
          <a 
            href="https://github.com/Joshijay1917" 
            className="flex items-center justify-center gap-2 text-slate-500 text-sm hover:text-slate-800 transition"
          >
            <Github size={16} />
            View Source Code
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;