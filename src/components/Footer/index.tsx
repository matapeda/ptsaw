import React from "react";
import "./Footer.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[#0a4275] text-center text-white">
      <div className="w-full bg-black/20 p-4 text-center">
        © {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
