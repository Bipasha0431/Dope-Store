import { useState } from "react";
import styled from "styled-components";

import CartAmountToggle from "./CartAmountToggle";

import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, stock } = product;

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Wrapper>
      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <Button onClick={() => addToCart(id, amount, product)}>
        <Button className="btn">Add To Cart</Button>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;
