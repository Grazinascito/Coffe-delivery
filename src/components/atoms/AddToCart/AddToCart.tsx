import { Cart } from "../../molecules/Header/Styles";
import shopping_cart_fill from "../../../assets/icons/shopping-cart-fill.svg";
import { WrapButtons, Wrapper } from "./Styles";
export const AddToCart = () => {
  return (
    <Wrapper>
      <span>R$ 9,90</span>
      <WrapButtons>
        <button>+ 1 -</button>
        <Cart>
          <img src={shopping_cart_fill} alt="" />
        </Cart>
      </WrapButtons>
    </Wrapper>
  );
};
