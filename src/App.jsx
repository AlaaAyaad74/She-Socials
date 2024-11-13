import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowWeWork from "./components/pages/how-we-work/HowWeWork";
import Header from "./components/ui/header/Header";
import HomePage from "./components/pages/homepage/HomePage";
import Footer from "./components/ui/footer/Footer";
import About from "./components/pages/about/About";
import Packages from "./components/pages/packages/Packages";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonToTop from "./components/ui/buttonToTop/ButtonToTop";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  let scrollTimeout;

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      // Show the button if the scroll position is greater than 150vh
      if (window.pageYOffset > window.innerHeight * 1.5) {
        setShowScrollButton(true);

        // Clear any previous timeout to reset the 3-second timer
        clearTimeout(scrollTimeout);

        // Set a timeout to hide the button after 3 seconds
        scrollTimeout = setTimeout(() => {
          setShowScrollButton(false);
        }, 2000);
      } else {
        setShowScrollButton(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove event listener and timeout on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
      <Footer />
      {/* Conditional rendering for the scroll-to-top button */}
      {showScrollButton && <ButtonToTop scrollToTop={scrollToTop} />}
    </Router>
  );
}

export default App;
