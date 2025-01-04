"use client";
import React from "react";
import Link from "next/link";
import { NavbarProps } from "@/interfaces";

export const TopNavbar = ({ menu, isShow = true }: NavbarProps) => {
  return (
    isShow && (
      <ul className="top-navbar-title">
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    )
  );
};
