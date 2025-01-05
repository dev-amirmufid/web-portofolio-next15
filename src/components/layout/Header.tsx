"use client";

import React, { useEffect, useState } from "react";
import BiogiLogo from "@/assets/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { TopNavbar } from "./navbar/TopNavbar";
import { NavMenu } from "@/constants/menu";
import { IconDownload } from "../icons/IconDownload";
import { OuterNavbar } from "./navbar/OuterNavbar";
import { FaCode } from "react-icons/fa";
import { Logo } from "../common/Logo";

export const Header = () => {
  const [activeItem, setActiveItem] = useState("/");
  const [isFixed, setIsFixed] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [subActiveIndex, setSubActiveIndex] = useState<number | null>(null);

  const isActive = (path: string) => (activeItem === path ? "menu-active" : "");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 20) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    setSubActiveIndex(null); // Reset sub menu when main menu is toggled
  };

  const toggleSubAccordion = (index: number) => {
    setSubActiveIndex(subActiveIndex === index ? null : index);
  };
  return (
    <>
      {/* <!-- ====================================== Main Menu ===================================== --> */}
      <header id="top-navbar" className={`top-navbar fixed`}>
        <div className="container">
          <div className="top-navbar_full">
            <div className="back-btn">
              <div className="d-flex align-items-center gap-2">
                <Logo />
              </div>
            </div>

            <div className="hell">
              <TopNavbar menu={NavMenu} />

              <Link href="#" rel="noreferrer" target="_blank">
                <div className="cv-btn">
                  <IconDownload />
                </div>
              </Link>

              <OuterNavbar menu={NavMenu} />
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ====================================== Main Menu End===================================== --> */}
    </>
  );
};
