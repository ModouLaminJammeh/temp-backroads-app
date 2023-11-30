import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Tours from "./components/Tours";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      <About></About>
      <Services></Services>
      <Tours></Tours>

      <Footer></Footer>
    </>
  );
}

export default App;
