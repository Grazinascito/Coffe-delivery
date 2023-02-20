import { globalCss, styled } from "@stitches/react";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  html: { fontSize: "62.5%" },
  body: { fontSize: "1.6rem", height: "100vh" },
});

export const GlobalWrapper = styled("div", {
  margin: "0 10rem",
  padding: "0"
});
