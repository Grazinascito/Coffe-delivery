import { CoffeeCard } from "../../molecules/CoffeeCard/CoffeeCard";
import { Wrapper } from "./Styles";

export const OurCoffees = ({ handleFilteredCards }: (any)) => {
  return (
    <Wrapper>
      <CoffeeCard handleFilteredCards={handleFilteredCards} />
    </Wrapper>
  );
};
