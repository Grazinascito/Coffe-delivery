import { styled } from "@stitches/react";

export const Wrapper = styled("div", {
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  marginTop: "3.3rem",

  span: {
    fontFamily: "$roboto",
    fontSize: "2.4rem",
    fontWeight: "bold",
  },
});

export const WrapButtons = styled("div", {
  display: "flex",
});

export const Button = styled("button", {
  all: "unset",
  background: "$purpleLight",
  padding: ".8rem 1rem",
  marginRight: ".8rem",
  display: "flex",
  gap: ".5rem",
  fontFamily: "$roboto",
  borderRadius: ".6rem",

  img: {
    cursor: "pointer",
  },
});
