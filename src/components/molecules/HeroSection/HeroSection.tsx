import { IconsInfo, WrapHeroText, WrapImage, Wrapper } from "./Styles";
import principalImage from "../../../assets/principalImage.svg";

import cart2 from "../../../assets/icons/cart2.svg";
import clock from "../../../assets/icons/clock.svg";
import coffeeIcon from "../../../assets/icons/coffeeIcon.svg";
import packing from "../../../assets/icons/packing.svg";

import { IntroItems } from "../../atoms/IntroItems/IntroItems";

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
          <IntroItems icons={cart2} alt="Icone de carrinho">
            Compra simples e segura
          </IntroItems>
          <IntroItems icons={packing} alt="Icone de sacola">
            Embalagem mantém o café intacto
          </IntroItems>
          <IntroItems icons={clock} alt="Icone de relógio">
            Entrega rápida e rastreada
          </IntroItems>
          <IntroItems icons={coffeeIcon} alt="Icone de café">
            O café chega fresquinho até você
          </IntroItems>
        </IconsInfo>
      </WrapHeroText>

      <WrapImage>
        <img src={principalImage} alt="" />
      </WrapImage>
    </Wrapper>
  );
};
