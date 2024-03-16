import './Styles/App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Contact from "./Contact";
import Home from "./Home";
import Errorpage from './Errorpage';
import Login from "./Login";
import Shop from "./Shop";
import Admin from './Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Errorpage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
