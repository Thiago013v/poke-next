"use cache";

import Image from "next/image";
import pokebola from "../../public/pokebola.png";
import ListPokemons from "./_components/ListPokemons";
import getListPokemons from "./_utils/getPokemon";

export default async function Home() {
  const listPokemons = await getListPokemons(0);

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

      <ListPokemons listPokemons={listPokemons}></ListPokemons>
    </main>
  );
}
