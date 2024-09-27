import Link from "next/link";

export default function SearchInput() {
  return (
    <div className="relative">
      <div className="absolute -right-2 w-[2rem] h-[2rem] flex items-start justify-end cursor-pointer"></div>
      <svg
        xmlns="/images/search.svg"
        className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <Link href={"#"}></Link>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
        />
      </svg>
      <input
        type="text"
        placeholder="Buscar"
        className="w-full pr-10 pl-4 py-1 border border-black bg-white outline-none rounded-xl focus:ring-0 focus:border-customColor"
      />
    </div>
  );
}
