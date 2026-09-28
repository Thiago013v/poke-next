"use client";

import usePokemonContext from "../../_hooks/usePokemonContext";
import type { PokemonsType } from "../../_types/types";
import Image from "next/image";

export default function PokemonInfo({ id }: { id: string }) {
  const { pokemonList } = usePokemonContext();

  const pokemon = pokemonList.find(
    (currentPokemon: PokemonsType) => currentPokemon.id === Number(id)
  );

  if (!pokemon) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-black font-bold">
          Pokémon não encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="bg-black p-4 flex flex-row justify-center items-center w-80 rounded-lg">
        <h1 className="text-white font-bold text-5xl t">{pokemon?.name}</h1>
      </div>

      <Image
        src={
          pokemon?.imgPokemon
            ? pokemon.imgPokemon
            : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
        }
        alt="ivysaur"
        width={200}
        height={0}
      ></Image>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-black text-[1.1rem] font-bold">Número:</h3>
        <p className="text-black text-[1.1rem]">#{pokemon?.id}</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="text-black text-[1.1rem] font-bold">Tipo:</h3>
        <p className="p-2 rounded-lg text-white font-bold text-[1.1rem] bg-black">
          {pokemon?.type.toUpperCase()}
        </p>
      </div>

      <div className="flex flex-row justify-center items-center gap-4">
        <div className="flex flex-col">
          <h3 className="text-black text-[1.1rem] font-bold">Altura: </h3>
          <p className="text-black text-[1.1rem]">{pokemon?.height}</p>
        </div>

        <hr className="bg-zinc-200 w-0.5 h-12 border-none" />

        <div className="flex flex-col">
          <h3 className="text-black text-[1.1rem] font-bold">Peso: </h3>
          <p className="text-black text-[1.1rem]">{pokemon?.weight}</p>
        </div>
      </div>
    </div>
  );
}
