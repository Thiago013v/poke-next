import axios from "axios";
import imgPokemonNotFound from "../../../../public/Imagem Pokémon não disponível.png";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function PokemonInfo({ id }: { id: string }) {
  let pokemon;

  try {
    pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  } catch {
    notFound();
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="bg-black p-4 flex flex-row justify-center items-center w-80 rounded-lg">
        <h1 className="text-white font-bold text-5xl t">
          {pokemon?.data.name.charAt(0).toUpperCase()}
          {pokemon?.data.name.slice(1, pokemon?.data.name.length)}
        </h1>
      </div>

      <Image
        src={
          pokemon?.data.sprites.other.home.front_default
            ? pokemon?.data.sprites.other.home.front_default
            : imgPokemonNotFound
        }
        alt={`Imagem do ${pokemon?.data.name}`}
        width={200}
        height={0}
        className="h-auto w-auto"
      ></Image>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-black text-[1.1rem] font-bold">Número:</h3>
        <p className="text-black text-[1.1rem]">#{pokemon?.data.id}</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="text-black text-[1.1rem] font-bold">Tipo:</h3>
        <p className="p-2 rounded-lg text-white font-bold text-[1.1rem] bg-black">
          {pokemon?.data.types[0].type.name.toUpperCase()}
        </p>
      </div>

      <div className="flex flex-row justify-center items-center gap-4">
        <div className="flex flex-col">
          <h3 className="text-black text-[1.1rem] font-bold">Altura: </h3>
          <p className="text-black text-[1.1rem]">{pokemon?.data.height}</p>
        </div>

        <hr className="bg-zinc-200 w-0.5 h-12 border-none" />

        <div className="flex flex-col">
          <h3 className="text-black text-[1.1rem] font-bold">Peso: </h3>
          <p className="text-black text-[1.1rem]">{pokemon?.data.weight}</p>
        </div>
      </div>
    </div>
  );
}
