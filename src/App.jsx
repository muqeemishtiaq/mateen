import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Home';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import Choose from './Choose';
import Footer from './Footer';
import Mission from './Missiom';
import Navbar from './Navbar';
import Projects from './Projects';
import Team from './Team';
import Vision from './Vision';

// Service Pages
import Civil from './services/Civil';
import Electrical from './services/Electrical';
import Mechanical from './services/Mechanical';
import Lpg from './services/Lpg';
import ScrollToTop from './ScrollToTop';
// Optional: Scroll to top on route change


function App() {
  return (
    <Router>
        <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Home Page with all sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Mission />
              <Vision />
              <Choose />
              <Projects />
              <AboutUs />
              <Team />
              <Contact />
            </>
          }
        />

        {/* Static Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* Separate Service Pages */}
        <Route path="/civil" element={<Civil />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/lpg" element={<Lpg />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
