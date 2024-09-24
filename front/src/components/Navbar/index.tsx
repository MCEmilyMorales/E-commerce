import Home from "@/app/home/page";
import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import Link from "next/link";

export default function ComponentNavbar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        {/*<div className="flex h-28 w-full px-10 py-5 gap-4 border border-black items-center overflow-hidden">  
              <h1 className="border border-black flex h-9 px-2 font-black items-center ">*/}
        <h1 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
          Andia
        </h1>
      </NavbarBrand>
      <NavbarToggle />

      <NavbarCollapse>
        <div className="flex">
          <ul className="flex gap-4">
            <NavbarLink href={"/promociones"} active>
              Promociones
            </NavbarLink>

            <NavbarLink href={"/buscador"} active>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span>Search</span>
              </div>
            </NavbarLink>

            <NavbarLink href={"/home"} as={Link}>
              Home
            </NavbarLink>
            <NavbarLink href={"/cuenta/login"} active>
              Registrar o ingresar
            </NavbarLink>
            <NavbarLink href={"/cart"} active>
              Carrito
            </NavbarLink>
          </ul>
        </div>
      </NavbarCollapse>
      {/* </div>  */}
    </Navbar>
  );
}
