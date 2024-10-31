import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main className="bg-s1 w-full h-full">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
