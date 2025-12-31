import { useState, type FormEvent } from 'react';
import { Mail, Github, Send, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's talk about the future of <span className="text-blue-600">Privacy.</span>
          </h3>
          <p className="text-lg text-slate-600">
            Have questions about the Zero-Trace processing, local SQLite storage, or direct APK downloads? 
            Reach out directly to the developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side: Dev Info */}
          <div className="space-y-8">
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[url('/me.jpg')] bg-cover bg-center rounded-full flex items-center justify-center text-white">
                  {/* <Terminal size={24} /> */}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Joshi Jay</h4>
                  <p className="text-sm text-blue-600">@jayjoshi19</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail size={18} className="text-blue-500" />
                  <span className="text-sm">jayjoshi1912007@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Github size={18} className="text-blue-500" />
                  <span className="text-sm">github.com/Joshijay1917</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-600 rounded-3xl text-white">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Linkedin size={20} className="text-blue-200" />
                Linkdin
              </h4>
              <p className="text-slate-300 text-sm mb-6">
                Send me a connection request to message me directly.
              </p>
              <button onClick={() => window.open("https://www.linkedin.com/in/jayjoshi19", "_blank")} className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition">
                Go to profile
              </button>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-2 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className='text-left'>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div className='text-left'>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div className='text-left'>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition">
                  <option>Bug Report</option>
                  <option>Subscription Plans</option>
                  <option>Technical Question</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className='text-left'>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full md:w-auto px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition ${
                  status === 'success' ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {status === 'idle' && (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
                {status === 'sending' && "Sending..."}
                {status === 'success' && "Message Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;