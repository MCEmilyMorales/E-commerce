"use client";
import Image from "next/image";

import { IProduct } from "@/interfaces";
import Button from "@/components/Button";

//cada una de las tarjetitas
export default function ProductCard({ product }: { product: IProduct }) {
  // aqui contruyo el objeto de este modo:  product: IProduct  en lugar de traerlo de las interfaces.
  const handleAddToCart = () => {
    console.log(`Producto ${product?.name} agregado al carrito`);
  };

  if (!product || !product.imgUrl) {
    return <div>Producto no disponible</div>;
  }
  return (
    <div className="mx-5 my-5 w-[400px] grid grid-rows-subgrid(3,1fr) justify-items-center gap-2">
      <div className="flex justify-items-center h-[600px] overflow-hidden hover:cursor-zoom-in">
        <Image
          src={product.imgUrl}
          alt={product.name}
          height={600}
          width={400}
          className="object-cover transform transition duration-500 hover:scale-110"
        />
      </div>
      <div className="pt-6">
        <h2 className="text-xl font-bold">{product.name}</h2>
      </div>
      <div className="flex">
        <span>Precio: </span>
        <span className="text-lg font-bold">${product.price}</span>
      </div>
      <div className="min-w-full">
        <p className="p-2 text-left bg-gray-300">{product.description}</p>
      </div>
      <div className=" min-w-full py-2 flex justify-center items-center">
        <Button text="ADD" onClick={handleAddToCart} />
      </div>
    </div>
  );
}
