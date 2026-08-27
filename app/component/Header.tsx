import Image from "next/image";
import Logo from "@/public/Logo_1.png";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-black px-4 py-3 md:px-6">
      <a href="/" aria-label="Go to homepage">
        <Image
          src={Logo}
          alt="Chico Solar Cleaners"
          width={440}
          height={200}
          priority
          className="h-auto w-[170px] sm:w-[190px] md:w-[220px]"
        />
      </a>

      <a
        href="tel:+17078907349"
        className="whitespace-nowrap rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
      >
        Call Now!
      </a>
    </header>
  );
}