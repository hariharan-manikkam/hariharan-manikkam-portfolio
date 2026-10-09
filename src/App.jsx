import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Recognition from "./sections/Recognition";
import Development from "./sections/Development";
import Footer from "./components/Footer";


import "./App.css";

function App() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");

      if (!contactSection) return;

      const contactTop = contactSection.offsetTop;

      if (
        window.scrollY + window.innerHeight * 0.75 >=
        contactTop
      ) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <div className="app">


      <Navbar />

      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Development />
        <Education />
        <Recognition />
        <Contact />
      </main>

      <Footer />
      {/* FLOATING WHATSAPP BUTTON */}
      {showWhatsApp && (
        <a
          href="https://wa.me/916383468155?text=Hello%20Hariharan%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp"
          aria-label="Chat with me on WhatsApp"
        >
    

          <FaWhatsapp className="whatsapp-logo" />

          <span></span>

          {/* <span className="whatsapp-float-arrow">
            ↗
          </span> */}

        </a>
      )}

    </div>
  );
}

export default App;