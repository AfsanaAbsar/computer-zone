
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import About from './Pages/About/About';
function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About></About>} />
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
