import { styled } from "@stitches/react";
import background from "../../../assets/background.png";

export const Wrapper = styled("section", {
  padding: "5.2rem 16rem 0",
  display: "grid",
  gridTemplateColumns: "50% 50%",
  gap: "4rem",

  "&::before": {
    content: "",
    backgroundImage: `url(${background})`,
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    opacity: "0.7",
    height: "50.4rem",
  },
});

export const WrapHeroText = styled("div", {
  marginTop: "7rem",
  h1: {
    fontSize: "$titleXL",
    fontFamily: "$roboto",
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

export const WrapImage = styled("div", {
  marginTop: "7rem",
});

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
