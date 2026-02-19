import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavBar from "./components/navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
    </div>
  );
};

export default App;
