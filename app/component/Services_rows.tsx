import Image from "next/image";
import WindowPhoto from "@/public/photos/IMG_3279.jpeg";
import PanelPhoto from "@/public/photos/IMG_0064.jpeg";
import BirdProofing from "@/public/images/BirdProofing.jpeg"

export default function Services() {
  return (
    <section
      id="pricing"
      className="bg-black px-6 py-12 md:px-8"
    >
      <h1 className="mb-8 text-center text-3xl font-bold text-[#00b2e3]">
        Services
      </h1>

      <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
        {/* Solar Panel Cleaning */}
        <div className="flex w-full flex-col overflow-hidden rounded-lg border border-[#ddd] bg-white shadow-sm md:min-h-[470px] md:flex-row">
          {/* Text */}
          <div className="flex flex-col justify-center p-6 text-center md:w-1/2 md:p-10">
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
          </div>

          {/* Image */}
          <div className="relative h-[320px] w-full md:h-auto md:w-1/2">
            <Image
              src={PanelPhoto}
              alt="Solar Panel Cleaning"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bird Proofing */}
        <div className="flex w-full flex-col overflow-hidden rounded-lg border border-[#ddd] bg-white shadow-sm md:min-h-[470px] md:flex-row">
          {/* Text */}
          <div className="flex flex-col justify-center p-6 text-center md:w-1/2 md:p-10">
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
          </div>

          {/* Image */}
          <div className="relative h-[320px] w-full md:h-auto md:w-1/2">
            <Image
              src={BirdProofing}
              alt="Bird Proofing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Window Cleaning */}
        <div className="flex w-full flex-col overflow-hidden rounded-lg border border-[#ddd] bg-white shadow-sm md:min-h-[470px] md:flex-row">
          {/* Text */}
          <div className="flex flex-col justify-center p-6 text-center md:w-1/2 md:p-10">
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
          </div>

          {/* Image */}
          <div className="relative h-[320px] w-full md:h-auto md:w-1/2">
            <Image
              src={WindowPhoto}
              alt="Window Cleaning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}