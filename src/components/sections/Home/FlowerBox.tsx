import React from "react";
import Image from "next/image";

import FlowerImage from "@/assets/images/flower.png";

export const FlowerBox = () => {
  return (
    <div className="flower-box">
      <Image className="flower" src={FlowerImage} alt="flower" />
      <h2 className="Freelance">
        A <span>Professional Web Developer based in Indonesia.</span> I strives
        to build immersive and beautiful web applications through carefully
        crafted used-centric design.
      </h2>
    </div>
  );
};
