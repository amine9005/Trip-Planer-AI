"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

type Stack = {
  node: ReactNode;
};

const randomRotateY = () => {
  return Math.floor(Math.random() * 21) - 10;
};
export const ImageStackCarousel = ({
  stack,
  autoplay = false,
}: {
  stack: Stack[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNextCopy = () => {
    setActive((prev) => (prev + 1) % stack.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + stack.length) % stack.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    const handleNext = () => {
      setActive((prev) => (prev + 1) % stack.length);
    };
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, stack.length]);

  return (
    <div className=" relative h-120 w-full ">
      <button
        onClick={handlePrev}
        className="absolute opacity-85 cursor-pointer z-41 top-1/2 hover:scale-110 transition-transform duration-300 flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
      >
        <ArrowLeftIcon className="size-8 text-black transition-transform duration-300  dark:text-neutral-400" />
      </button>
      <button
        onClick={handleNextCopy}
        className="absolute opacity-85 cursor-pointer justify-self-end z-41 top-1/2 hover:scale-110 transition-transform duration-300 flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
      >
        <ArrowRightIcon className="size-8 text-black transition-transform duration-300  dark:text-neutral-400" />
      </button>

      <AnimatePresence>
        {stack.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9,
              z: -100,
              rotate: randomRotateY(),
            }}
            animate={{
              opacity: isActive(index) ? 1 : 0.7,
              scale: isActive(index) ? 1 : 0.95,
              z: isActive(index) ? 0 : -100,
              rotate: isActive(index) ? 0 : randomRotateY(),
              zIndex: isActive(index) ? 40 : stack.length + 2 - index,
              y: isActive(index) ? [0, -80, 0] : 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              z: 100,
              rotate: randomRotateY(),
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="absolute w-full inset-0 origin-bottom"
          >
            {testimonial.node}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
