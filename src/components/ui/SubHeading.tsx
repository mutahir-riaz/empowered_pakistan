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
      className={`text-5xl text-ourDarkestBlue text-center w-full p-4 font-semibold ${className}`}
    >
      {text}
    </h2>
  );
};

export default SubHeading;
