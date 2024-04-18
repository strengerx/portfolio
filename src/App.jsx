import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import About from './sections/about/About'
import Hero from './sections/hero/Hero'

function App() {

  document.getElementById("root").classList.add("bg-slate-300")
  return (<>
    <Header />
    <Hero />
    <About />
    <Footer />
  </>)
}

export default App
