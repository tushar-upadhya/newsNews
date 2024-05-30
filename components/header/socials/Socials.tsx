import { socials } from "@/utils/socialsUtils";
import "./socials.css";
import Link from "next/link";

const Socials = () => {
  return (
    <>
      {socials.map((social) => {
        <Link
          href={social.link}
          key={social.id}
          target="_blank"
          className="mx-2"
        >
          <span className={social.icon} />
        </Link>;
      })}
    </>
  );
};

export default Socials;
