import axios from 'axios'
import { Mail, Lock, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

type Inputs = {
  email: string
  password: string
}

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const authcontext = useAuth()
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    const toastId = toast.loading("Logging you in...");

    try {
      // 1. Send Login Request
      const response = await axios.post("https://privacy-agent-backend.onrender.com/api/v1/users/login", data, {
        withCredentials: true, // Crucial for receiving Cookies
        headers: { "Content-Type": "application/json" }
      });

      if (response.data.success) {
        toast.success("Login successful!", { id: toastId });

        // 2. Extract context from URL (e.g., ?redirect=checkout or ?plan=pro)
        // This is how we know the user came from the 'Go Pro' button in the app
        // const urlParams = new URLSearchParams(window.location.search);
        // const planRequest = urlParams.get("plan");

        // if (planRequest === "pro") {
          // Send them to the payment page
          navigate("/Pricing");
        // } else {
          // Default dashboard or home
          // navigate("/");
        // }
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Invalid email or password";
      console.error(errorMessage)
      toast.error(errorMessage, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    console.log(authcontext.user);
    
    if(authcontext.user) {
      navigate('/Pricing')
    }
  }, [])
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1 ml-1">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            {...register("email", { required: true })}
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
            {...register("password", { required: true })}
          />
        </div>
      </div>

      {/* <div className="text-right">
        <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-700">Forgot Password?</a>
      </div> */}

      {errors.email && <p>Email is required</p>}
      {errors.password && <p>Password is required</p>}

      <button className="w-full bg-blue-600 mt-4 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition flex items-center justify-center gap-2">
        {isLoading ? <p>logging...</p> : <p className='flex items-center gap-1'>Sign In
          <ArrowRight className="w-5 h-5" /></p>}
      </button>
    </form>
  )
}

export default Login
