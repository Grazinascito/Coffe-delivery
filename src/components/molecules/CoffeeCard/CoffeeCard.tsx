import { AddToCart } from "../../atoms/AddToCart/AddToCart";
import {
  CoffeeType,
  Description,
  ImageCoffe,
  ListCoffeeStyles,
  Wrapper,
  WrapperContent,
} from "./Styles";
import { cards } from "../../../utils/CardData/cardData";

interface cardsProps {
  coffeeType: string[];
  titleCard: string;
  description: string;
  img: string;
}

export const CoffeeCard = () => {
  return (
    <Wrapper>
      {cards.map((items: cardsProps) => {
        return (
          <WrapperContent>
            <ImageCoffe src={items.img} alt={items.titleCard} />
            <ListCoffeeStyles>
              {items.coffeeType.map((i) => (
                <CoffeeType>{i}</CoffeeType>
              ))}
            </ListCoffeeStyles>
            <h3>{items.titleCard}</h3>
            <Description>{items.description}</Description>
            <AddToCart />
          </WrapperContent>
        );
      })}
    </Wrapper>
  );
};
