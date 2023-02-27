import { createContext } from "react";

export const totalItems = createContext({
  cartItem: 0,
  setCartItem: (val: number) => {},
});
