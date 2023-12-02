import Galeri from "./pages/galeri";
import Beranda from "./pages/beranda";
import About from "./pages/about";
import News from "./pages/news";
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
        <Route path="/news" Component={News} />
        <Route path="/beritaDetail" Component={BeritaDetail}/>
        <Route path="/kontak" Component={Kontak}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
