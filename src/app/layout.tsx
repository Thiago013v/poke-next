import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="min-h-svh grid grid-rows-[100px_1fr_100px] grid-cols-[1fr]">
          <header></header>
        </div>
      </body>
    </html>
  );
}
