import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import AuthPage from './components/Pages/AuthPage/AuthPage'
import ContactPage from './components/Pages/Contact/Contact'
import Pricing from './components/Pages/Pricing/Pricing'
import PrivacyPolicy from './components/Pages/Privacy/Privacy'
import Feedback from './components/Pages/Feedback/Feedback'
import { AuthContext } from './context/AuthContext'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Alert from './components/Alert/Alert'

type User = {
  _id: string;
  email: string;
  plan: 'free' | 'pro';
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState<boolean>(false)

  const fetchUser = async () => {
    try {
      const { data } = await axios.post('https://privacy-agent-backend.onrender.com/api/v1/users/user', {}, { withCredentials: true });
      setUser(data.data);
      console.log(data);
    } catch (error) {
      console.error(error)
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const onClose = () => {
    setShowAlert(false)
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refreshUser: fetchUser, setShowAlert, showAlert }}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth' element={<AuthPage />}/>
      <Route path='/Contact' element={<ContactPage />}/>
      <Route path='/Pricing' element={<Pricing />}/>
      <Route path='/Feedback' element={<Feedback />}/>
      <Route path='/Privacy' element={<PrivacyPolicy />}/>
    </Routes>
    {showAlert && <Alert onClose={onClose}/>}
    <Footer />
    </AuthContext.Provider>
  )
}

export default App
