import { IProduct } from "@/interfaces";
import Image from "next/image";
//cada una de las tarjetitas
export default function ProductCard({ product }: { product: IProduct }) {
  // aqui contruyo el objeto de este modo:  product: IProduct  en lugar de traerlo de las interfaces.
  if (!product || !product.imgUrl) {
    return <div>Producto no disponible</div>;
  }
  return (
    <div>
      <Image src={product.imgUrl} alt={product.name} width={100} height={100} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button>Add to card</button>
    </div>
  );
}
