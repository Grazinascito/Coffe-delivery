import { Cart } from "../../molecules/Header/Styles";
import shopping_cart_purple from "../../../assets/icons/shopping_cart_purple.svg";
import { Button, WrapButtons, Wrapper } from "./Styles";
import minusIcon from "../../../assets/minusplus/minus.svg";
import plusIcon from "../../../assets/minusplus/plus.svg";
import { useContext, useEffect, useState } from "react";
import { totalItems } from "../../../context/context";

interface AddToCartProps {
  price: number;
  handleAddToCart?: () => void;
}

export const AddToCart = ({ price }: AddToCartProps) => {
  const { cartItem, setCartItem } = useContext(totalItems);

  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCartItem(count + cartItem);
     //TODO: Unit Test localStorage 
    if (cartItem !== null) {
      localStorage.setItem("cartItem", (count + cartItem).toString());
    }

    setCount(0);
  };

  useEffect(() => {
    const savedItems = localStorage.getItem("cartItem");
    if (cartItem !== null && savedItems !== null) {
      setCartItem(parseInt(savedItems!));
    }
  }, []);

  const decreaseOnlyPositiveNumbers = count > 0;
  return (
    <Wrapper>
      <div>
        R$ <span>{price}</span>
      </div>
      <WrapButtons>
        <Button>
          <img
            src={minusIcon}
            alt="Diminuir"
            onClick={() => decreaseOnlyPositiveNumbers && setCount(count - 1)}
          />
          {count}
          <img
            src={plusIcon}
            alt="Aumentar"
            onClick={() => setCount(count + 1)}
          />
        </Button>
        <Cart color data-testid="add-to-cart">
          <img
            src={shopping_cart_purple}
            alt="Ir para carrinho"
            onClick={handleAddToCart}
          />
        </Cart>
      </WrapButtons>
    </Wrapper>
  );
};
