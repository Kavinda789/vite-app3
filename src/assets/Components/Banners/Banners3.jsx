import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import BannerBg from "../../Images/banner-bg.jpg";
import { FedeLeft } from "../Utility/animation";
import { motion } from "framer-motion";

const BgStyle = {
  backgroundImage: `url(${BannerBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function Banners3() {
  return (
    <section className="container mb-12">
      <div
        style={BgStyle}
        className="container grid grid-cols-2 md:grid-cols-2 space-y-6
      md:space-y-0 py-14 rounded-3xl"
      >
        {/*Blank div*/}
        <div></div>
        {/* Banner Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FedeLeft(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              {" "}
              Get Fresh Fruits Today
            </motion.h1>
            <motion.p
              variants={FedeLeft(0.7)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </motion.p>

            <motion.div
              variants={FedeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-3">
                <span>
                  <IoBagHandleOutline />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banners3;
