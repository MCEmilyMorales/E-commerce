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
    <div className="mx-5 my-5 w-72 relative">
      <div className="flex justify-center items-center h-96 overflow-hidden">
        <Image
          src={product.imgUrl}
          alt={product.name}
          height={386}
          width={290}
        />
      </div>
      <div className="pt-6">
        <h2 className="text-xl font-bold">{product.name}</h2>
      </div>
      <div className="flex justify-between">
        <span className="block text text-left">Precio: </span>
        <span className="block text-lg text-right font-bold">
          ${product.price}
        </span>
      </div>
      <div>
        <p className="py-2 text-left bg-gray-300">{product.description}</p>
      </div>
      <div className="py-2 flex justify-center items-center">
        <Button text="ADD" onClick={handleAddToCart} />
      </div>
    </div>
  );
}
