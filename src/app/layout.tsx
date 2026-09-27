import "./global.css";
import pokebola from "../../public/pokebola.png";
import Image from "next/image";
import Link from "next/link";
import PokemonContextProvider from "./PokemonContextProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <PokemonContextProvider>
          <div className="min-h-svh grid grid-rows-[100px_1fr_70px] grid-cols-[1fr]">
            <header className="flex flex-row justify-between items-center row-start-1 row-end-2 col-start-1 col-end-2 bg-zinc-800 p-8">
              <div className="flex flex-row justify-center items-center gap-2">
                <Image
                  src={pokebola}
                  alt="Pokebola"
                  width={50}
                  height={50}
                ></Image>{" "}
                <h2 className="text-4xl text-white font-bold">PokeNext</h2>
              </div>

              <div>
                <ul className="flex flex-row justify-center items-center gap-4">
                  <li>
                    <Link href="/" className="text-white text-2xl">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-white text-2xl">
                      Sobre
                    </Link>
                  </li>
                </ul>
              </div>
            </header>

            {children}

            <footer className="row-start-3 row-end-4 col-start-1 col-end-2 bg-zinc-800 mt-4"></footer>
          </div>
        </PokemonContextProvider>
      </body>
    </html>
  );
}
