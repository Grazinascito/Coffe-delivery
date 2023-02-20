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
  id?: string;
  coffeeType?: string[];
  titleCard?: string;
  description?: string;
  img?: string;
  price?: number;
  handleFilteredCards?: Function;
}

export const CoffeeCard = ({ handleFilteredCards }: cardsProps) => {
  const filteredCards = handleFilteredCards?.();

  const renderCards = filteredCards.length > 0 ? filteredCards : cards;

  return (
    <Wrapper>
      {renderCards.map((item: cardsProps) => {
        return (
          <WrapperContent>
            <ImageCoffe src={item.img} alt={item.titleCard} />
            <ListCoffeeStyles>
              {item.coffeeType?.map((i) => (
                <CoffeeType>{i}</CoffeeType>
              ))}
            </ListCoffeeStyles>
            <h3>{item.titleCard}</h3>
            <Description>{item.description}</Description>
            <AddToCart price={!item.price ? 0 : item.price} />
          </WrapperContent>
        );
      })}
    </Wrapper>
  );
};
