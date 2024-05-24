"use client";

import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import Nav from "./Nav";
import Socials from "./Socials";

const Header = () => {
  return (
    <header
      id="header"
      className={`header ${styles.header} d-flex align-center fixed-top`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link
          href={"/"}
          className={`logo ${styles.logo} d-flex align-items-center`}
        >
          {/* <Image src={"/"} alt="" /> */}
          <h1>News WebApp</h1>
        </Link>

        <Nav />

        <div className="position-relative">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
