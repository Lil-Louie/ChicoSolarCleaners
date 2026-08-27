import Image from "next/image";
import Logo from "@/public/Logo_1.png";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div
        className="
          flex flex-col
          items-center
          gap-5
          px-5
          py-8
          md:flex-row
          md:justify-between
          md:gap-8
        "
      >
        {/* Logo */}
        <a href="/" aria-label="Go to homepage">
          <Image
            src={Logo}
            alt="Chico Solar Cleaners"
            width={440}
            height={200}
            className="h-auto w-[220px] md:w-[250px]"
          />
        </a>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="mb-1 text-xl font-semibold">
            Contact Us
          </h3>

          <p className="text-base">
            <a
              href="mailto:lgalvez1998@yahoo.com"
              className="hover:text-blue-400"
            >
              lgalvez1998@yahoo.com
            </a>
          </p>

          <p className="text-base">
            <a
              href="tel:+17078907349"
              className="hover:text-blue-400"
            >
              (707) 890-7349
            </a>
          </p>
        </div>

        {/* Call Button */}
        <a
          href="tel:+17078907349"
          className="
            rounded
            bg-blue-500
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-600
          "
        >
          Call Now!
        </a>
      </div>
    </footer>
  );
}