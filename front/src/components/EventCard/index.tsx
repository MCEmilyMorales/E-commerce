import { IProduct } from "@/interfaces";
import Image from "next/image";
import Button from "../Button";

export default function EventCard({ product }: { product: IProduct }) {
  const { id, name, imgUrl } = product;
  const handleAddToCart = () => {
    console.log(`Producto ${name} agregado al carrito`);
  };
  return (
    <div>
      <div>
        <Image
          src={`${imgUrl}`}
          alt={name}
          width={200}
          height={200}
          fill={true}
        />
      </div>
      <div>
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <span>{id}</span>
        </div>
        <div>
          <Button text="ADD" onClick={handleAddToCart} />
          {/* <button>
            <a href={`/events/${id}`}>PRUEBA</a>
          </button> */}
        </div>
      </div>
    </div>
  );
}
