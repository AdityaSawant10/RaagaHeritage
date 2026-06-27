/**
 * Input Component Props
 */
export type InputProps = {
  placeholder: string;
  type?: string;
};

const Input = ({
  placeholder,
  type = "text",
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border p-3 rounded-lg w-full"
    />
  );
};

export default Input;