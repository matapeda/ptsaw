"use client";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/images/logo.jpeg"
            alt="Logo"
            width={150}
            height={150}
          />
        </Link>
        <div className={styles.hamburger} onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
          <FaBars />
        </div>
        <ul className={click ? styles.navmenuactive : styles.navmenu}>
          <li className={styles.navitem}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="#" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="#" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="#" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="#" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
