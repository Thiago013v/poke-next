import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-black text-5xl font-bold mb-4">Sobre o projeto</h1>

      <p className="text-zinc-600 text-[1.2rem]">
        PokeNext é um app construído em Next.js para consultar Pokémons
      </p>

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png"
        alt="Imagem do Charizard"
        width={400}
        height={0}
        className="w-auto h-auto"
      ></Image>
    </main>
  );
}
