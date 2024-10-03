import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Footer from "./components/Footer/footer";
import Frenchise from "./pages/Frenchise/frenchise";
import Products from "./pages/ProductDetails/products";
import Checkout from "./pages/Checkout/checkout";
import CartItems from "./pages/AddtoCart/addToCart";
import Menu from "./pages/Menu/menu";
import Location from "./components/Location/location";

function App() {
  const location = useLocation();

  const shouldShowSidebar = location.pathname !== "/about" && location.pathname !== "/contact";

  return (
    <>
      <Navbar />
      {shouldShowSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/franchise" element={<Frenchise />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addtocart" element={<CartItems />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Location />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}