"use client";

import CardPokemon from "./CardPokemon";
import type { PokemonsType } from "../_types/types";
import { useEffect, useState } from "react";
import { QuarterRing } from "@/src/components/quarter-ring";
import usePokemonContext from "../_hooks/usePokemonContext";
import getListPokemons from "../_utils/getPokemon";

export default function ListPokemons({
  listPokemons,
}: {
  listPokemons: PokemonsType[];
}) {
  const { handlePokemonList, pokemonList } = usePokemonContext();
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    if (pokemonList.length > 0) {
      return;
    }

    handlePokemonList(listPokemons);
  }, [handlePokemonList, listPokemons, pokemonList]);

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

      {isPending ? (
        <QuarterRing className="w-10 h-10 text-red-500" />
      ) : (
        <button
          className="flex flex-row justify-center items-center p-4 border-none bg-red-500 font-bold text-white text-[1.1rem] rounded-lg cursor-pointer hover:bg-red-700"
          onClick={async () => {
            setIsPending(true);
            const pokemonsList = await getListPokemons(pokemonList.length);

            setIsPending(false);
            handlePokemonList(pokemonsList);
          }}
        >
          Carregar Mais
        </button>
      )}
    </div>
  );
}
