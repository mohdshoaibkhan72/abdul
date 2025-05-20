import "./App.css";
import Navbar from "./components/NavbarJs/navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/products/shop";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
