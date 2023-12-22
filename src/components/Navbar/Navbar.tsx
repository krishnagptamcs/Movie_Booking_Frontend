import React from "react";
import logo from ".././../assets/logo.png";
import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <section>
      <nav>
        <div className="w-11/12 mx-auto flex items-center justify-between">
          {/* left part */}
          <div className="flex items-center gap-3">
            <Image src={logo} alt="image" />
            <input type="search" />
          </div>

          {/*  right part  */}

          <div className="flex items-center gap-3">
            <p>Location</p>
            <button>Logout</button>
            <i>
              <FaRegCircleUser />
            </i>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
