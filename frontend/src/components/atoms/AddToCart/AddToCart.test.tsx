import { render, screen } from "@testing-library/react";
import { AddToCart } from "./AddToCart";

describe("my test", () => {
  test("test", () => {
    render(<AddToCart price={10} />);
    expect(screen.getByText("R$")).toBeInTheDocument();

    screen.debug();
  });
});
