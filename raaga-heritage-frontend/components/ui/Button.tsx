/**
 * Button Component Props
 */
export type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="primary-btn"
    >
      {text}
    </button>
  );
};

export default Button;