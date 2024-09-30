"use client";
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  return (
    <div>
      <Banner />
      <h1>Bienvenido a la LandingPage de mi E-commerce</h1>
      <div className="px-20 pb-5">
        <p className="p-3 text-center text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          vero deleniti ea minima assumenda! Exercitationem unde delectus earum
          dicta maiores laborum quos adipisci. Fugit sed excepturi saepe
          dignissimos dolore beatae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat voluptatibus sit obcaecati magnam placeat
          nostrum expedita iure sunt, vitae temporibus, totam omnis tempora
          officiis ut perferendis aliquam tenetur? Accusamus, rem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Omnis dolores fugit quod
          iure est molestiae suscipit sapiente temporibus ex eaque minus, sequi
          nihil quidem nostrum et asperiores, aliquam, animi consequatur!
        </p>
      </div>
    </div>
  );
}
