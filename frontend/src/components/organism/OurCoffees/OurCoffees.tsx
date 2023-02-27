import { CoffeeCard } from "../../molecules/CoffeeCard/CoffeeCard";
import { Wrapper } from "./Styles";
interface OurCoffeesProps {
  handleFilteredCards: () => void;
}
export const OurCoffees = ({ handleFilteredCards }: OurCoffeesProps) => {
  return (
    <Wrapper>
      <CoffeeCard handleFilteredCards={handleFilteredCards} />
    </Wrapper>
  );
};
