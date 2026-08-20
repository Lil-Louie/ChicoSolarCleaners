import { useState } from "react";

const faqData = [
  {
    question: "How often should solar panels be cleaned?",
    answer:
      "It is recommended to clean solar panels at least twice a year, but this can vary based on your location and the amount of dust or debris they typically collect.",
  },
  {
    question: "Can dirty solar panels really affect their energy output?",
    answer:
      "Yes, dirt and debris on solar panels can reduce their efficiency significantly. Regular cleaning ensures that they operate at optimal performance, which translates into better energy generation.",
  },
  {
    question: "Are your cleaning methods safe for my solar panels?",
    answer:
      "Absolutely, we use gentle yet effective cleaning techniques and a specialized brush designed for use on solar panels. Our process will protect your solar panels while thoroughly removing dirt and grime.",
  },
  {
    question: "How long does a typical solar panel cleaning take?",
    answer:
      "The duration depends on the number of panels and their accessibility. Typically, the cleaning process can take anywhere from 45 minutes to two hours.",
  },
  {
    question: "Do I need to be at home when you provide the cleaning service?",
    answer:
      "While it's not necessary for you to be home, we require access to your property. Arrangements can be made to ensure the service is performed smoothly, whether or not you are present.",
  },
];

export default function FAQsection() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-white px-8 py-16">
      <h1 className="text-center text-3xl font-bold text-[#00b2e3]">
        Frequently Asked Questions
      </h1>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-8 px-4 py-8 md:grid-cols-2">
        {faqData.map((item, index) => {
          const isLast = index === faqData.length - 1;
          const isTotalOdd = faqData.length % 2 === 1;
          const isFullSpan = isLast && isTotalOdd;

          const isOpen = openIndexes.includes(index);

          return (
            <div
              key={index}
              onClick={() => toggle(index)}
              className={`
                flex min-h-[75px] w-full self-start cursor-pointer flex-col
                overflow-hidden rounded-[10px] border border-black
                bg-[#111] text-white md:w-3/4

                ${
                  isFullSpan
                    ? "md:col-span-2 md:mx-auto md:max-w-[600px]"
                    : index % 2 === 0
                    ? "md:justify-self-end"
                    : "md:justify-self-start"
                }
              `}
            >
              {/* Question */}
              <div className="flex min-h-[75px] items-center justify-between bg-black px-6 py-4 font-semibold text-white">
                <strong>{item.question}</strong>

                <span className="ml-4 shrink-0">
                  {isOpen ? "▲" : "▼"}
                </span>
              </div>

              {/* Answer */}
              {isOpen && (
                <div className="bg-[#00b2e3] px-6 py-4 text-[0.95rem] text-black">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}