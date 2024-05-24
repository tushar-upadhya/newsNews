import { socials } from "@/utils/data";
import style from "./socials.module.css";
import Link from "next/link";

const Socials = () => {
  return (
    <>
      {socials.map((social) => {
        return (
          <Link href={social.link} key={social.id} target="_blank">
            {social.icon}
          </Link>
        );
      })}
    </>
  );
};

export default Socials;
