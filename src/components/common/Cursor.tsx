"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseOver = () => {
      cursor?.classList.add("grow");
    };

    const handleMouseOut = () => {
      cursor?.classList.remove("grow");
    };

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: () => {
        gsap.set(cursor, {
          left: mouseX,
          top: mouseY,
        });
      },
    });

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [mouseX, mouseY]);

  const handleMouseMove = (e: MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return <div className="cursor" ref={cursorRef}></div>;
};
