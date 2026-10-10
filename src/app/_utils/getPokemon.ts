"use cache";

import axios from "axios";
import type { PokemonsType } from "../_types/types";

export default async function getListPokemons(
  offset: number,
): Promise<PokemonsType[]> {
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
