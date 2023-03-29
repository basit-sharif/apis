import { NavbarData, NavbarDataType } from "@/components/typesAndArrays/navbarData";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mt-7 ml-0 sm:ml-20 ring-1 ring-offset-4 ring-offset-purple-100 shadow-md rounded-full w-full sm:w-[30rem] px-2 sm:px-4 py-2 flex justify-center items-center gap-4 sm:gap-7 font-serif text-base sm:text-lg">
      {NavbarData.map((item: NavbarDataType, index: number) =>
        <Link key={index+2} href={item.href ? item.href : "/"} className="hover:-mt-2 duration-200 text-gray-800 hover:text-[#2a1479]">{item.label}</Link>
      )}
    </div>
  )
}