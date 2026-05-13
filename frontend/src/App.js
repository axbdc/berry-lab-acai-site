import React from "react";
import "@/App.css";
import useReveal from "@/hooks/useReveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Benefits from "@/components/Benefits";
import Bowls from "@/components/Bowls";
import Toppings from "@/components/Toppings";
import Drinks from "@/components/Drinks";
import Sustainability from "@/components/Sustainability";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

function App() {
  useReveal();
  return (
    <div className="App" data-testid="app-root">
      <Header />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Benefits />
        <Bowls />
        <Toppings />
        <Drinks />
        <Sustainability />
        <Gallery />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
