import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  html: { fontSize: "62.5%", fontFamily: "Roboto, sans-serif" },
  body: { fontSize: "1.6rem" },
});
