import { Wrapper, Location, Cart, WrapRightInfo, ItemCount } from "./Styles";
import logo from "../../../assets/logo.svg";
import map_pin_fill from "../../../assets/icons/map-pin-fill.svg";
import shopping_cart_fill from "../../../assets/icons/shopping-cart-fill.svg";
import { useContext } from "react";
import { totalItems } from "../../../context/context";

export const Header = () => {
  const { cartItem } = useContext(totalItems);
  return (
    <Wrapper>
      <img src={logo} alt="" />

      <WrapRightInfo>
        <Location>
          <img src={map_pin_fill} alt="" />
          Porto Alegre, RS
        </Location>
        <Cart>
          <img src={shopping_cart_fill} alt="" />
          <ItemCount>{cartItem}</ItemCount>
        </Cart>
      </WrapRightInfo>
    </Wrapper>
  );
};
