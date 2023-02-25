import About from "./components/About";
import GitHub from "./components/GitHub/GitHub";
import Contact from "./components/Contact";
// import Header from "./components/Header";
import Banner from "./components/Header/Banner";
import Navbar from "./components/Nav/Navbar";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Banner />
    {/* <Header /> */}
    <About />
    <GitHub />
    <Contact />
    </>
  );
}

export default App;
