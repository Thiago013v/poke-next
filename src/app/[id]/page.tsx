import PokemonInfo from "./_components/PokemonInfo";

export default async function IndividualPokemon({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <PokemonInfo id={id}></PokemonInfo>
    </main>
  );
}
