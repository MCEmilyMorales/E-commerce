//Aquí defines la estructura base que se reutiliza en todas las páginas. Si todas tus páginas comparten elementos como un Navbar, Footer o una estructura común, colócalos aquí.
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>paso 1 = AboutLayout </h1>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
