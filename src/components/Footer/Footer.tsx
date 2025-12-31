const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          © 2025 Privacy Agent. Built with React Native & Gemini Flash.
        </div>
        <div className="flex gap-6 text-slate-400 text-sm">
          <a href="/Privacy" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Documentation</a>
          <a href="https://github.com/Joshijay1917" className="hover:text-blue-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer