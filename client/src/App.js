import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Events from "./views/Events";
import Gallery from "./views/Gallery";
import Contact from "./views/Contact";
import Locations from "./views/Locations";
import EbMenu from "./views/EbMenu";
import StoreMenu from "./views/StoreMenu";
import MenuLanding from "./views/MenuLanding";
import EventsDT from "./views/EventsDT";
import EventsEB from "./views/EventsEB";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} default />
          <Route path="/menu/broad-street" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/downtown" element={<EventsDT />} />
          <Route path="/events/eb" element={<EventsEB />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/menu/east-brainerd" element={<EbMenu />} />
          <Route path="/menu/store-dab-bar" element={<StoreMenu />} />
          <Route path="/menu" element={<MenuLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
