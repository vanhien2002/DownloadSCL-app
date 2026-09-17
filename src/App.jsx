import "./App.css";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
