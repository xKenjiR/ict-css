import DCHP from "./components/DCHP";
import DNS from "./components/DNS";
import Header from "./components/Header";
import Cards from "./components/Hero/Cards";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <DCHP />
      <DNS />
    </>
  );
}

export default App;
