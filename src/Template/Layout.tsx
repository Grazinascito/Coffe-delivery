import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { globalStyles } from "../styles/global";

export const Layout = () => {
  globalStyles();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
