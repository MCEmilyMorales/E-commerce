import { IProduct } from "@/interfaces";
import Image from "next/image";

export default function EventCard({ product }: { product: IProduct }) {
  const { id, name, imgUrl } = product;
  return (
    <li>
      <Image src={`${imgUrl}`} alt={name} width={200} height={200} />
      <div>
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <span>{id}</span>
        </div>
        <div>
          <button>
            <a href={`/events/${id}`}>PRUEBA</a>
          </button>
        </div>
      </div>
    </li>
  );
}
