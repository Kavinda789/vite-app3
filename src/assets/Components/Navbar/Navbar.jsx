import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa6";
import { Menu } from "../../assets";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.nav
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div
          className="container flex justify-between items-center py-4
      md:pt-4"
        >
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>
          {/* Menu section */}
          <div className="hidden md:block ">
            <ul className="flex items-center gap-6 text-gray-600">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block py-1
                px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444]
                font-semibold"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <button
                className="text-2xl hover:bg-primary hover:text-white
            rounded-full p-2 duration-300"
              >
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Mobile Menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.nav>
      <ResponsiveMenu open={open} />
    </>
  );
}

export default Navbar;
