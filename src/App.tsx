import React from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Residences from "./Components/Residences";
import Value from "./Components/Value";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feature />
      <Residences />
      <Value />
      <Contact />
    </div>
  );
}

export default App;
