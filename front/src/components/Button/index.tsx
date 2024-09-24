import { ButtonProps } from "@/interfaces";

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-8 font-semibold min-w-full border border-slate-400 bg-gray-300 text-slate-800 hover:bg-customColor ${className}`}
    >
      {text}
    </button>
  );
}
