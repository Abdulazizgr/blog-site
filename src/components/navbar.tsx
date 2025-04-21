"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  const links = [
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="flex justify-between items-center px-28 py-5  bg-white ">
      <div>
        <Image src="/images/image1.png" alt="Logo" width={100} height={100} />
      </div>
      <div className="flex items-center justify-between space-x-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-primary-purple font-bold"
                : "text-dark"
            } hover:text-primary-purple`}
          >
            {link.label}
          </a>
        ))}

        <div className="flex items-center space-x-8">
          <div className="flex justify-between items-center space-x-4">
            <Search onClick={handleClick} className="text-dark" />

            <Input className={`${isOpen ? "hidden" : "block"}`} />
          </div>
          <Button
            variant="default"
            className="bg-primary-purple hover:bg-primary-purple/90 text-white "
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
