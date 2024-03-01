import React, { useContext, useState } from "react";
import CartContext from "../utils/CartContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Ecom = () => {
  const [proudct, setProduct] = useState([
    { name: "laptop", price: "5000" },
    { name: "Mobile", price: "3000" },
    { name: "TV", price: "4000" },
  ]);
  //   const { cartList, setCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const addToCart = (prod) => {
    // setCart([...cartList, prod]);
    dispatch(addItem(prod));
  };
  return (
    <div className="m-2">
      {proudct?.map((prod, index) => {
        return (
          <div
            className="m-2  h-28 bg-gray-500 w-48 p-2 rounded-md"
            key={index}
          >
            Name:{prod.name}
            <br />
            Price:{prod.price}
            <br />
            <button
              className="bg-green-300 text-white rounded-sm p-2"
              onClick={() => addToCart(prod)}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Ecom;
