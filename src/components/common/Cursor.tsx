"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap"; // Make sure to import gsap if it's not already included

// import "./Cursor.css"; // Ensure you have the necessary styles

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;

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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const handleMouseMove = (e: MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  const handleLinkMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;

    cursorRef.current?.classList.add("grow");
    if (link.classList.contains("small")) {
      cursorRef.current?.classList.remove("grow");
      cursorRef.current?.classList.add("grow-small");
    }
  };

  const handleLinkMouseLeave = () => {
    cursorRef.current?.classList.remove("grow");
    cursorRef.current?.classList.remove("grow-small");
  };

  return <div className="cursor" ref={cursorRef}></div>;
};
