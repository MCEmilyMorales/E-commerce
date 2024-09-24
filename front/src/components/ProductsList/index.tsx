import { IProduct, IProductListProps } from "@/interfaces";
import ProductCard from "../ProductCard";

export default function ProductsList({ products }: IProductListProps) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-10 my-5 py-5">
      {products.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
