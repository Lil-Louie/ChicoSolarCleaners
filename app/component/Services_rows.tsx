"use client";

import Image from "next/image";
import WindowPhoto from "@/public/CarouselPhotos/Car_6.jpeg";
import PanelPhoto from "@/public/CarouselPhotos/Car_1.jpeg";
import BirdProofing from "@/public/images/BirdProofing.jpeg";
import { motion } from "motion/react";

export default function Services() {
  return (
    <section
      id="pricing"
      className="overflow-hidden bg-black px-6 py-12 md:px-8"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="mb-8 text-center text-3xl font-bold text-[#00b2e3]"
      >
        Services
      </motion.h1>

      <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
        {/* Solar Panel Cleaning */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="flex w-full flex-col overflow-hidden rounded-lg border border-[#ddd] bg-white shadow-sm md:min-h-[470px] md:flex-row"
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="flex flex-col justify-center p-6 text-center md:w-1/2 md:p-10"
          >
            <h3 className="mb-4 text-[1.7rem] font-bold text-[#00b2e3]">
              Expert Residential Solar Panel Cleaning
            </h3>

            <p className="mb-5 text-[1.1rem] leading-7 text-black">
              We employ the safest and most effective method currently
              available for cleaning solar panels. Our approach is entirely
              free of chemicals, utilizing deionized water filtration along
              with specialty bristled brushes specifically crafted for solar
              panel maintenance. This technique guarantees adherence to all
              warranty stipulations and yields outstanding results, enabling
              your solar system to function at peak efficiency.
            </p>

            <p className="text-[1.1rem] text-black">
              <strong>Single Story Home:</strong> $125 (Up to 20 panels)
              <br />
              <strong>Two Story Home:</strong> $175 (Up to 20 panels)
            </p>
          </motion.div>

          {/* Image */}
          <div className="relative h-[320px] w-full overflow-hidden md:h-auto md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 1.05, x: 25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src={PanelPhoto}
                alt="Solar Panel Cleaning"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Bird Proofing */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="flex w-full flex-col overflow-hidden rounded-lg border border-[#ddd] bg-white shadow-sm md:min-h-[470px] md:flex-row"
        >
          {/* Image - first on desktop */}
          <div className="relative h-[320px] w-full overflow-hidden md:order-1 md:h-auto md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 1.05, x: -25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src={BirdProofing}
                alt="Bird Proofing"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="flex flex-col justify-center p-6 text-center md:order-2 md:w-1/2 md:p-10"
          >
            <h3 className="mb-4 text-[1.7rem] font-bold text-[#00b2e3]">
              Solar Panel Bird Proofing
            </h3>

            <p className="mb-5 text-[1.1rem] leading-7 text-black">
              Don’t let birds compromise the efficiency and longevity of your
              solar panels! Our expert bird-proofing services are designed to
              safeguard your solar investment from nesting debris, droppings,
              and damage caused by persistent pests.
            </p>

            <p className="mb-5 text-[1.1rem] leading-7 text-black">
              Our team uses durable, eco-friendly solutions to create an
              effective barrier around your solar panels without harming
              wildlife. From stainless steel mesh to custom deterrents, we
              provide a seamless, non-invasive installation to ensure lasting
              protection.
            </p>

            <p className="text-[1.1rem] text-black">
              <strong>*Prices Starting at $6.50 Per Linear Foot</strong>
            </p>
          </motion.div>
        </motion.div>

        {/* Window Cleaning */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="flex w-full flex-col overflow-hidden rounded-lg border border-[#ddd] bg-white shadow-sm md:min-h-[470px] md:flex-row"
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="flex flex-col justify-center p-6 text-center md:w-1/2 md:p-10"
          >
            <h3 className="mb-4 text-[1.7rem] font-bold text-[#00b2e3]">
              Window Cleaning
            </h3>

            <p className="mb-5 text-[1.1rem] leading-7 text-black">
              Keep your windows looking clean, clear, and bright with our
              professional window cleaning service. We remove dirt, buildup,
              and grime to improve the appearance of your home.
            </p>

            <p className="text-[1.1rem] text-black">
              <strong>Call to get an estimate</strong>
            </p>
          </motion.div>

          {/* Image */}
          <div className="relative h-[320px] w-full overflow-hidden md:h-auto md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 1.05, x: 25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src={WindowPhoto}
                alt="Window Cleaning"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}