import Link from "next/link";
import Image from "next/image";

interface CardPokemonType {
  img: string;
  id: number;
  name: string;
}

export default function CardPokemon({ img, id, name }: CardPokemonType) {
  return (
    <div className="flex flex-col items-center border-3 border-red-500 bg-zinc-800 rounded-2xl h-100 w-75 gap-4">
      <img src={img} alt={name} className="w-50 h-50" />

      <p className="flex flex-row justify-center items-center w-8 border border-red-500 bg-red-500 p-2 font-bold text-white rounded-md text-[1.1rem]">
        #{id}
      </p>

      <h3 className="text-2xl text-white font-bold">{name}</h3>

      <Link
        href={`/${id}`}
        className="bg-white p-2 rounded-lg text-center text-black font-bold text-[1.1rem]"
      >
        Detalhes
      </Link>
    </div>
  );
}
