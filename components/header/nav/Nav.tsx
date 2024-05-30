import { navLinks } from "@/utils/navLinksUtils";
import "./nav.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        {navLinks.map((nav) => {
          return (
            <Link href={nav.link}>
              {nav.name === "Home" ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
