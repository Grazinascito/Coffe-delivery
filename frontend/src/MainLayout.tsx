import { totalItems } from "./context/context";
import { HeroSection } from "./components/molecules/HeroSection/HeroSection";
import { SearchBar } from "./components/molecules/SearchBar/SearchBar";
import { OurCoffees } from "./components/organism/OurCoffees/OurCoffees";
import { useState } from "react";
import { cards } from "./utils/CardData/cardData";
import { GlobalWrapper } from "./styles/global";

export const MainLayout = () => {
  const [value, setValue] = useState("");

  const handleFilteredCards = () => {
    const filteredCard = cards.filter((card) =>
      card.titleCard.toLowerCase().includes(value.toLowerCase())
    );
    return filteredCard;
  };

  return (
    <>
      <HeroSection />

      <GlobalWrapper>
        <SearchBar value={value} setValue={setValue} />
        <OurCoffees handleFilteredCards={handleFilteredCards} />
      </GlobalWrapper>
    </>
  );
};
