import { Mail, Lock, ArrowRight } from 'lucide-react'

function Login() {
  return (
    <form>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1 ml-1">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1 ml-1">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <input
            type="password"
            placeholder="••••••••"
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>
      </div>

        <div className="text-right">
          <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-700">Forgot Password?</a>
        </div>

      <button className="w-full bg-blue-600 mt-4 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition flex items-center justify-center gap-2">
        Sign In
        <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  )
}

export default Login
