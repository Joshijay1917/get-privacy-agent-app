import axios from 'axios'
import { Mail, User, Lock, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

type Inputs = {
    username: string
    password: string
    email: string
}

function Register() {
    const [isLoading, setIsLoading] = useState(false);
    const [registered, setRegistered] = useState<boolean>(false)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsLoading(true);
        const toastId = toast.loading("Creating your account...");

        try {
            // 1. Send data to your Backend
            const response = await axios.post("https://privacy-agent-backend.onrender.com/api/v1/users/register", data, {
                headers: { "Content-Type": "application/json" }
            });
            setRegistered(true)
            if (response.data.success) {
                toast.success("Registration successful!", { id: toastId });
                navigate("/auth");
            }
        } catch (error: any) {
            console.log(error);
            
            // 3. Handle specific Backend errors (e.g., User already exists)
            const errorMessage = error.response?.data?.message || "Something went wrong";
            toast.error(errorMessage, { id: toastId });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 ml-1">Username</label>
                <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Jayjoshi"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        {...register("username", { required: true })}
                    />
                </div>
            </div>

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

            {errors.username && <p>Username is required</p>}
            {errors.email && <p>Email is required</p>}
            {errors.password && <p>Password is required</p>}

            <button type='submit' className={`w-full ${registered ? 'bg-green-600' : 'bg-blue-600'} mt-4 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 ${registered ? 'hover:bg-green-700' : 'hover:bg-blue-700'} hover:-translate-y-0.5 transition flex items-center justify-center gap-2`}>
                {isLoading && <p>Registering...</p> }
                {!registered && <p className='flex items-center gap-1'>Create Account
                <ArrowRight className="w-5 h-5" /></p>}
                {registered && <p>Registered Successfully</p>}
            </button>
        </form>
    )
}

export default Register
