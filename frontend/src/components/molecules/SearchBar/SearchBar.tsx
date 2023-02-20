import { MagnifyingGlass } from "phosphor-react";
import { InputWrapper, WrapperTitleInput } from "./Styles";

interface SearchProps {
  value: string;
  setValue: (value: string) => void;
}

export const SearchBar = ({ value, setValue }: SearchProps) => {
  return (
    <WrapperTitleInput>
      <h2>Nossos cafés</h2>

      <InputWrapper>
        <input
          type="text"
          placeholder="Pesquisar Café"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <MagnifyingGlass cursor="pointer" size={30} color="#DBAC2C" />
      </InputWrapper>
    </WrapperTitleInput>
  );
};
