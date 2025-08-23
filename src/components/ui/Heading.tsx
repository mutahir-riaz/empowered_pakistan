"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Heading = ({
  text,
  className,
  colorLastWord,
}: {
  text: string;
  className?: string;
  colorLastWord?: boolean;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div
      ref={ref}
      className="w-full min-h-20 mx-auto flex items-center justify-center text-center overflow-hidden"
    >
      <motion.h1
        className={`${className} w-full inline-block font-bold capitalize py-3 text-6xl`}
        variants={quote}
        initial="initial"
        animate={inView ? "animate" : "initial"}
      >
        {text.split(" ").map((word: string, ind: number) => (
          <motion.span className="inline-block" key={ind} variants={singleWord}>
            {colorLastWord && ind === text.split(" ").length - 1 ? (
              <span className="text-ourDarkBlue">{word}</span>
            ) : (
              <span>{word}&nbsp;</span>
            )}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default Heading;
