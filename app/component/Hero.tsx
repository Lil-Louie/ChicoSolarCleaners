"use client";

import Image from "next/image";
import HeroBackground from "@/public/carouselPhotos/Car_2.jpeg";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-105px)] items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.1,
          ease: "easeOut",
        }}
      >
        <Image
          src={HeroBackground}
          alt="Professional solar panel cleaning in Chico, California"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-slate-700/45" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-14 text-center text-white"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1,
            },
          },
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            },
          }}
          className="text-xl font-bold tracking-[0.12em] drop-shadow-md md:text-2xl"
        >
          CHICO SOLAR CLEANERS
        </motion.p>

        <motion.h1
          id="hero-heading"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="mt-4 max-w-5xl text-4xl font-extrabold leading-tight drop-shadow-md md:text-6xl"
        >
          Professional Solar Panel Cleaning in Chico, CA
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            },
          }}
          className="mt-6 max-w-3xl text-lg font-semibold leading-relaxed drop-shadow md:text-xl"
        >
          Solar panel cleaning, bird proofing, and window cleaning for homes
          throughout Chico and surrounding communities. Backed by 3 years of
          experience and professional deionized-water cleaning equipment.
        </motion.p>

        <motion.a
          href="tel:+17078907349"
          variants={{
            hidden: { opacity: 0, scale: 0.94, y: 15 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-7 rounded border border-white px-6 py-4 font-bold transition-colors hover:bg-white hover:text-black"
        >
          Get a Free Estimate
        </motion.a>
      </motion.div>
    </section>
  );
}