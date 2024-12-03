import React from "react";
import { FaLeaf, FaFacebook, FaTwitter, FaInstagram,FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-primary/10 py-12 mt-12">
      <div className="container flex justify-between items-center">
        {/* Logo section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>
        {/* social icons section */}
        <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
}

export default Footer;
