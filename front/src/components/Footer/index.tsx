import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex h-28 w-full px-10 py-5 bg-gray-300 justify-between items-center">
        <div className="flex h-9 px-2 font-black items-center">
          <span>Andia</span>
        </div>
        <div className="flex h-9 px-2 gap-4 overflow-hidden items-center">
          Contactanos:
          <div className="overflow-hidden">
            <Link href="#">
              <Image
                src={
                  "/images/iconfinder-social-media-applications-3instagram-4102579_113804.svg"
                }
                alt="Icon Instagram"
                width={30}
                height={30}
                className="object-cover"
              />
            </Link>
          </div>
          <div className="overflow-hidden">
            <Link href="#">
              <Image
                src={"/images/Whatsapp_icon-icons.com_66931.svg"}
                alt="Icon Whatsapp"
                width={30}
                height={30}
                className="object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="flex h-9 px-2 items-center">
          <Link href="/tabla-de-talles">Tabla de talles</Link>
        </div>
        <div className="flex h-9 px-2 gap-4 items-center">
          <Link href="#">Ubicación</Link>
          <div className="border border-customColor-dark px-16 py-8 bg-customColor"></div>
        </div>
      </div>
    </footer>
  );
}
