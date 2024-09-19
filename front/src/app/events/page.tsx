import { productsToPreload } from "../../../public/data/data"; //productsToPreload
import EventsList from "@/components/EventsList";

export default function EventsPage() {
  return (
    <div>
      <EventsList products={productsToPreload} />
    </div>
  );
}
