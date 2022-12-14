import theme from "@/theme";
import cs from "classnames";

export const Skeleton = ({
  height,
  width,
  borderRadius = "3px",
  marginTop = "",
  marginLeft = "",
  className,
}: {
  height: string;
  width: string;
  borderRadius?: string;
  marginTop?: string;
  marginLeft?: string;
  className?: string;
}) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        marginTop,
        marginLeft,
      }}
      className={cs(theme.skeleton, className)}
    ></div>
  );
};
