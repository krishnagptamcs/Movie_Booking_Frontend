import React from "react";
import logo from ".././../assets/logo.png";
import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="bg-black/20">
      <nav>
        <div className="w-11/12 mx-auto flex items-center justify-between ">
          {/* left part */}
          <div className="flex items-center gap-6 p-3 ">
            <Image src={logo} alt="image" className="w-[150px]" />
            <input
              type="search"
              className="border-2 rounded-md bg-gray-200 p-1 "
              placeholder="Search....."
            />
          </div>

          {/*  right part  */}

          <div className="flex items-center gap-6">
            <p>Location</p>
            <button className="bg-[#f84464] px-3 py-2 text-white rounded-md">
              Logout
            </button>
            <Link href=""  className="text-2xl">
              <FaRegCircleUser />
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
