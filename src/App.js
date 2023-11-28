// import "./App.css";
import Galeri from "./pages/galeri";
import Beranda from "./pages/beranda";
import About from "./pages/about";
import Berita from "./pages/berita";
import Kontak from "./pages/kontak";
import BeritaDetail from "./pages/beritaDetail";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={Beranda} />
        <Route path="/galeri" Component={Galeri} />
        <Route path="/about" Component={About} />
        <Route path="/berita" Component={Berita} />
        <Route path="/beritaDetail" Component={BeritaDetail}/>
        <Route path="/kontak" Component={Kontak}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
