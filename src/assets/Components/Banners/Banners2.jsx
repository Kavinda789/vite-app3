import React from "react";
import Banner from "../../Images/Banner2.png";
import { FedeUp } from "../Utility/animation";
import { motion } from "framer-motion";

function Banners() {
  return (
    <section>
      <div
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6
      md:space-y-0 py-14 md:py-24"
      >
        {/* Banner Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FedeUp(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl font-bold uppercase"
            >
              Online Fruit Store
            </motion.h1>
            <motion.p
              variants={FedeUp(0.7)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </motion.p>
            <motion.p
              variants={FedeUp(0.9)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </motion.p>
            <motion.div
              variants={FedeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Download App</button>
            </motion.div>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={Banner}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full
          object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default Banners;
