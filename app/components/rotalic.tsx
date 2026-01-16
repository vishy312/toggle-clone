import React from "react";

const RotalicText = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  const textArray = children.split("");
  console.log(textArray);

  return (
    <div className={`flex tracking-tight ${className}`}>
      {textArray.map((letter, i) => (
        <span key={i} className="rotate-15 whitespace-pre">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default RotalicText;
