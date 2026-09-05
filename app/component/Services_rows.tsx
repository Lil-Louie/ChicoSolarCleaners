"use client";

import Image from "next/image";
import WindowPhoto from "@/public/carouselPhotos/Car_6.jpeg";
import PanelPhoto from "@/public/carouselPhotos/Car_1.jpeg";
import BirdProofing from "@/public/images/BirdProofing.jpeg";
import { motion } from "motion/react";

export default function ServicesRows() {
  return (
    <section
      id="pricing"
      className="overflow-hidden bg-black px-6 py-12 md:px-8"
    >
      <motion.h2
        id="services-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="mb-8 text-center text-3xl font-bold text-[#00b2e3]"
      >
        Solar Panel Cleaning & Exterior Cleaning Services
      </motion.h2>

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
              Residential Solar Panel Cleaning in Chico
            </h3>

            <p className="mb-5 text-[1.1rem] leading-7 text-black">
              Keep your solar panels clean and performing their best with
              professional solar panel cleaning in Chico, CA. We use purified
              deionized water and specialty solar-safe brushes to remove dust,
              pollen, dirt, bird droppings, and other buildup without harsh
              chemicals.
            </p>

            <p className="mb-5 text-[1.1rem] leading-7 text-black">
              Our cleaning process is designed to be safe for residential solar
              systems while leaving panels clean and streak-free.
            </p>

            <p className="text-[1.1rem] text-black">
              <strong>Single Story Home:</strong> $125 (Up to 20 panels)
              <br />
              <strong>Two Story Home:</strong> $175 (Up to 20 panels)
            </p>
          </motion.div>

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
                alt="Residential solar panel cleaning in Chico, CA"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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
                alt="Bird proofing installed around residential solar panels"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>

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
              Protect your solar panels from nesting birds, droppings, debris,
              and damage with professional solar panel bird proofing.
            </p>

            <p className="mb-5 text-[1.1rem] leading-7 text-black">
              We install durable protective barriers around the perimeter of
              your solar array to help keep birds from nesting underneath your
              panels while maintaining a clean, low-profile appearance.
            </p>

            <p className="text-[1.1rem] text-black">
              <strong>Prices starting at $6.50 per linear foot</strong>
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
              Window Cleaning in Chico
            </h3>

            <p className="mb-5 text-[1.1rem] leading-7 text-black">
              Keep your windows clean, clear, and bright with professional
              window cleaning in Chico. We remove dirt, dust, buildup, and grime
              to improve the appearance of your home and give you a clearer
              view.
            </p>

            <p className="text-[1.1rem] text-black">
              <strong>Call for a free estimate</strong>
            </p>
          </motion.div>

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
                alt="Professional residential window cleaning in Chico"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}