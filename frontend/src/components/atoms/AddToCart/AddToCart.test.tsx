import {
  fireEvent,
  getByAltText,
  render,
  screen,
  within,
} from "@testing-library/react";
import "jest-localstorage-mock";
import { AddToCart } from "./AddToCart";
import userEvent from "@testing-library/user-event";
import { Cart } from "../../molecules/Header/Styles";

describe("AddToCart", () => {
  test("test", () => {
    render(<AddToCart price={10} />);
    expect(screen.getByText("R$")).toBeInTheDocument();
  });

  test("increment when button clicked", async () => {
    const user = userEvent.setup();
    render(<AddToCart price={10} />);

    expect(screen.getByText("0")).toHaveTextContent("0");
    await user.click(screen.getByAltText("Aumentar"));

    expect(screen.getByText("1")).toHaveTextContent("1");
  });

  test("decrement when button clicked but only if count is greater than 0", async () => {
    const user = userEvent.setup();
    render(<AddToCart price={10} />);
    await user.click(screen.getByAltText("Aumentar"));

    expect(screen.getByText("1")).toHaveTextContent("1");
    await user.click(screen.getByAltText("Diminuir"));

    expect(screen.getByText("0")).toHaveTextContent("0");
  });

  const handleAddToCart = jest.fn();
  test.only("add to cart", () => {
    const user = userEvent.setup();
    render(
      <Cart color data-testid="add-to-cart">
        <img src={"img"} alt="Ir para carrinho" onClick={handleAddToCart} />
      </Cart>
    );
    const getButton = screen.getByTestId("add-to-cart");
    const cartImg = within(getButton).getByAltText("Ir para carrinho");
    fireEvent.click(getButton);
    expect(handleAddToCart).toHaveBeenCalled();
  });

  test("updates local storage", async () => {
    const user = userEvent.setup();
    render(<AddToCart price={10} handleAddToCart={handleAddToCart} />);

    localStorage.setItem("cartItem", "1");

    await user.click(screen.getByAltText("Aumentar"));
    await user.click(screen.getByAltText("Ir para carrinho"));

    const getItem = localStorage.getItem("cartItem");

    expect(getItem).toBe("2");
  });
});
