import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";
import PaystackIntegration from "./components/PaystackIntegration";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/paystack" element={<PaystackIntegration />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
