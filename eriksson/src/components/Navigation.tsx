import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-start items-center p-8 fixed w-full z-10 bg-transparent text-white  w-full">
      <div className="flex items-center space-x-4">
        <Link
          href="/"
          className="font-semibold text-2xl hover:text-blue-300 transition-colors duration-200"
        >
          Start
        </Link>
      </div>
      <div className="space-x-4 pl-8">
        <Link
          href="/about"
          className="text-lg hover:text-blue-300 transition-colors duration-200"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="text-lg hover:text-blue-300 transition-colors duration-200"
        >
          Contact
        </Link>
        <Link
          href="/customers"
          className="text-lg hover:text-blue-300 transition-colors duration-200"
        >
          Our Customers
        </Link>
      </div>
    </nav>
  );
}
