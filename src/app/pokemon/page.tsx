import Image from "next/image";

export default function IndividualPokemon({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <div className="bg-black p-4 flex flex-row justify-center items-center w-80 rounded-lg">
        <h1 className="text-white font-bold text-5xl t">Squirtle</h1>
      </div>

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
        alt="ivysaur"
        width={200}
        height={0}
      ></Image>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-black text-[1.1rem] font-bold">Número:</h3>
        <p className="text-black text-[1.1rem]">#7</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="text-black text-[1.1rem] font-bold">Tipo:</h3>
        <p className="bg-blue-700 p-2 rounded-lg text-white font-bold text-[1.1rem]">
          WATER
        </p>
      </div>

      <div className="flex flex-row justify-center items-center gap-4">
        <div className="flex flex-col">
          <h3 className="text-black text-[1.1rem] font-bold">Altura: </h3>
          <p className="text-black text-[1.1rem]">-50cm</p>
        </div>

        <hr className="bg-zinc-200 w-0.5 h-12 border-none" />

        <div className="flex flex-col">
          <h3 className="text-black text-[1.1rem] font-bold">Peso: </h3>
          <p className="text-black text-[1.1rem]">9kg</p>
        </div>
      </div>
    </main>
  );
}
