import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      {/* id="main-content" es el target del skip-link de accesibilidad (WCAG 2.4.1) */}
      <main id="main-content">
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
    </div>
  );
};

export default App;
