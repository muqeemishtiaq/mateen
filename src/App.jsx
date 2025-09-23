import Home from '../Home'
import AboutUs from './AboutUs'
import './App.css'
import Choose from './Choose'
import Contact from './Contact'
import Footer from './Footer'
import Mission from './Missiom'
import Navbar from './Navbar'
import Projects from './Projects'
import Services from './Services'
import Team from './Team'
import Vision from './Vision'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Mission/>
      <Vision/>
      <Choose/>
      <Projects/>
      <AboutUs/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
