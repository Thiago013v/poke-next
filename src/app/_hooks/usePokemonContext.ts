import { useContext } from "react";
import { PokemonContext } from "../PokemonContextProvider";

export default function usePokemonContext() {
  const response = useContext(PokemonContext);

  if (!response) {
    throw new Error(
      "[ERRO] Você não pode utilizar dados do Provider fora de um Provider",
    );
  }

  const { handlePokemonList, pokemonList } = response;

  return { handlePokemonList, pokemonList };
}
