import { Routes, Route } from "react-router-dom";

import Navbarcomponent from "./components/NavbarComponent";
import Footercompontent from "./components/FooterComponent";

import FaqPage from "./pages/FaqPage.";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import SyaratKetentuan from "./pages/SyaratKetentuanPage";
import TestimonialPage from "./pages/TestimonialPage";

function App() {
  return (
    <div>
      <Navbarcomponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelaspage" Component={KelasPage} />
        <Route path="/testimonialpage" Component={TestimonialPage} />
        <Route path="/faqpage" Component={FaqPage} />
        <Route path="/syaratketentuan" Component={SyaratKetentuan} />
      </Routes>

      <Footercompontent />
    </div>
  );
}

export default App;
