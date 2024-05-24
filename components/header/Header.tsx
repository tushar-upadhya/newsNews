"use client";

import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link href={"/"} className="logo d-flex align-items-center">
          <Image sc />
        </Link>
      </div>
    </header>
  );
};

export default Header;
