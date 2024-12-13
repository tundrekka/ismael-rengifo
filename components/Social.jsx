import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import Link from "next/link";

// https://www.upwork.com/freelancers/~012e8787e1e4b6df2e?viewMode=1

const socials = [
  {
    title: "Github",
    icon: <FaGithub />,
    path: "https://github.com/tundrekka/",
  },
  {
    title: "Upwork",
    icon: <SiUpwork />,
    path: "https://www.upwork.com/freelancers/~012e8787e1e4b6df2e",
  },
  { title: "Whatsapp", icon: <FaWhatsapp />, path: "https://wa.link/c427ef" },
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ismael-rengifo-moreno-02b17b20a/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            title={item.title}
            aria-label={item.title}
            target="_blank"
            key={index}
            href={item.path}
            className={iconStyles}
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
