
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
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import MyReviews from './Pages/DashBoard/MyReviews';
import MyProfile from './Pages/DashBoard/MyProfile';
import AllUsers from './Pages/DashBoard/AllUsers';
import AddProducts from './Pages/DashBoard/AddProducts';
import ManageAllOrders from './Pages/DashBoard/ManageAllOrders';
import ManageProducts from './Pages/DashBoard/ManageProducts';
function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About></About>} />
        <Route path="/products/:productId" element={<RequireAuth><OrderDetails></OrderDetails></RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><DashBoard></DashBoard></RequireAuth>} >
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<MyReviews></MyReviews>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="allusers" element={<AllUsers></AllUsers>}></Route>
          <Route path="addproducts" element={<AddProducts></AddProducts>}></Route>
          <Route path="manageallorders" element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path="manageproducts" element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        <Route path="register" element={<Register></Register>} />
        <Route path="login" element={<Login></Login>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
