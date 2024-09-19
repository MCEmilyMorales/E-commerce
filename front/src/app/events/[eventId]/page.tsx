import Image from "next/image";
import { productsToPreload } from "../../../../public/data/data";

export default function EventDetail({
  params,
}: {
  params: { eventId: string };
}) {
  console.log(params);

  const event = productsToPreload.find((event) => event.id === params.eventId);
  return (
    <div>
      <Image
        src={`${event?.imgUrl}`}
        alt={`${event?.description}`}
        width={100}
        height={100}
      />
      <h1>{event?.name}</h1>
      <p>{event?.id}</p>
    </div>
  );
}
