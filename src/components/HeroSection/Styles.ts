import { styled } from "@stitches/react";
import background from "../../assets/background.png";

export const Wrapper = styled("section", {
  height: "54.4rem",
  backgroundImage: `url(${background})`,
  padding: "9.4rem 9rem",
  display: "grid",
  gridTemplateColumns: "50% 50%",
  gap: "4rem",
});

export const WrapHeroText = styled("div", {
  h1: {
    fontSize: "$titleXL",
    fontFamily: "$baloo",
    color: "#272221",
    marginBottom: "1.6rem",
  },

  span: {
    fontSize: "$regularL",
    fontFamily: "$roboto",
    fontWeight: "400",
    color: "#403937",
  },
});

export const WrapImage = styled("div", {});

export const IconsInfo = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  marginTop: "6.7rem",
  gap: "2rem",

  div: {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",

    span: {
      color: "#574F4D",
      fontFamily: "$roboto",
      fontSize: "1.6rem",
    },
  },
});
