//Page (page.tsx): Define cada página (como home/page.tsx o about/page.tsx). Esto es lo que ve el usuario cuando accede a una ruta específica, como /home o /about.
import ProductsList from "@/components/ProductsList";
import { productsToPreload } from "../../../public/data/data";

export default function Home() {
  return (
    <div>
      <h1>
        EL homepage funciona luego de definir dentro de main 'children' en el
        layout
      </h1>
      <ProductsList products={productsToPreload} />
    </div>
  );
}
