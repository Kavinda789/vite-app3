import React from "react";
import Navbar from "./assets/Components/Navbar/Navbar";
import Hero from "./assets/Components/Hero/Hero";
import Menus from "./assets/Components/Menus/Menus";
import Banners from "./assets/Components/Banners/Banners";
import Banners2 from "./assets/Components/Banners/Banners2";
import Banners3 from "./assets/Components/Banners/Banners3";
import Footer from "./assets/Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menus />
      <Banners />
      <Banners2 />
      <Banners3 />
      <Footer/>
    </div>
  );
}

export default App;
