"use client";
import CustomButton from "@/components/CustomButton";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Este es un side bar???</h1>
      <CustomButton
        text="Click que debe renderizar del lado del cliente"
        onClick={() => console.log("Cosas por probar")}
        disabled={undefined}
        className={undefined}
      />
      <main>{children}</main>
    </div>
  );
}
