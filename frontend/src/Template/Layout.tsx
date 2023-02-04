import { Outlet } from "react-router-dom";
import { Header } from "../components/molecules/Header/Header";
import { HeroSection } from "../components/molecules/HeroSection/HeroSection";
import { OurCoffees } from "../components/organism/OurCoffees/OurCoffees";
import { globalStyles } from "../styles/global";

export const Layout = () => {
  globalStyles();
  return (
    <>
      <Header />
      <HeroSection />
      <OurCoffees />
      <Outlet />
    </>
  );
};
