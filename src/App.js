
import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import NotFound from './Shared/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Payment from './Pages/DashBoard/Payment';
import MyportFolio from './Pages/MyPortfolio/MyportFolio';
import RequireAdmin from './User/RequireAdmin';
function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About></About>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="portfolio" element={<MyportFolio></MyportFolio>} />
        <Route path="/products/:productId" element={<RequireAuth><OrderDetails></OrderDetails></RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><DashBoard></DashBoard></RequireAuth>} >
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<MyReviews></MyReviews>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="allusers" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path="addproducts" element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
          <Route path="manageallorders" element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path="manageproducts" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>
        <Route path="register" element={<Register></Register>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
