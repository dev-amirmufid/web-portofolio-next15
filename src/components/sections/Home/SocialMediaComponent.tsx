"use client";

import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import MediaLineTop from "@/assets/images/media-line-top.svg";
import MediaLineBottom from "@/assets/images/media-line-bottom.svg";

export const SocialMediaComponent = () => {
  return (
    <div className="media-main">
      <Image src={MediaLineTop} alt="media-line-top" />
      <div>
        <Link target="_blank" href="mailto:amirmufid.forbid@gmail.com">
          <FaRegEnvelope className="icon" />
        </Link>
      </div>
      <div>
        <Link target="_blank" href="https://www.instagram.com/amirmufid">
          <FaInstagram className="icon" />
        </Link>
      </div>
      <div>
        <Link target="_blank" href="https://www.github.com/dev-amirmufid">
          <FaGithub className="icon" />
        </Link>
      </div>
      <div>
        <Link target="_blank" href="https://www.youtube.com/AmirMufid">
          <FaYoutube className="icon" />
        </Link>
      </div>
      <Image src={MediaLineBottom} alt="media-line-bottom" />
    </div>
  );
};
