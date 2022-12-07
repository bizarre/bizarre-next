import theme from "@/theme";

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
      className={`${theme.skeleton} ${className ? className : ""}`}
    ></div>
  );
};
