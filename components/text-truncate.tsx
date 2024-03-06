interface TextTruncateProps {
  text: string;
  maxLength: number;
  className?: string;
}

export const TextTruncate = ({
  text,
  maxLength,
  className,
}: TextTruncateProps) => {
  const truncate = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const truncatedText = truncate(text, maxLength);

  return (
    <span className={className} title={text}>
      {truncatedText}
    </span>
  );
};
