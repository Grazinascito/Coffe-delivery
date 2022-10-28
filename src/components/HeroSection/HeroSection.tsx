import { IconsInfo, WrapHeroText, WrapImage, Wrapper } from "./Styles";
import principalImage from "../../assets/principalImage.svg";
import cart2 from "../../assets/icons/cart2.svg";
import clock from "../../assets/icons/clock.svg";
import coffeeIcon from "../../assets/icons/coffeeIcon.svg";
import packing from "../../assets/icons/packing.svg";

export const HeroSection = () => {
  return (
    <Wrapper>
      <WrapHeroText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>

        <IconsInfo>
          <div>
            <img src={cart2} alt="" />
            <span>Compra simples e segura</span>
          </div>
          <div>
            <img src={packing} alt="" />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <img src={clock} alt="" />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <img src={coffeeIcon} alt="" />
            <span>O café chega fresquinho até você</span>
          </div>
        </IconsInfo>
      </WrapHeroText>

      <WrapImage>
        <img src={principalImage} alt="" />
      </WrapImage>
    </Wrapper>
  );
};
