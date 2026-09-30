"use client";

import CardPokemon from "./CardPokemon";
import type { PokemonsType, resultsType } from "../_types/types";
import { useEffect } from "react";
import usePokemonContext from "../_hooks/usePokemonContext";
import axios from "axios";
import { use } from "react";

export default function ListPokemons({
  pokemonAPI,
}: {
  pokemonAPI: Promise<{ results: resultsType[] }>;
}) {
  const pokemonsList = use(pokemonAPI);
  const { handlePokemonList, pokemonList } = usePokemonContext();

  useEffect(() => {
    const arrayPokemons: PokemonsType[] = [];

    async function getDataPokemonList() {
      for (let i = 0; i < pokemonsList.results.length; i++) {
        const url = pokemonsList.results[i].url;

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

      handlePokemonList(arrayPokemons);
    }

    getDataPokemonList();
  }, [pokemonsList, handlePokemonList]);

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
