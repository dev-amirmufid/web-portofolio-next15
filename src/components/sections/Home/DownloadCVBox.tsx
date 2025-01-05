import Link from "next/link";
import React from "react";

export const DownloadCVBox = () => {
  return (
    <div className="section-main-right-contain-sub-2 d-flex justify-content-center align-items-center flex-column gap-5">
      <Link
        href="#"
        rel="noreferrer"
        target="_blank"
        className="explore-btn hover-slide-right download-cv-home"
      >
        <span>
          DOWNLOAD CV
          <svg
            className="expo-arrow2"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clipPath="url(#clip0_158_583)">
              <path
                d="M5.33337 22.6667V25.3333C5.33337 26.0406 5.61433 26.7189 6.11442 27.219C6.61452 27.7191 7.2928 28 8.00004 28H24C24.7073 28 25.3856 27.7191 25.8857 27.219C26.3858 26.7189 26.6667 26.0406 26.6667 25.3333V22.6667"
                stroke="#FFDB59"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33337 14.6667L16 21.3333L22.6667 14.6667"
                stroke="#FFDB59"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 5.33333V21.3333"
                stroke="#FFDB59"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_158_583">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </Link>
      <p className="explore-me about-contact-btn">
        <Link href="/contact">
          CONTACT ME
          <svg
            className="expo-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g>
              <path
                d="M6.66669 16H25.3334"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 21.3333L25.3333 16"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 10.6666L25.3333 16"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </Link>
      </p>
    </div>
  );
};
