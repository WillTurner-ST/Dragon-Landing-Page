import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Events from "./views/Events";
import Gallery from "./views/Gallery";
import Contact from "./views/Contact";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} default />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
