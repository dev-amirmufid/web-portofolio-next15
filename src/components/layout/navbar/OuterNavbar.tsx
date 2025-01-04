"use client";

import React from "react";
import { NavbarProps } from "@/interfaces";
import Link from "next/link";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const OuterNavbar = ({ menu, isShow = true }: NavbarProps) => {
  return (
    isShow && (
      <div className="outer-menu">
        <input className="checkbox-toggle" type="checkbox" name="checkbox" />
        <div className="hamburger">
          <div></div>
        </div>

        {/* <!-- ====================================== Side Menu ===================================== --> */}
        <div className="menu">
          <div>
            <nav>
              <div className="container">
                <div className="row sidemenu-main">
                  <div className="col-lg-2">
                    <div className="menu-text">
                      <div className="side-menu-text">
                        <p>MENU</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-7 side-menu-scroll">
                    {menu.map((item, index) => (
                      <div className="heading2" key={index}>
                        <Link href={item.href}>{item.name}</Link>
                      </div>
                    ))}
                  </div>

                  <div className="col-lg-3">
                    <div className="cont-info">
                      <div className="item">
                        <p className="sub-title-address">Contact Me</p>
                        <p>
                          <Link
                            target="_blank"
                            href="https://www.instagram.com/amirmufid/"
                            className="d-flex align-items-center gap-2"
                          >
                            <FaInstagram />
                            Instagram
                          </Link>
                        </p>
                        <p>
                          <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/amirmufid/"
                            className="d-flex align-items-center gap-2"
                          >
                            <FaLinkedin />
                            LinkedIn
                          </Link>
                        </p>
                        <p>
                          <Link
                            target="_blank"
                            href="mailto:amirmufid.forbid@gmail.com"
                            className="d-flex align-items-center gap-2"
                          >
                            <FaEnvelope />
                            amirmufid.forbid@gmail.com
                          </Link>
                        </p>
                        <p className="underline">
                          <Link
                            target="_blank"
                            href="https://wa.me/6281255071410"
                            className="d-flex align-items-center gap-2"
                          >
                            <FaWhatsapp />
                            +62 812 5507 1410
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* <!-- ====================================== Side Menu End===================================== --> */}
      </div>
    )
  );
};
