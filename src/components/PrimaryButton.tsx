export interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

function PrimaryButton({ text, disabled, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-green-600 text-white font-bold text-[13px] border border-lime-300 rounded-md py-[0.7em] px-[1.4em] leading-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed m-2 p-2"
      disabled={disabled ?? false}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
