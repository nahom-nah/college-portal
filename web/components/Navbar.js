import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className=" bg-gradient-to-r z-10 from-blue-200 via-white to-white top-0 h-16 w-screen fixed">
      <nav className="px-2  py-2 flex justify-between items-center md:px-16 ">
        <div className="w-24">
          <Image src="/logo.png" alt="logo" height="628" width="1100" />
        </div>

        <ul className="lg:flex  space-x-4 hidden">
          <li className="hover:bg-gray-100 px-3 py-1 rounded-md">
            <Link href="/home">
              <span className="font-semibold text-gray-700">Home</span>
            </Link>{" "}
          </li>
          <li className="hover:bg-gray-100 px-3 py-1 rounded-md">
            <Link href="/home">
              <span className="font-semibold text-gray-700">Accreditation</span>
            </Link>{" "}
          </li>
          <li className="hover:bg-gray-100 px-3 py-1 rounded-md">
            <Link href="/home">
              <span className="font-semibold text-gray-700">Programs</span>
            </Link>{" "}
          </li>
          <li className="hover:bg-gray-100 px-3 py-1 rounded-md">
            <Link href="/home">
              <span className="font-semibold text-gray-700">How It Works</span>
            </Link>{" "}
          </li>
          <li className="hover:bg-gray-100 px-3 py-1 rounded-md">
            <Link href="/home">
              <span className="font-semibold text-gray-700">About</span>
            </Link>{" "}
          </li>
          <li className="hover:bg-gray-100 px-3 py-1 rounded-md">
            <Link href="/home">
              <span className="font-semibold text-gray-700">Contact</span>
            </Link>{" "}
          </li>
        </ul>
        <div className="space-x-2 flex items-center">
          <button className="px-8 hidden lg:inline-block py-1 rounded-md bg-blue-700 text-white font-semibold">
            Apply Now
          </button>
          <button className="px-4 py-1 rounded-md border">Sign In</button>{" "}
          <button className="md:hidden">
            <MenuIcon className="h-6 text-gray-900 " />
          </button>
        </div>
      </nav>
    </div>
  );
}
