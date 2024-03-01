import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import CartContext from "../utils/CartContext";
import { Provider } from "react-redux";
import store from "../utils/store";

const Home = () => {
  const cartData = useContext(CartContext);
  const [cartList, setCart] = useState(cartData);
  return (
    <>
      {/* <CartContext.Provider value={{ cartList, setCart }}> */}
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
      {/* </CartContext.Provider> */}
    </>
  );
};

export default Home;
