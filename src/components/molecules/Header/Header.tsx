import { Wrapper, Location, Cart, WrapRightInfo } from "./Styles";
import logo from "../../../assets/logo.svg";
import map_pin_fill from "../../../assets/icons/map-pin-fill.svg";
import shopping_cart_fill from "../../../assets/icons/shopping-cart-fill.svg";

export const Header = () => {
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
        </Cart>
      </WrapRightInfo>
    </Wrapper>
  );
};
