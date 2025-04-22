import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-4 md:px-10 lg:px-20 py-12">
      <div className="flex justify-center items-center ">
        <Image
          src="/images/image1.png"
          alt="Logo"
          width={100}
          height={100}
          className=" "
        />
      </div>

      <div className="flex flex-row gap-8 sm:gap-16 px-2">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-dark text-sm sm:text-xl hover:text-primary-purple"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-row  gap-8 sm:gap-16">
        <SocialIcon
          url="https://facebook.com"
          style={{ width: 36, height: 36 }}
          bgColor="#7C4EE4"
        />
        <SocialIcon
          url="https://youtube.com"
          style={{ width: 36, height: 36 }}
          bgColor="#7C4EE4"
        />
        <SocialIcon
          url="https://linkedin.com"
          style={{ width: 36, height: 36 }}
          bgColor="#7C4EE4"
        />
        <SocialIcon
          url="https://instagram.com"
          style={{ width: 36, height: 36 }}
          bgColor="#7C4EE4"
        />
      </div>
      <div className="pt-4 border-b-2 border-primary-purple w-full"></div>
      <p className="pb-3 text-xs">
        Copyright Ideapeel Inc © 2023. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
