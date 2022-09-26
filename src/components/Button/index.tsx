import { PropsWithChildren } from "react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
}
const ButtonBlack: React.FC<Props> = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={clsx(
      "text-white bg-black text-sm px-4 py-1.5 rounded",
      className
    )}
  >
    {children}
  </button>
);

export default ButtonBlack;
