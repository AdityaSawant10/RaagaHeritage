/**
 * Toast Component Props
 */
export type ToastProps = {
  message: string;
};

const Toast = ({ message }: ToastProps) => {
  return (
    <div className="fixed bottom-5 right-5 bg-black text-white px-5 py-3 rounded-lg">
      {message}
    </div>
  );
};

export default Toast;