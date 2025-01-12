"use client";

import React from "react";
import { NavbarProps } from "@/interfaces";
import { NavLink } from "../NavLink";

export const TopNavbar = ({ menu, isShow = true }: NavbarProps) => {
  return (
    isShow && (
      <ul className="top-navbar-title">
        {menu.map((item, index) => (
          <NavLink href={item.href} key={index}>
            {item.name}
          </NavLink>
        ))}
      </ul>
    )
  );
};
