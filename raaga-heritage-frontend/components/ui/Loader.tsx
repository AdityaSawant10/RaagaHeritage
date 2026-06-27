/**
 * Loader Component Props
 */
export type LoaderProps = {
  size?: number;
};

const Loader = ({ size = 40 }: LoaderProps) => {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="border-4 border-gray-300 border-t-black rounded-full animate-spin"
    />
  );
};

export default Loader;