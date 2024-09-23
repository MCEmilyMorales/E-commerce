import Home from "@/app/home/page";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <h1>Paso 2 = Definir componentes</h1>
      <ul>
        <li>
          <Link href={"/"}>Logotipo</Link>
        </li>
        <li>
          <Link href={"/promociones"}>Promociones</Link>
        </li>
        <li>
          <Link href={"/buscador"}>Barra de busqueda | buscador</Link>
        </li>
        <li>
          <Link href={"/home"}>Home</Link>
        </li>
        <li>
          <Link href={"/cuenta/login"}>Registrar o ingresar</Link>
        </li>
        <li>
          <Link href={"/cart"}>Carrito</Link>
        </li>
      </ul>
    </div>
  );
}
