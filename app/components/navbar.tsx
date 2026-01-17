import React from "react";
import Logo from "./logo";
import Button from "./button";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";

const Navbar = ({ className }: { className: string }) => {
  return (
    <nav
      aria-label="Main navigation"
      className={`flex justify-between px-8 py-4 text-neutral-100 items-center ${className}`}
    >
      <ul className="flex gap-8 items-center">
        <li>
          <Logo className="w-40" />
        </li>
        <li>
          <Link href={"/"} className=" hover:text-logo">
            Product
          </Link>
        </li>
        <li>
          <button
            type="button"
            className=" hover:text-logo flex gap-1 items-center"
          >
            Solutions <MdArrowDropDown />
          </button>
        </li>
        <li>
          <button
            type="button"
            className=" hover:text-logo flex gap-1 items-center"
          >
            Resources <MdArrowDropDown />
          </button>
        </li>
        <li>
          <Link href={"/"} className=" hover:text-logo">
            Enterprise
          </Link>
        </li>
        <li>
          <Link href={"/"} className=" hover:text-logo">
            Pricing
          </Link>
        </li>
      </ul>

      <ul className="flex gap-8 items-center">
        <li>
          <button type="button" className=" hover:text-logo">
            Book Link demo
          </button>
        </li>
        <li aria-hidden="true" className="w-px self-stretch flex items-center">
          <div className="w-px h-1/2 border"></div>
        </li>

        <li>
          <Link href={"/"} className=" hover:text-logo">
            Log in
          </Link>
        </li>
        <li>
          <Button
            textColor="text-primary-400"
            bgColor="bg-primary-200"
            bgColorHover="hover:bg-background-200"
          >
            Try for free
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
