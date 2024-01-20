import { Analytics } from "./components/Analytics";
import Cards from "./components/Card";
import { Contak } from "./components/Contak";
import Footer from "./components/footer";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Contak />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
