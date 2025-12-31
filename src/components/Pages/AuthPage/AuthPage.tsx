import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import Login from './Login';
import Register from './Register';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [page, setPage] = useState<string>('login')

  useEffect(() => {
    setIsLogin(true)
  }, [])
  

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="w-full max-w-[450px] bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-white p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-200">
            <ShieldCheck className="text-white w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">
            {isLogin ? 'Welcome Back' : 'Join Privacy Agent'}
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            {isLogin 
              ? 'Your private AI sessions are waiting.' 
              : 'Start your journey with zero-knowledge AI.'}
          </p>
        </div>

        {/* Form */}
        {page === 'login' ? <Login /> : < Register />}

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="grow border-t border-slate-100"></div>
          <span className="px-4 text-xs text-slate-400 uppercase tracking-widest">Secure Access</span>
          <div className="grow border-t border-slate-100"></div>
        </div>

        {/* Switch Toggle */}
        <p className="text-center text-slate-600 text-sm">
          {page === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
          <button 
            onClick={() => setPage(page === 'login' ? 'register' : 'login')}
            className="text-blue-600 font-bold hover:underline"
          >
            {page === 'login' ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;