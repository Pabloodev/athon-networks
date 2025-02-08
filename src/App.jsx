// Layout
// UI / Components Imports
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";

// Import Pages
import Home from './pages/Home'
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <FAQ />
      <Footer />
    </>
  );
}
