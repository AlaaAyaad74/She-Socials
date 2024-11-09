import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowWeWork from "./components/pages/how-we-work/HowWeWork";
import Header from "./components/ui/header/Header";
import "aos/dist/aos.css";
import HomePage from "./components/pages/homepage/HomePage";
import { useEffect } from "react";
import AOS from "aos";
import Footer from "./components/ui/footer/Footer";
import About from "./components/pages/about/About";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global settings (can be overridden in individual components)
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
