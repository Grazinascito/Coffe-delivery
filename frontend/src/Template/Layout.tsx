import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/molecules/Header/Header";
import { HeroSection } from "../components/molecules/HeroSection/HeroSection";
import { SearchBar } from "../components/molecules/SearchBar/SearchBar";
import { OurCoffees } from "../components/organism/OurCoffees/OurCoffees";
import { globalStyles, GlobalWrapper } from "../styles/global";
import { cards } from "../utils/CardData/cardData";
import { totalItems } from "../context/context";

export const Layout = () => {
  globalStyles();

  const [value, setValue] = useState("");

  const handleFilteredCards = () => {
    const filteredCard = cards.filter((card) =>
      card.titleCard.toLowerCase().includes(value.toLowerCase())
    );
    return filteredCard;
  };

  const [cartItem, setCartItem] = useState(0);

  return (
    <totalItems.Provider value={{ cartItem, setCartItem }}>
      <Header />
      <HeroSection />
      <GlobalWrapper>
        <SearchBar value={value} setValue={setValue} />
        <OurCoffees handleFilteredCards={handleFilteredCards} />
        <Outlet />
      </GlobalWrapper>
    </totalItems.Provider>
  );
};
