import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import SingleProduct from "./Pages/SingleProduct";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./Pages/CartPage";
import Footer from "./Layout/Footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/contact"element={<Footer/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
