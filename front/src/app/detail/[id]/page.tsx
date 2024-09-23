"use client";
import Image from "next/image";

import { productsToPreload } from "../../../../public/data/data";

export default function Detail({ params }: { params: { id: string } }) {
  const productId = productsToPreload.find((event) => event.id === params.id);
  console.log("params.eventId:", params.id);
  console.log("productId:", productId);

  if (!productId) {
    return <div>Producto no encontrado</div>; // Muestra un error si no se encuentra el producto
  }

  //falta el color, el talle, y el link que lleva a la tabla de talles
  return (
    <div>
      <div>
        <Image
          src={`${productId?.imgUrl}`}
          alt={`${productId?.name}`}
          width={100}
          height={100}
        />
      </div>
      <div>
        <h1>{productId?.name}</h1>
        <span>{productId?.id}</span>
        <span>{productId?.price}</span>
        <span>{productId?.description}</span>
      </div>
    </div>
  );
}
