import axios from "axios";

import Image from "next/image";
import pokebola from "../../public/pokebola.png";
import ListPokemons from "./_components/ListPokemons";
import { Suspense } from "react";
import type { PokemonsType } from "./_types/types";

export default function Home() {
  async function getPokemon(offset: number): Promise<PokemonsType[]> {
    "use server";

    const pokemonsList = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${String(offset)}`,
    );

    const arrayPokemons: PokemonsType[] = [];

    for (let i = 0; i < pokemonsList.data.results.length; i++) {
      const url = pokemonsList.data.results[i].url;

      const pokemonAPI = await axios.get(url);

      const pokemon = pokemonAPI;

      const name = pokemon.data.name;
      const weight = pokemon.data.weight;
      const height = pokemon.data.height;
      const id = pokemon.data.id;
      const type = pokemon.data.types[0].type.name;
      const imgPokemon = pokemon.data.sprites.other.home.front_default;

      const pokemonObject: PokemonsType = {
        name: name,
        height: height,
        id: id,
        imgPokemon: imgPokemon,
        type: type,
        weight: weight,
      };

      arrayPokemons.push(pokemonObject);
    }

    return arrayPokemons;
  }

  return (
    <main className="flex flex-col justify-center items-center row-start-2 row-end-3 col-start-1 col-end-2 bg-white">
      <div className="flex flex-row justify-center items-center gap-2">
        <h1 className="text-5xl text-black font-bold mt-10 mb-10">
          <span className="text-red-500">Poke</span>Next
        </h1>
        <Image
          src={pokebola}
          alt="Pokebola"
          width={60}
          height={50}
          className="w-auto h-auto"
        ></Image>
      </div>

      <Suspense
        fallback={
          <h1 className="text-4xl text-black font-bold">
            Carregando Pokemons...
          </h1>
        }
      >
        <ListPokemons getPokemon={getPokemon}></ListPokemons>
      </Suspense>
    </main>
  );
}
