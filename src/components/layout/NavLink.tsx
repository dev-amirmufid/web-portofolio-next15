"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = (
  props: LinkProps & {
    children?: React.ReactNode | undefined;
  }
) => {
  const current = usePathname();
  console.log(current, "current");
  return (
    <li className={current === props.href ? "menu-active" : ""}>
      <Link {...props} />
    </li>
  );
};
