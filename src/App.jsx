import NavBar from "./components/navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </div>
  );
};

export default App;
