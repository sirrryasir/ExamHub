import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Exams from "./components/Exams";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/exams" element={<Exams />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
