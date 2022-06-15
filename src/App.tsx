import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "./App.css";
import Contact from "./Components/Contact";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Residences from "./Components/Residences";
import Value from "./Components/Value";
import Start from "./Components/Start";
import Footer from "./Components/Footer";
import { ThemeContext } from "./ContextAPI/ThemeContext";

function App() {
  const { darkmode } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      // mirror: true,
      offset: 120,
      duration: 2000,
    });
  }, []);

  return (
    <div className={darkmode ? "dark" : "App"}>
      <Header />
      <Hero />
      <Feature />
      <Residences />
      <Value />
      <Contact />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
