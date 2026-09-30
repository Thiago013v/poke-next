import axios from "axios";

import Image from "next/image";
import pokebola from "../../public/pokebola.png";
import ListPokemons from "./_components/ListPokemons";
import { Suspense } from "react";

export default function Home() {
  const listPokemons = axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0")
    .then((results) => results.data);

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
        ></Image>{" "}
      </div>

      <Suspense
        fallback={
          <h1 className="text-4xl text-black font-bold">
            Carregando Pokemons...
          </h1>
        }
      >
        <ListPokemons pokemonAPI={listPokemons}></ListPokemons>
      </Suspense>
    </main>
  );
}
