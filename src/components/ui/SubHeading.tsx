import React from "react";

const SubHeading = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-5xl text-ourDarkestBlue text-center w-full p-2 md:p-4 font-bold ${className}`}
    >
      {text}
    </h2>
  );
};

export default SubHeading;
