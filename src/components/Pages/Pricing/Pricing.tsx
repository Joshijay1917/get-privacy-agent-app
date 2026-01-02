import { Check, Shield, Crown } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

const Pricing = () => {
  const authcontext = useAuth()
  const plans = [
    {
      name: "Free Tier",
      price: "0",
      description: "Perfect for testing the privacy layer and basic AI chat.",
      features: [
        "20 Daily Requests (Capped)",
        "Gemini 2.5 Flash/Lite Model",
        "25 Messages History Limit",
        "1 month memory",
        "Schedule Notification",
        "Local SQLite Storage"
      ],
      buttonText: "Current Plan",
      highlight: false,
      icon: <Shield className="text-slate-400" size={24} />
    },
    {
      name: "Pro Agent",
      price: "4.99",
      description: "For power users requiring deep memory and superior logic.",
      features: [
        "Unlimited Daily Requests",
        "Gemini Pro / Ultra Models",
        "100+ Messages (Full Ledger)",
        "Priority Node.js Gateway",
        "Custom Live Real Time Data Notifications",
        "Early access to APK updates"
      ],
      buttonText: "Upgrade to Pro",
      highlight: true,
      icon: <Crown className="text-blue-600" size={24} />
    }
  ];

  const handleUpgradeClick = async () => {
    authcontext.setShowAlert(true)
  };

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-tight uppercase text-sm mb-3">Pricing</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Choose Your Privacy Level</h3>
          <p className="text-slate-500 max-w-xl mx-auto">
            All plans include our zero-knowledge encryption. Upgrade for higher model intelligence and expanded local memory.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${plan.highlight
                  ? 'border-blue-600 shadow-2xl shadow-blue-100 scale-105 z-10'
                  : 'border-slate-200 hover:border-blue-200'
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                  Recommended
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="mb-2">{plan.icon}</div>
                  <h4 className="text-2xl font-bold text-slate-900">{plan.name}</h4>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
                  <span className="text-slate-500 block text-sm">/ month</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className={`shrink-0 w-5 h-5 ${plan.highlight ? 'text-blue-600' : 'text-slate-400'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button onClick={() => plan.name === 'Pro Agent' ? handleUpgradeClick() : ''} className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Footer */}
        <p className="mt-12 text-center text-slate-400 text-xs italic">
          * Fair use policy applies to Pro models to prevent API abuse. Payments handled via encrypted gateway.
        </p>
      </div>
    </section>
  );
};

export default Pricing;