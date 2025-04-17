import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
