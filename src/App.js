import About from "./components/About";
import Skills from "./components/Skills";
import GitHub from "./components/GitHub/GitHub";
import Contact from "./components/Contact";
// import Header from "./components/Header";
import Banner from "./components/Header/Banner";
import Navbar from "./components/Nav/Navbar";
import { GlobalStyle } from "./styles";
import Projects from "./components/Panel/Projects.js";

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Banner />
    {/* <Header /> */}
    <About />
    <Skills />
    <Projects />
    <GitHub />
    <Contact />
    </>
  );
}

export default App;
