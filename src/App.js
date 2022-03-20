import "./App.css";
import About from "./components/Page/Home/About";
import Home from "./components/Page/Home/Home";
import Showcase from "./components/Page/Home/Showcase";
import AppBar from "./components/Shared/AppBar";
import Contact from "./components/Shared/Contact";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Home />
      <About />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
