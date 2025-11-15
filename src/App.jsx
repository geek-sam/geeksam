import "./App.css";
import "animate.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollRestoration from "./components/ScrollRestoration";
import ProjectDetails from "./pages/ProjectDetails";
// import ParticlesBackground from "./components/ParticlesBackground";

const App = () => {
  const [theme, setTheme] = useState("darkTheme");

  const toggleTheme = () => {
    theme === "darkTheme" ? setTheme("lightTheme") : setTheme("darkTheme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <ScrollRestoration />
      {/* <ParticlesBackground theme={theme} /> */}
      <Header theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} />
      <Routes>
        <Route exact path="/" element={<Home theme={theme} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/details" element={<ProjectDetails />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<h2>Hum pe toh hai hi ni?</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
