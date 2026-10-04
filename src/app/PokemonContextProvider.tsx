"use client";

import { createContext } from "react";
import { PokemonsType } from "./_types/types";
import { useState } from "react";

interface PokemonContextType {
  pokemonList: PokemonsType[];
  handlePokemonList: (pokemonsList: PokemonsType[]) => void;
}

export const PokemonContext = createContext<PokemonContextType | null>(null);

export default function PokemonContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pokemonList, setPokemonList] = useState<PokemonsType[]>([]);

  const handlePokemonList = (pokemonsList: PokemonsType[]) => {
    const newPokemonsList = pokemonList.concat(pokemonsList);

    setPokemonList(newPokemonsList);
  };

  return (
    <PokemonContext.Provider value={{ pokemonList, handlePokemonList }}>
      {children}
    </PokemonContext.Provider>
  );
}
