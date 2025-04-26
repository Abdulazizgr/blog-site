"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [sheetOpen, setSheetOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 py-5  bg-white ">
      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
      </Link>

      <div className="lg:hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger>
            <Button variant="outline" size="icon">
              <Menu className="w-6 h-6 text-gray-800" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[250px] sm:w-[400px] p-6">
            <DialogTitle className="text-lg font-bold text-gray-800 mb-4">
              {/* Menu */}
            </DialogTitle>
            <div className="flex flex-col items-start gap-6 mt-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-primary-purple font-bold"
                      : "text-dark"
                  } hover:text-primary-purple`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col justify-between space-y-4 w-full">
                <div className="flex justify-between items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClick}
                    aria-label={isOpen ? "Hide search" : "Show search"}
                  >
                    <Search
                      className={`text-gray-800 ${
                        isOpen ? "text-primary-purple" : ""
                      }`}
                    />
                  </Button>

                  <Input className={`${isOpen ? "hidden" : "block"} w-full`} />
                </div>
                <div>
                  <Button
                    variant="default"
                    className="bg-primary-purple hover:bg-primary-purple/90  text-white "
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex items-center justify-between space-x-12">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-primary-purple font-bold"
                : "text-dark"
            } hover:text-primary-purple`}
          >
            {link.label}
          </Link>
        ))}

        <div className="flex items-center space-x-8">
          <div className="flex justify-between items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClick}
              aria-label={isOpen ? "Hide search" : "Show search"}
            >
              <Search
                className={`text-gray-800  ${
                  isOpen ? "text-primary-purple" : ""
                }`}
              />
            </Button>
            <Input className={`${isOpen ? "hidden" : "block"} w-48`} />
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
