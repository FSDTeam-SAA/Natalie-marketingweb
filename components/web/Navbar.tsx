import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-20 w-full">
      <nav className="mx-auto flex w-full max-w-[1640px] items-center justify-between gap-4 px-4 py-5 sm:px-8 lg:px-[7.2vw] lg:py-8">
        <Link
          href="/"
          className="font-playfair shrink-0 text-2xl font-semibold italic text-white sm:text-[28px]"
        >
          <Image
            src="/images/logo.png"
            alt="Elysia Logo"
            width={1000}
            height={1000}
            className="w-[120px] h-[48px] "
          />
        </Link>

        <Link
          href="#waitlist"
          className="font-inter rounded-full border border-[#C2384F] px-4 py-2.5 text-center text-[11px] font-medium text-white transition hover:bg-[#ff2f70] sm:px-6 sm:text-base"
        >
          Join the Waitlist
        </Link>
      </nav>
    </header>
  );
}
