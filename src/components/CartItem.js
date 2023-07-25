import React from "react";

import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, name, image, price, amount }) => {
  const { setDecrease, setIncrease, removeItem } = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format(price / 100)}
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format((price * amount) / 100)}
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
