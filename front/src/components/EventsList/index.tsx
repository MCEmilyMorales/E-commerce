import EventCard from "../EventCard";
import { IProductListProps } from "@/interfaces";

export default function EventsList({ products }: IProductListProps) {
  return (
    <ul>
      {products.map((product) => (
        <EventCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
