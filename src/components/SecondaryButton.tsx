import type { ButtonProps } from "./PrimaryButton";

function SecondaryButton({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-600 text-white font-bold text-[13px] border border-gray-500 rounded-md py-[0.7em] px-[1.4em] leading-none cursor-pointer m-2 p-2"
    >
      {text}
    </button>
  );
}

export default SecondaryButton;
