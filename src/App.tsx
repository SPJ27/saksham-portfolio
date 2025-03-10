import Navbar from "./components/Navbar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduction from "./components/Introduction.tsx";
import About from "./components/About.tsx";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Introduction />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<About />} />
          <Route path="/projects" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
