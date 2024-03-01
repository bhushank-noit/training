import React, { useContext } from "react";
import CartContext from "../utils/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

export const Navbar = () => {
  // const { cartList } = useContext(CartContext);
  const cartList = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const clearCartitems = () => {
    dispatch(clearCart([]));
  };
  return (
    <div className="m-2 flex pr-4 bg-red-400 h-12 justify-end text-lg text-white">
      <button className="bg-gray-500 m-1 p-1" onClick={clearCartitems}>
        Clear Cart
      </button>
      Cart {cartList.length}
    </div>
  );
};

export default Navbar;
