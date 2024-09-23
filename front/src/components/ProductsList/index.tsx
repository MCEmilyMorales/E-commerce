import { IProduct, IProductListProps } from "@/interfaces";
import ProductCard from "../ProductsCard";

export default function ProductsList({ products }: IProductListProps) {
  return (
    <div className="border border-black flex flex-wrap justify-start mx-5">
      {products.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
