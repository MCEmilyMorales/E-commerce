import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full flex flex-wrap justify-center">
      <Image
        src={
          "https://assets.hermes.com/is/image/hermesedito/P_169_BARENIA_PS_HP?fit=wrap%2C0&wid=1920"
        }
        alt={"carga de imagenes aleatoriamente..."}
        width={1365}
        height={700}
        className="w-full"
      />
    </div>
  );
}
