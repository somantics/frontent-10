export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

function PrimaryButton({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-green-600 text-white font-bold text-[13px] border border-lime-300 rounded-md py-[0.7em] px-[1.4em] leading-none cursor-pointer"
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
