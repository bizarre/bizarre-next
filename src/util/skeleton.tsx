import theme from "@/theme";
import cs from "classnames";

export const Skeleton = ({
  height,
  width,
  borderRadius = "3px",
  className,
}: {
  height: string;
  width: string;
  borderRadius?: string;
  className?: string;
}) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
      }}
      className={cs(theme.skeleton, className)}
    ></div>
  );
};
