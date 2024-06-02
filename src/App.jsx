import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import AI_MLandDataAnalytics from './pages/AI_MLandDataAnalytics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Home/>
     <AI_MLandDataAnalytics/>
     
    </>
  )
}

export default App
