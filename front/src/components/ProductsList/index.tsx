import { IProduct, IProductListProps } from "@/interfaces";
import ProductCard from "../ProductsCard";

export default function ProductsList({ products }: IProductListProps) {
  return (
    <div>
      {products.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
