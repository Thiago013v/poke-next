"use client";

import CardPokemon from "./CardPokemon";
import type { PokemonsType } from "../_types/types";
import { useState } from "react";
import { QuarterRing } from "@/src/components/quarter-ring";
import usePokemonContext from "../_hooks/usePokemonContext";
import getListPokemons from "../_utils/getPokemon";

export default function ListPokemons({
  listPokemons,
}: {
  listPokemons: PokemonsType[];
}) {
  const { handlePokemonList, pokemonList } = usePokemonContext(listPokemons);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
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

      {isPending ? (
        <QuarterRing className="w-10 h-10 text-red-500" />
      ) : (
        <button
          className="flex flex-row justify-center items-center p-4 border-none bg-red-500 font-bold text-white text-[1.1rem] rounded-lg cursor-pointer hover:bg-red-700"
          onClick={async () => {
            setIsPending(true);
            const pokemonsList = await getListPokemons(pokemonList.length);

            if (pokemonsList.length === 0) {
              setIsPending(false);
              setIsError(true);
              return;
            }

            setIsError(false);
            setIsPending(false);
            handlePokemonList(pokemonsList);
          }}
        >
          Carregar Mais
        </button>
      )}

      {isError && (
        <p className="text text-red-500 font-bold">ERRO AO CARREGAR POKÉMONS</p>
      )}
    </div>
  );
}
