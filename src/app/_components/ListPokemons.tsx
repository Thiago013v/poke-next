"use client";

import CardPokemon from "./CardPokemon";
import type { PokemonsType } from "../_types/types";
import { useEffect, useState } from "react";
import usePokemonContext from "../_hooks/usePokemonContext";

export default function ListPokemons({
  getPokemon,
}: {
  getPokemon: (offset: number) => Promise<PokemonsType[]>;
}) {
  const { handlePokemonList, pokemonList } = usePokemonContext();
  const [offset, setOffset] = useState<number>(12);

  useEffect(() => {
    if (pokemonList.length > 0) {
      return;
    }

    async function pokemons() {
      const pokemonsList = await getPokemon(0);

      handlePokemonList(pokemonsList);
    }

    pokemons();
  }, [getPokemon, handlePokemonList, pokemonList]);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
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

      <button
        className="flex flex-row justify-center items-center p-4 border-none bg-red-500 font-bold text-white text-[1.1rem] rounded-lg cursor-pointer hover:bg-red-700"
        onClick={() => {
          setOffset((prev) => (prev += 12));

          async function pokemons() {
            const pokemonsList: PokemonsType[] = await getPokemon(offset);

            handlePokemonList(pokemonsList);
          }

          pokemons();
        }}
      >
        Carregar Mais
      </button>
    </div>
  );
}
