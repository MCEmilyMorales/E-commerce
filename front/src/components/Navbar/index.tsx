import Home from "@/app/home/page";
import SearchInput from "../SearchInput";

export default function ComponentNavbar() {
  return (
    <nav>
      <div className="border border-black p-4 h-20 mx-auto flex items-center justify-around">
        <div className="text-black text-lg font-bold pr-10">
          <h1 className="font-black">
            <a href="/">Andia</a>
          </h1>
        </div>

        <ul className="flex place-items-center ">
          <li className="px-10">
            <a href={"/promociones"}>Promociones</a>
          </li>
          <SearchInput />
        </ul>

        <div>
          <ul className="flex place-items-center justify-between">
            <li className="px-10">
              <a href={"/home"}>Home</a>
            </li>
            <li className="px-10">
              <a href={"/cuenta/login"}>Registrar o ingresar</a>
            </li>
            <li className="pl-10">
              <a href={"/cart"}>Carrito</a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

{
  /*<div className="flex h-28 w-full px-10 py-5 gap-4 border border-black items-center overflow-hidden">  
              <h1 className="border border-black flex h-9 px-2 font-black items-center ">*/
}

{
  /* <NavbarCollapse>
        <div className="flex">
          <ul className="flex gap-4">
            <NavbarLink href={"/promociones"} as={Link}>
              Promociones
            </NavbarLink>

            <NavbarLink href={"/buscador"} as={Link}>
              <div className="flex md:order-2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span>Search</span>
              </div>
            </NavbarLink>

            <NavbarLink href={"/home"} as={Link}>
              Home
            </NavbarLink>
            <NavbarLink href={"/cuenta/login"} as={Link}>
              Registrar o ingresar
            </NavbarLink>
            <NavbarLink href={"/cart"} as={Link}>
              Carrito
            </NavbarLink>
          </ul>
        </div>
      </NavbarCollapse> */
}
{
  /* </div>  */
}
