import { styled } from "@stitches/react";

export const WrapperTitleInput = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "125rem",
  marginTop: "10rem",
});

export const InputWrapper = styled("div", {
  position: "relative",

  input: {
    width: "25.6rem",
    padding: "1.2rem",
    outline: "none",
    border: "1px solid rgb(169,169,169)",
    borderRadius: "4px",
  },
  svg: {
    position: "absolute",
    right: "8%",
    top: "12%",
  },
});
