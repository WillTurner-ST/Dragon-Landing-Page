import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Events from "./views/Events";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} default />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/events" element={<Events />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
