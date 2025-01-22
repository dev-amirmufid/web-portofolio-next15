"use client";

import React from "react";
import Link from "next/link";
import { TopNavbar } from "./navbar/TopNavbar";
import { NavMenu } from "@/constants/menu";
import { IconDownload } from "../icons/IconDownload";
import { OuterNavbar } from "./navbar/OuterNavbar";
import { Logo } from "../common/Logo";

export const Header = () => {
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
