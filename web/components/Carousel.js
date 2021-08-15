import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./CarouselButtons";
import { useEmblaCarousel } from "embla-carousel/react";
import Image from "next/image";
export default function Carousel({ slides }) {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport w-screen" ref={viewportRef}>
        <div className="w-full flex">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <div>
                  <Image
                    // className="embla__slide__img "
                    src={index.src}
                    alt="A cool cat."
                    height="820"
                    width="1100"
                  />
                </div>
                <div className=" bg-gray-900 bg-opacity-60   opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-around items-center   font-semibold">
                  <div className="space-y-6 ">
                    <div className="text-3xl text-white font-bold">
                      {index.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
}
