"use client";

import { useState } from "react";

import Link from "next/link";
import "./header.css";
import Nav from "./nav/Nav";
import Socials from "./socials/Socials";
import SearchForm from "./searchForm/SearchForm";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [on, setOn] = useState(false);

  const handleFormOpen = (e: Event | any) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleToggleMenu = () => {
    setOn(!on);

    let body: HTMLElement | any = document.querySelector("body");
    body.classList.toggle("mobile-nav-active");
  };

  return (
    <header id="header" className="header d-flex align-item-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link href={"/"} className="logo d-flex align-items-center">
          {/* <img src="" alt="" /> */}
          <h1>DigitalNews</h1>
        </Link>
        <Nav />

        <div className="position-relative">
          <Socials />

          <Link
            href={""}
            className="mx-2 js-search-open"
            onClick={handleFormOpen}
          >
            <span className="bi-search" />
          </Link>

          {on ? (
            <i
              className="bi bi-x mobile-nav-toggle"
              onClick={handleToggleMenu}
            ></i>
          ) : (
            <i
              className="bi bi-list mobile-nav-toggle"
              onClick={handleToggleMenu}
            ></i>
          )}

          <SearchForm active={open} formOpen={handleFormOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
