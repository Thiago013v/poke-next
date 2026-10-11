"use cache";

import axios from "axios";
import type { PokemonsType } from "../_types/types";

export default async function getListPokemons(offset: number) {
  try {
    let pokemonsList;

    if (offset === 1020) {
      pokemonsList = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 1}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 2}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 3}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 4}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 5}/`),
      ]);
    } else {
      pokemonsList = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 1}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 2}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 3}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 4}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 5}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 6}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 7}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 8}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 9}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 10}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 11}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${offset + 12}/`),
      ]);
    }

    const arrayPokemons: PokemonsType[] = [];

    for (let i = 0; i < pokemonsList.length; i++) {
      const name = pokemonsList[i].data.name;
      const weight = pokemonsList[i].data.weight;
      const height = pokemonsList[i].data.height;
      const id = pokemonsList[i].data.id;
      const type = pokemonsList[i].data.types[0].type.name;
      const imgPokemon = pokemonsList[i].data.sprites.other.home.front_default;

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
  } catch {
    return [];
  }
}
