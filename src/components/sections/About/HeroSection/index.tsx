"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";

import FlowerImg from "@/assets/images/flower.png";
import AboutImgMain from "@/assets/images/about-img-main.png";
import AboutArrowMain from "@/assets/images/about-arrow-main.png";

import GirlImg2 from "@/assets/images/girl-img2.png";
import YearsImg from "@/assets/images/years-img.png";
import TrophyImg from "@/assets/images/trophy.png";

import Image from "next/image";
import MarqueSection from "./MarqueSection";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="section-main overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <p className="main-text about-hello" data-aos="fade-down">
                Hello, I am <span>👋</span>
              </p>
              <h1 className="JessicaBiogi" data-aos="fade-down">
                Amir Mufid
              </h1>
              <p className="Freelance about-freelance" data-aos="fade-down">
                A <span>Professional Web Developer based in Indonesia.</span> I
                strives to build immersive and beautiful web applications
                through carefully crafted used-centric design.
              </p>
              <div className="about-main-buttons">
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="explore-btn hover-slide-right download-cv-about"
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
                <p
                  className="explore-me about-contact-btn"
                  data-aos="fade-right"
                >
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
            </div>
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 about-main-img-sec"
              id="main"
            >
              <Image
                className="about-flower-img"
                src={FlowerImg}
                alt="flower"
              />
              <Image
                className="about-arrow-main"
                id="arrow"
                src={AboutArrowMain}
                alt="about-arrow-main"
              />

              <Image
                className="girl-img2"
                src={AboutImgMain}
                alt="girl-img2"
                data-aos="fade-left"
              />
              <div className="hwlo">
                <Image className="years-img" src={YearsImg} alt="years-img" />
                <div className="digit">10</div>
                <div className="circle-text">
                  YEARS OF
                  <br /> WORKING EXPERICE
                </div>
              </div>
            </div>
          </div>
        </div>
        <MarqueSection />
      </section>
      <section className="about-section-two overflow-hidden">
        <div className="container">
          <h3 className="self-taught" data-aos="fade-up">
            <span>I'm Amir</span> - a Professional Web Developer specializes in
            building{" "}
            <span>ERP Software using Microservices Architecture Pattern</span>{" "}
            with a passion for creating beautiful, functional, and user-centered
            digital experiences. With <span>10 years of experience</span> in the
            field.
          </h3>
          <p className="odio" data-aos="fade-up">
            I believe that design is about more than just making things look
            pretty – it's about solving problems and creating intuitive,
            enjoyable experiences for users. Whether I'm working on a website,
            mobile app, or other digital product, I bring my commitment to
            design excellence and user-centered thinking to every project I work
            on. I look forward to the opportunity to bring my skills and passion
            to your next project.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
