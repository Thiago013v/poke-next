import { useContext } from "react";
import { PokemonContext } from "../PokemonContextProvider";
import type { PokemonsType } from "../_types/types";
import { useEffect } from "react";

export default function usePokemonContext(listPokemons: PokemonsType[]) {
  const response = useContext(PokemonContext);

  if (!response) {
    throw new Error(
      "[ERRO] Você não pode utilizar dados do Provider fora de um Provider",
    );
  }

  const { handlePokemonList, pokemonList } = response;

  useEffect(() => {
    if (pokemonList.length > 0) {
      return;
    }

    handlePokemonList(listPokemons);
  }, [handlePokemonList, listPokemons, pokemonList]);

  return { handlePokemonList, pokemonList };
}
