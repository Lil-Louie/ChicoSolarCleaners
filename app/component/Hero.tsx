import Image from "next/image";
import logo from "@/public/images/logo.png";
import HeroBackground from "@/public/photos/IMG_0068.jpeg";

export default function Hero() {
  return (
<section
  className="relative flex min-h-[calc(100vh-105px)] items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url(${HeroBackground.src})`,
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-700/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-14 text-center text-white">
        {/* Logo */}
        <div className="mb-6 w-full max-w-[850px] bg-white shadow-sm ">
        </div>

        {/* Welcome */}
        <h2 className="text-4xl font-bold tracking-[0.12em] drop-shadow-md md:text-6xl">
          WELCOME TO
        </h2>

        {/* Business name */}
        <h1 className="mt-4 text-5xl font-extrabold tracking-[0.08em] drop-shadow-md md:text-7xl">
          CHICO SOLAR CLEANERS
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-4xl text-lg font-semibold italic leading-relaxed drop-shadow md:text-2xl">
          We have 3 years of experience in cleaning solar panels and windows!
        </p>

        {/* Call button */}
        <a
          href="tel:+17078907349"
          className="mt-5 rounded border border-white px-6 py-4 font-bold transition hover:bg-white hover:text-black"
        >
          Contact Us Now!
        </a>

      </div>
    </section>
  );
}