//Aquí defines la estructura base que se reutiliza en todas las páginas. Si todas tus páginas comparten elementos como un Navbar, Footer o una estructura común, colócalos aquí.
export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Este tambien deberia funcionar.Layout de HomePage</h1>
      <main>{children}</main>
    </div>
  );
}
