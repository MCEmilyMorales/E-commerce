import { IButtonProps } from "@/interfaces";

export default function CustomButton({
  text,
  onClick,
  disabled,
  className,
}: IButtonProps): JSX.Element {
  return (
    <div>
      <button onClick={onClick} disabled={disabled} className={className}>
        {text}
      </button>
    </div>
  );
}
