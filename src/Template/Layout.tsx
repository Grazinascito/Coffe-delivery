import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { globalStyles } from "../styles/global";

export const Layout = () => {
  globalStyles();
  return (
    <>
      <Header />
      <HeroSection />
      <Outlet />
    </>
  );
};
