import { styled } from "@stitches/react";

export const Wrapper = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem 16rem",
  width: "100%",
  position: "fixed",
  background: "white",
  zIndex: 999,
});

export const WrapRightInfo = styled("div", {
  display: "flex",
  gap: "12px",
  height: "4rem",
});

export const Location = styled("div", {
  display: "flex",
  alignItems: "center",
  background: "$purpleLight",
  width: "15.5rem",

  padding: "1rem .8rem",
  fontSize: "$regularS",
  borderRadius: "6px",
  gap: "0.7rem",
  color: "$purpleDark",

  img: {
    width: "25px",
  },
});

export const Cart = styled("button", {
  all: "unset",
  width: "3.8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$yellowLight",
  borderRadius: "6px",
  cursor: "pointer",
  position: "relative",

  variants: {
    color: {
      true: {
        backgroundColor: "$purpleDark",
      },
    },
  },
});

export const ItemCount = styled("div", {
  padding: "5px",
  width: "22px",
  height: "22px",
  borderRadius: "50%",
  position: "absolute",
  right: "-30%",
  top: "-15%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$yellowDark",
  color: "white",
  fontFamily: "$roboto",
  fontSize: "$regularS",
});
