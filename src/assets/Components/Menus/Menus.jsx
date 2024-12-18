import React from "react";
import { MenuData } from "../../assets";
import { motion } from "framer-motion";
import { FedeLeft } from "../Utility/animation";

function Menus() {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {MenuData.map((menu) => (
            <motion.div
              variants={FedeLeft(menu.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)]
            flex flex-row justify-around items-center gap-6"
            >
              <img
                src={menu.ImgLink}
                alt="Image"
                className="w-[60px]
                mb-4 scale-110 transform -translate-y-6"
              />
              <div>
                <h1 className="text-lg font-semibold">{menu.name}</h1>
                <p className="text-lg font-semibold text-secondary">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menus;
