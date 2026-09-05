"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const faqData = [
  {
    question: "How often should solar panels be cleaned in Chico, CA?",
    answer:
      "For many homes in Chico, cleaning solar panels about once or twice a year is a good starting point. Dust, pollen, bird droppings, nearby trees, wildfire ash, and other debris can make more frequent cleaning useful depending on your property.",
  },
  {
    question: "Can dirty solar panels affect energy production?",
    answer:
      "Yes. Dirt, dust, pollen, bird droppings, and other buildup can reduce the amount of sunlight reaching your solar panels. Keeping the surface clean can help your system operate as effectively as possible.",
  },
  {
    question: "Are your solar panel cleaning methods safe?",
    answer:
      "Yes. We use purified deionized water and specialty brushes designed for solar panel cleaning. Our process avoids harsh cleaning chemicals and is designed to safely remove dirt and buildup without leaving mineral spots or residue.",
  },
  {
    question: "How long does solar panel cleaning usually take?",
    answer:
      "Most residential solar panel cleaning appointments take roughly 45 minutes to two hours. The exact time depends on the number of panels, roof layout, panel accessibility, and the amount of buildup.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Usually not. As long as we have the necessary access to your property and any required gates, we can often complete the service while you are away. We can confirm access details with you before your appointment.",
  },
  {
    question: "Do you provide solar panel cleaning outside of Chico?",
    answer:
      "Yes. Chico Solar Cleaners serves Chico and surrounding communities. Contact us with your location and we can let you know if your property is within our current service area.",
  },
  {
    question: "Do you offer bird proofing for solar panels?",
    answer:
      "Yes. We provide solar panel bird proofing designed to help prevent birds from nesting underneath solar arrays. Protective barriers can help reduce nesting debris, droppings, and other problems caused by birds living under panels.",
  },
  {
    question: "Do you also provide window cleaning?",
    answer:
      "Yes. In addition to solar panel cleaning and bird proofing, we offer residential window cleaning in Chico and surrounding communities. Contact us for a free estimate.",
  },
];

export default function FAQsection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="overflow-hidden bg-white px-8 py-16"
    >
      <motion.h2
        id="faq-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="text-center text-3xl font-bold text-[#00b2e3]"
      >
        Solar Panel Cleaning FAQs
      </motion.h2>

      <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-slate-700">
        Answers to common questions about solar panel cleaning, bird proofing,
        and exterior cleaning services in Chico, California.
      </p>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-8 px-4 py-8 md:grid-cols-2">
        {faqData.map((item, index) => {
          const isLast = index === faqData.length - 1;
          const isTotalOdd = faqData.length % 2 === 1;
          const isFullSpan = isLast && isTotalOdd;
          const isOpen = openIndexes.includes(index);

          const answerId = `faq-answer-${index}`;

          return (
            <motion.div
              key={item.question}
              initial={{
                opacity: 0,
                y: 30,
                x: index % 2 === 0 ? -20 : 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.01,
              }}
              className={`
                flex w-full self-start flex-col overflow-hidden rounded-[10px]
                border border-black bg-[#111] text-white md:w-3/4

                ${
                  isFullSpan
                    ? "md:col-span-2 md:mx-auto md:max-w-[600px]"
                    : index % 2 === 0
                      ? "md:justify-self-end"
                      : "md:justify-self-start"
                }
              `}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="flex min-h-[75px] w-full items-center justify-between bg-black px-6 py-4 text-left font-semibold text-white"
              >
                <span>{item.question}</span>

                <motion.span
                  aria-hidden="true"
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="ml-4 shrink-0"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={answerId}
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="overflow-hidden bg-[#00b2e3] text-black"
                  >
                    <motion.div
                      initial={{ y: -8 }}
                      animate={{ y: 0 }}
                      exit={{ y: -8 }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="px-6 py-4 text-[0.95rem] leading-6"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
