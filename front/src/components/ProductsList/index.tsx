import { IProduct, IProductListProps } from "@/interfaces";
import ProductCard from "../ProductsCard";

export default function ProductsList({ products }: IProductListProps) {
  return (
    <div className="border border-black w-screen flex flex-wrap justify-center gap-10 my-5 py-5">
      {products.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
