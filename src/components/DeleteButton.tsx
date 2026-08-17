import type { ButtonProps } from "./PrimaryButton";

function DeleteButton({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 text-white font-bold text-[13px] border border-red-300 rounded-md py-[0.7em] px-[1.4em] leading-none cursor-pointer m-2 p-2"
    >
      {text}
    </button>
  );
}

export default DeleteButton;
