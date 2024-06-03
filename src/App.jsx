import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AI_MLandDataAnalytics from './pages/AI_MLandDataAnalytics'
import Blog from './pages/Blog';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Header/>
     <Routes>
     <Route path="/" element={<HomePage/>} />
     <Route path="/ai-ml-and-data-analytics" element={<AI_MLandDataAnalytics/>} />
     <Route path="/blog" element={ <Blog/>} />
     <Route path="/aboutus" element={<AboutUs/>}/>
     </Routes>
     <Footer/>
     </Router>
  )
}

export default App
