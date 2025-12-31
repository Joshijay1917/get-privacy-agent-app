import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import AuthPage from './components/Pages/AuthPage/AuthPage'
import ContactPage from './components/Pages/Contact/Contact'
import Pricing from './components/Pages/Pricing/Pricing'
import PrivacyPolicy from './components/Privacy/Privacy'
import Feedback from './components/Pages/Feedback/Feedback'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth' element={<AuthPage />}/>
      <Route path='/Contact' element={<ContactPage />}/>
      <Route path='/Pricing' element={<Pricing />}/>
      <Route path='/Feedback' element={<Feedback />}/>
      <Route path='/Privacy' element={<PrivacyPolicy />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
