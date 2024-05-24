import { navLinks } from "@/utils/data";
import style from "./nav.module.css";
import Link from "next/link";
import { Home } from "lucide";

const Nav = () => {
  return (
    <nav id="navbar" className={`${style.navbar}`}>
      <ul>
        {navLinks.map((nav) => {
          return (
            <li key={nav.id}>
              <Link href={nav.link}>
                {nav.name === "home" ? <Home /> : nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
