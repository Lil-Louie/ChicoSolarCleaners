import Image from "next/image";
import Logo from "@/public/Logo_1.png";

export default function Header() {
  return (
    <header className="navbar flex justify-between items-center w-full border bg-black">
      <div className="navbar-left ">
        <a href="/" className="Chico-logo" aria-label="Go to homepage">
          <Image
            src={Logo}
            alt="Chico Solar Cleaners"
            width={440}
            height={200}
            priority
            className="h-auto w-[180px] md:w-[220px] mx-5"
          />
        </a>
      </div>


        <div className="navbar-right mx-5 text-white rounded py-2 px-4 bg-blue-500">
          <a href="tel:+17078907349" className="call-button">
            Call Now!
          </a>
        </div>

    </header>

  );
}

