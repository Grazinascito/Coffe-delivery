import { styled } from "@stitches/react";

export const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "32px",
});

export const WrapperContent = styled("div", {
  width: "28rem",
  height: "32rem",
  background: "$gray",
  marginTop: "5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "6rem 2rem 2rem",
  borderRadius: "1.5rem 5rem",

  h3: {
    fontFamily: "$roboto",
    margin: "1.6rem 0",
  },
});

export const Description = styled("span", {
  fontFamily: "$roboto",
  color: "$grayFill",
});

export const ImageCoffe = styled("img", {
  margin: "-8.5rem auto 0",
  width: "12rem",
  textAlign: "center",
});

export const CoffeeType = styled("span", {
  background: "$yellowLight",
  borderRadius: "1rem",
  color: "$yellowDark",
  padding: ".4rem .8rem",
  fontFamily: "$roboto",
  fontWeight: "bold",
  fontSize: "$regularMini",
  margin: ".8rem 0 .8rem",
});

export const ListCoffeeStyles = styled("div", {
  display: "flex",
  gap: ".4rem",
});
