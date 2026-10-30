"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  JSX,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useOutsideClick } from "@/hooks/imported/use-outside-click";
import { BlurImageMolecule } from "@/components/ui/molecules/blur-image/BlurImage.molecule";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/atoms/dialog/dialog";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 scrollbar-none md:pt-20 md:pb-10"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <BlurFade
                delay={0.1 + index * 0.1}
                inView
                onlyOnce={false}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </BlurFade>
            ))}
          </div>
        </div>
        <BlurFade delay={0.2} onlyOnce={false} inView>
          <div className="mr-10 flex justify-end gap-2">
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
              <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
            </button>
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </BlurFade>
      </div>
    </CarouselContext.Provider>
  );
};

export const AppleCard = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {
    onCardClose,
    // currentIndex
  } = useContext(CarouselContext);

  useEffect(() => {
    const handleClose = () => {
      setOpen(false);
      onCardClose(index);
    };
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };
  useOutsideClick(containerRef, () => handleClose());

  return (
    <Dialog>
      <DialogTrigger>
        <motion.button
          layoutId={layout ? `card-${card.title}` : undefined}
          onClick={handleOpen}
          className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-160 md:w-96 dark:bg-neutral-900"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-linear-to-b from-black/50 via-transparent to-transparent" />
          <div className="relative z-40 p-8">
            <motion.p
              layoutId={layout ? `category-${card.category}` : undefined}
              className="text-left font-sans text-sm font-medium text-white md:text-base"
            >
              {card.category}
            </motion.p>
            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-balance text-white md:text-3xl"
            >
              {card.title}
            </motion.p>
          </div>
          <BlurImageMolecule
            src={card.src}
            url={card.src}
            alt={card.title}
            width={240}
            height={360}
            className="absolute inset-0 z-10 object-cover"
          />
        </motion.button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        ref={containerRef}
        className="max-h-[85vh] md:m-1 lg:m-2 overflow-scroll scrollbar-none max-sm:w-80 max-w-xl lg:max-w-3xl rounded-3xl "
      >
        <DialogClose>
          <button
            className="top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
            onClick={handleClose}
          >
            <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
          </button>
        </DialogClose>
        <motion.p
          layoutId={layout ? `category-${card.title}` : undefined}
          className="text-base font-medium text-black dark:text-white"
        >
          {card.category}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
        >
          {card.title}
        </motion.p>
        <div className="py-10">{card.content}</div>
      </DialogContent>
    </Dialog>
  );
};
