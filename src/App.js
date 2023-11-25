import './App.css';
import Header from './components/header';
import Galeri from './pages/galeri';
import Beranda from './pages/beranda';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={Beranda} />
        <Route path='/galeri' Component={Galeri} />
        {/* <Route path='/beranda' Component={Beranda} /> */}
        {/* <Route path='/beranda' Component={Beranda} /> */}
        {/* <Route path='/beranda' Component={Beranda} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
