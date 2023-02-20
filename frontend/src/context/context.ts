import { createContext, useState } from "react";

export const totalItems = createContext({
  cartItem: 0,
  setCartItem: (val: number) => {},
});
