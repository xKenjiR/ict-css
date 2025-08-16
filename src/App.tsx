import { useEffect } from "react";
import ADDS from "./components/ADDS";
import DCHP from "./components/DCHP";
import DNS from "./components/DNS";
import Header from "./components/Header";
import Cards from "./components/Hero/Cards";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <DCHP />
      <DNS />
      <ADDS />
    </>
  );
}

export default App;
