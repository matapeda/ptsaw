"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import "./Navbar.scss";
import Link from "next/link";

const Navbar = () => {
  //setting mobile navbar
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //change navbar color on scroll
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);

    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  //close menu on click
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image src="/images/logo.jpeg" alt="logo" width={150} height={150} />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#fff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" onClick={closeMenu}>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
