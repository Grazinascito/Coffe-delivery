import { render, screen } from "@testing-library/react";
import { IntroItems } from "./IntroItems";
import packing from "../../../assets/icons/packing.svg";

describe("IntroItems", () => {
  // Verificar se o componente é renderizado corretamente com as props corretas.

  test("render the component with correct props", () => {
    const childrenText = "Embalagem mantém o café intacto";
    const altText = "Icone de sacola";

    render(
      <IntroItems children={childrenText} icons={packing} alt={altText} />
    );

    expect(screen.getByText(childrenText)).toBeInTheDocument();
    expect(screen.getByAltText(altText)).toBeInTheDocument();
    expect(screen.getByAltText(altText).getAttribute("src")).toBe(packing);
  });

  // Verificar se o elemento <img> está sendo renderizado com a prop alt correta.

  test("render the img with correct prop alt", () => {
    const childrenText = "Embalagem mantém o café intacto";
    const altText = "Icone de sacola";

    render(
      <IntroItems children={childrenText} icons={packing} alt={altText} />
    );

    expect(screen.getByAltText(altText).getAttribute("alt")).toContain(
      "Icone de sacola"
    );
  });

  // Verificar se o texto passado para a prop children está sendo exibido corretamente no elemento <span>.

  test("render the correct prop children text", () => {
    const childrenText = "Embalagem mantém o café intacto";
    const altText = "Icone de sacola";

    render(
      <IntroItems children={childrenText} icons={packing} alt={altText} />
    );

    expect(screen.getByText(childrenText).textContent).toContain(
      "Embalagem mantém o café intacto"
    );
  });
});
