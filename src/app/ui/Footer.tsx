import Link from "next/link";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link href="/about" className="link link-hover">
            Tentang
          </Link>
          <Link href="/contact" className="link link-hover">
            Kontak
          </Link>
          <Link href="/project" className="link link-hover">
            Proyek
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link
              href="https://www.instagram.com/ptsaw.id/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram className="text-2xl" />
            </Link>
            <a>
              <IoLogoYoutube className="text-2xl" />
            </a>
            <a>
              <FaFacebookF className="text-2xl" />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by PTSAW</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
