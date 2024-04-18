import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './sections/hero/Hero'

function App() {

  document.getElementById("root").classList.add("bg-slate-300")
  return (<>
    <Header />
    <Hero />
    <Footer />
  </>)
}

export default App
