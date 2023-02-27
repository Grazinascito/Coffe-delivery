import { IconsInfo, WrapHeroText, WrapImage, Wrapper } from "./Styles";
import principalImage from "../../../assets/principalImage.svg";

import cart2 from "../../../assets/icons/cart2.svg";
import clock from "../../../assets/icons/clock.svg";
import coffeeIcon from "../../../assets/icons/coffeeIcon.svg";
import packing from "../../../assets/icons/packing.svg";

import { IntroItems } from "../../atoms/IntroItems/IntroItems";

const introItemsContent = [
  {
    text: "Compra simples e segura",
    icon: cart2,
    altText: "Icone de carrinho",
  },
  {
    text: "Embalagem mantém o café intacto",
    icon: packing,
    altText: "Icone de sacola",
  },
  {
    text: "Entrega rápida e rastreada",
    icon: clock,
    altText: "Icone de relógio",
  },
  {
    text: "O café chega fresquinho até você",
    icon: coffeeIcon,
    altText: "Icone de café",
  },
];

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
          {introItemsContent.map((item) => {
            return (
              <IntroItems
                key={item.altText}
                icons={item.icon}
                alt={item.altText}
              >
                {item.text}
              </IntroItems>
            );
          })}
        </IconsInfo>
      </WrapHeroText>

      <WrapImage>
        <img src={principalImage} alt="" />
      </WrapImage>
    </Wrapper>
  );
};
