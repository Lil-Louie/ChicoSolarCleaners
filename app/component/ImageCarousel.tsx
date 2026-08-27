"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "motion/react";

export default function ImageCarousel() {
  const images = [
    "/carouselPhotos/Car_1.jpeg",
    "/carouselPhotos/Car_2.jpeg",
    "/carouselPhotos/Car_3.jpeg",
    "/carouselPhotos/Car_4.jpeg",
    "/carouselPhotos/Car_5.jpeg",
    "/carouselPhotos/Car_6.jpeg",
  ];

  const desktopSlides = [];

  for (let i = 0; i < images.length; i += 2) {
    desktopSlides.push([images[i], images[i + 1]]);
  }

  return (
    <section className="w-full overflow-hidden bg-black">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="pb-12 pt-8 text-center text-3xl font-bold text-[#00b2e3]"
      >
        Gallery
      </motion.h1>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
        className="md:hidden"
      >
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={600}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="relative h-[70vh] w-full bg-black"
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </Carousel>
      </motion.div>

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
        className="hidden md:block"
      >
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={600}
        >
          {desktopSlides.map((pair, i) => (
            <div
              key={i}
              className="flex h-[80vh] w-full bg-black"
            >
              <div className="relative h-full w-1/2">
                <Image
                  src={pair[0]}
                  alt={`Gallery image ${i * 2 + 1}`}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>

              {pair[1] && (
                <div className="relative h-full w-1/2">
                  <Image
                    src={pair[1]}
                    alt={`Gallery image ${i * 2 + 2}`}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
}