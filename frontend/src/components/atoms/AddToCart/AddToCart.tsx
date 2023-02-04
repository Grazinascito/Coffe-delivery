import { Cart } from "../../molecules/Header/Styles";
import shopping_cart_purple from "../../../assets/icons/shopping_cart_purple.svg";
import { Button, WrapButtons, Wrapper } from "./Styles";
import minusIcon from "../../../assets/minusplus/minus.svg";
import plusIcon from "../../../assets/minusplus/plus.svg";

interface AddToCartProps {
  price: number;
}

export const AddToCart = ({ price }: AddToCartProps) => {
  return (
    <Wrapper>
      <div>
        R$ <span>{price}</span>
      </div>
      <WrapButtons>
        <Button>
          <img src={minusIcon} alt="Diminuir" />
          1
          <img src={plusIcon} alt="Aumentar" />
        </Button>
        <Cart color>
          <img src={shopping_cart_purple} alt="Ir para carrinho" />
        </Cart>
      </WrapButtons>
    </Wrapper>
  );
};
