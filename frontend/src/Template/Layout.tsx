import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/molecules/Header/Header";
import { totalItems } from "../context/context";

export const Layout = () => {
  const [cartItem, setCartItem] = useState(0);

  return (
    <totalItems.Provider value={{ cartItem, setCartItem }}>
      <Header />
      <Outlet />
    </totalItems.Provider>
  );
};
