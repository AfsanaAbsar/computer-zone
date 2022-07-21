
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import About from './Pages/About/About';
import Register from './User/Register';
import Login from './User/Login';
import OrderDetails from './Pages/Home/OrderDetails';
import RequireAuth from './User/RequireAuth';
function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About></About>} />
        <Route path="/products/:productId" element={<RequireAuth><OrderDetails></OrderDetails></RequireAuth>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="login" element={<Login></Login>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
