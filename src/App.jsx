import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import ToggleContextProvider from './context/ToggleContextProvider'
import About from './sections/about/About'
import Hero from './sections/hero/Hero'

function App() {

  const [toggle, setToggle] = useState(false)
  const toggleSideBar = () => {
    setToggle(!toggle)
  }

  document.getElementById("root").classList.add("bg-slate-200")


  return (<>
    <ToggleContextProvider.Provider value={{ toggle, toggleSideBar }}>
      <Header />
      <Hero />
      <About />
      <Footer />
      <Sidebar />
    </ToggleContextProvider.Provider>
  </>)
}

export default App
