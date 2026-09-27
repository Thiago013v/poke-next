"use client";

import usePokemonContext from "../_hooks/usePokemonContext";
import CardPokemon from "./CardPokemon";
import type { PokemonsType } from "../_types/types";
import { useEffect } from "react";

export default function ListPokemons({
  pokemonsList,
}: {
  pokemonsList: PokemonsType[];
}) {
  const { pokemonList, handlePokemonList } = usePokemonContext();

  useEffect(() => {
    handlePokemonList(pokemonsList);
  });

  return (
    <div>
      <ul className="flex flex-row justify-center items-center flex-wrap gap-4">
        {pokemonList.map((currentPokemon: PokemonsType) => (
          <li key={currentPokemon.id}>
            <CardPokemon
              id={currentPokemon.id}
              img={currentPokemon.imgPokemon}
              name={currentPokemon.name}
            ></CardPokemon>
          </li>
        ))}
      </ul>
    </div>
  );
}
