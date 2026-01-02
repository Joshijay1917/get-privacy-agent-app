import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import axios from "axios"

function Alert({ onClose }: { onClose: () => void }) {
    const authcontext = useAuth()
    const navigate = useNavigate()

    const handleAlert = async (s: string) => {
        // 1. Log the interest to your backend (for your analytics)
        try {
            await axios.post('https://privacy-agent-backend.onrender.com/api/track-interest', {
                message: s,
                email: authcontext.user?.email
            });
            onClose()
        } catch (e) {
            console.error("Silent log failed", e);
        }
    }

    return (
        <div
            className="fixed inset-0 z-10000 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
            onClick={() => { }} // Closes if user clicks the dark background
        >
            <div
                className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all"
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the box
            >
                <div className="p-8 text-center">
                    {/* Icon/Visual Element */}
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                        <span className="text-3xl">🚀</span>
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Pro Version</h1>

                    <p className="text-blue-600 font-semibold mb-4 text-lg underline decoration-blue-200 decoration-2 underline-offset-4">
                        Coming Soon!
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
                        We are currently finalizing the Pro features to ensure maximum privacy and speed. {"\n\n"}
                        You'll be the first to know when it launches in the next update!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={() => handleAlert("can't wait")}
                            className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            Can't wait
                        </button>
                        {authcontext.user !== null ? <button
                            onClick={() => handleAlert('notify')}
                            className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
                        >
                            Notify me
                        </button>
                            : <button
                                onClick={() => {navigate('/auth'); onClose()}}
                                className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
                            >
                                Log In
                            </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert
