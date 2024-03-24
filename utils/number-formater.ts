interface NumberFormaterProps {
  number: number | string;
  format?: "truncated" | "full";
}
export const formatNumber = ({
  number,
  format = "full",
}: NumberFormaterProps): string => {
  const number_int = Number(number);
  if (format === "full") {
    return number_int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } else if (format === "truncated") {
    if (number_int >= 1000 && number_int < 1000000) {
      return (
        (number_int / 1000).toFixed(0).replace(/\.0$/, "").replace(".", ",") +
        " rb"
      );
    }
    if (number_int >= 1000000) {
      return (
        (number_int / 1000000)
          .toFixed(1)
          .replace(/\.0$/, "")
          .replace(".", ",") + " jt"
      );
    }
  }

  return number_int.toString();
};
