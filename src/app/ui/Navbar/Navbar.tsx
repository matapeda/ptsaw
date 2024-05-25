import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import dynamic from "next/dynamic";
import Image from "next/image";

const DynamicToggle = dynamic(() => import("../ThemeToggle"), {
  ssr: false,
});

const Navbar: React.FC = () => {
  return (
    <div className="navbar fixed text-white bg-[#1b93d0] z-10">
      <div className="navbar-start">
        <div className="dropdown z-[1]">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 rounded-box w-52"
          >
            <li>
              <Link href="/about">Tentang</Link>
            </li>
            <li>
              <Link href="/services">Layanan</Link>
            </li>
            <li>
              <Link href="/project">Proyek</Link>
            </li>
            <li>
              <Link href="/contact">Kontak</Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <Image src="/images/logo.jpeg" alt="logo" width={50} height={50} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-slate-500 rounded-md">
            <Link href="/about">Tentang</Link>
          </li>
          <li className="hover:bg-slate-500 rounded-md">
            <Link href="/services">Layanan</Link>
          </li>
          <li className="hover:bg-slate-500 rounded-md">
            <Link href="/project">Proyek</Link>
          </li>
          <li className="hover:bg-slate-500 rounded-md">
            <Link href="/contact">Kontak</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <DynamicToggle />
      </div>
    </div>
  );
};

export default Navbar;
