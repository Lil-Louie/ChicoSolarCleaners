import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo_1.png";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between">
        {/* Brand */}
        <div className="flex max-w-sm flex-col items-center text-center md:items-start md:text-left">
          <Link href="/" aria-label="Chico Solar Cleaners homepage">
            <Image
              src={Logo}
              alt="Chico Solar Cleaners logo"
              width={440}
              height={200}
              className="h-auto w-[220px] md:w-[250px]"
            />
          </Link>

          <p className="mt-4 text-lg font-semibold">
            Chico Solar Cleaners
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Professional solar panel cleaning, bird proofing, and residential
            window cleaning in Chico, California and surrounding communities.
          </p>
        </div>

        {/* Services */}
        <div className="text-center md:text-left">
          <h2 className="mb-3 text-lg font-semibold">
            Services
          </h2>

          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/#services" className="hover:text-blue-400">
                Solar Panel Cleaning
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-blue-400">
                Solar Panel Bird Proofing
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-blue-400">
                Window Cleaning
              </Link>
            </li>
          </ul>
        </div>

        {/* Service Area */}
        <div className="text-center md:text-left">
          <h2 className="mb-3 text-lg font-semibold">
            Service Area
          </h2>

          <p className="max-w-xs text-sm leading-6 text-slate-300">
            Proudly serving Chico, CA and nearby communities throughout the
            surrounding area.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h2 className="mb-3 text-lg font-semibold">
            Contact
          </h2>

          <address className="not-italic">
            <p className="text-sm">
              <a
                href="mailto:lgalvez1998@yahoo.com"
                className="hover:text-blue-400"
              >
                lgalvez1998@yahoo.com
              </a>
            </p>

            <p className="mt-2 text-sm">
              <a
                href="tel:+17078907349"
                className="hover:text-blue-400"
              >
                (707) 890-7349
              </a>
            </p>
          </address>

          <a
            href="tel:+17078907349"
            className="mt-5 inline-block rounded bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 px-5 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Chico Solar Cleaners. All rights reserved.
      </div>
    </footer>
  );
}
