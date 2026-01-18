import React from "react";
import toggleLogo from "@/public/download.svg";
import Image from "next/image";
import clsx from "clsx";

const Footer = () => {
  return (
    <div className="flex px-20 py-10 gap-16 bg-background-200/90 items-start">
      <Image src={toggleLogo} alt="toggle logo" width={50} />

      <div
        className={clsx([
          "flex gap-20 [&_strong]:text-neutral-100 [&_li]:text-neutral-300",
          "[&_div]:flex [&_div]:flex-col [&_div]:gap-6",
          "[&_ul]:flex [&_ul]:flex-col [&_ul]:gap-4 [&_ul]:text-sm [&_ul]:font-light",
          "[&_li]:cursor-pointer [&_li]:hover:text-primary-400",
        ])}
      >
        <div>
          <strong>Product</strong>{" "}
          <ul>
            <li>Pricing</li>
            <li>Case studies</li>
            <li>Mobile apps</li>
            <li>Desktop apps</li>
            <li>Browser extensions</li>
            <li>API</li>
          </ul>
        </div>
        <div>
          <strong>Use cases</strong>{" "}
          <ul>
            <li>Time billing</li>
            <li>Employee time tracking</li>
            <li>Project time tracking</li>
            <li>Payroll</li>
          </ul>
        </div>
        <div>
          <strong>Features</strong>{" "}
          <ul>
            <li>Automated time tracking</li>
            <li>Online work timer</li>
            <li>Timesheet reports</li>
            <li>Invoicing</li>
            <li>Time reporting and analytics</li>
            <li>Integrations</li>
            <li>All features</li>
          </ul>
        </div>
        <div>
          <strong>Help</strong>{" "}
          <ul>
            <li>Support and knowledge base</li>
            <li>toggle community</li>
            <li>Talk to sales</li>
            <li>Toggl partner program</li>
            <li>Media kit</li>
            <li>Privacy & terms</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
