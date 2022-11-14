import { Cart } from "../../molecules/Header/Styles";
import shopping_cart_purple from "../../../assets/icons/shopping_cart_purple.svg";
import { Button, WrapButtons, Wrapper } from "./Styles";
import minusIcon from "../../../assets/minusplus/minus.svg";
import plusIcon from "../../../assets/minusplus/plus.svg";

export const AddToCart = () => {
  return (
    <Wrapper>
      <div>
        R$ <span>9,90</span>
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
