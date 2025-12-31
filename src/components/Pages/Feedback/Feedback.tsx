import React, { useState } from 'react';
import { Send, Star, ShieldCheck, MessageSquare } from 'lucide-react';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [hover, setHover] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In your project, this would send to your Node.js gateway
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto p-12 bg-blue-50 rounded-3xl text-center border border-blue-100 transition-all duration-500">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200">
          <ShieldCheck className="text-white" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600">Your feedback helps us improve the scrubPII utility and local memory features.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-blue-600 font-semibold text-sm hover:underline"
        >
          Send another response
        </button>
      </div>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-blue-600" />
            <h3 className="text-xl font-bold text-slate-900">App Feedback</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating Stars */}
            <div>
              <p className="text-sm font-medium text-slate-700 mb-3">How is your experience with the AI Agent?</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="transition-transform active:scale-90"
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                  >
                    <Star 
                      size={32} 
                      className={`${
                        star <= (hover || rating) 
                          ? 'fill-blue-500 text-blue-500' 
                          : 'text-slate-200'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Content */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 italic">
                What could we improve? (e.g., speed, UI, privacy logs)
              </label>
              <textarea 
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition min-h-[120px] text-slate-800"
                placeholder="Share your thoughts..."
              ></textarea>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest font-semibold pb-2">
              <ShieldCheck size={12} />
              Feedback is anonymized via your local ID
            </div>

            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200"
            >
              Submit Review
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;