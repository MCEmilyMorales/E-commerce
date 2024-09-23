import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>Logotipo</div>
      <div>
        Contactanos
        <Link href="#">Intagram</Link>
        <Link href="#">Whatsapp</Link>
      </div>
      <div>
        <Link href="/tabla-de-talles">Tabla de talles</Link>
      </div>
      <div>
        <Link href="#">Ubicación</Link>
      </div>
    </footer>
  );
}
