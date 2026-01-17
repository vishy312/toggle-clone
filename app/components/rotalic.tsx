import React from "react";

const RotalicText = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  const textArray = children.split("");

  return (
    <span className={`inline-flex tracking-tight ${className}`}>
      {textArray.map((letter, i) => (
        <span key={i} className="rotate-15 whitespace-pre">
          {letter}
        </span>
      ))}
    </span>
  );
};

export default RotalicText;
