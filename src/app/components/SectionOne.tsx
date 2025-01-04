"use client";

import React, { useEffect, useRef } from "react";
import AOS from "aos";
import MediaLineTop from "@/assets/images/media-line-top.svg";
import MediaLineBottom from "@/assets/images/media-line-bottom.svg";
import PolygonArrow from "@/assets/images/Polygon-arrow.svg";
import HeroImage from "@/assets/images/hero-image.png";
import ArrowMain from "@/assets/images/arrow-main.png";
import Clientimg1 from "@/assets/images/clients-img1.jpg";
import Clientimg2 from "@/assets/images/clients-img2.jpg";
import Clientimg3 from "@/assets/images/clients-img3.jpg";
import Clientimg4 from "@/assets/images/clients-img4.jpg";
import FlowerImage from "@/assets/images/flower.png";
import Link from "next/link";
import Image from "next/image";

import {
  FaGithub,
  FaInstagram,
  FaNode,
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa";
import {
  SiAntdesign,
  SiBootstrap,
  SiCodeigniter,
  SiCss3,
  SiDocker,
  SiElasticsearch,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const SectionOne = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const workedBoxRef = useRef<HTMLDivElement>(null);
  const JessicaBiogiMainRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const ivalueX = (e.pageX * -1) / 60;
      const ivalueY = (e.pageY * -1) / 60;
      const cvalueX = (e.pageX * -1) / 80;
      const cvalueY = (e.pageY * -1) / 90;

      if (workedBoxRef.current) {
        workedBoxRef.current.style.transform = `translate3d(${ivalueX}px, ${ivalueY}px, 0)`;
      }
      if (JessicaBiogiMainRef.current) {
        JessicaBiogiMainRef.current.style.transform = `translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
      }
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
      }
    };

    const layer = layerRef.current;
    if (layer) {
      layer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (layer) {
        layer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  return (
    <section className="section-main overflow-hidden" id="main">
      <div className="section-main-sub position-relative row">
        <div className="col-1 d-md-flex media-main">
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
        <div className="col container2 position-relative overflow-hidden">
          <p className="main-text" data-aos="fade-down">
            Hello, I am <span>👋</span>
          </p>
          <h1>
            <mark>Web</mark> Developer.
          </h1>
          <div className="home-girl-img-main">
            <div className="position-relative" ref={layerRef}>
              <div className="JessicaBiogi-main" data-aos="fade-down">
                <div
                  className="position-relative"
                  id="JessicaBiogi_main"
                  ref={JessicaBiogiMainRef}
                >
                  <Image
                    className="JessicaBiogi-svg img-fluid"
                    src={PolygonArrow}
                    alt="Polygon-arrow"
                  />
                  <p className="jessica-biogi">Amir Mufid</p>
                </div>
              </div>
              <Image
                className="home-girl-img img-fluid"
                src={HeroImage}
                alt="girl"
                data-aos="fade-up"
              />
              <Image
                className="arrow-main"
                id="arrow"
                src={ArrowMain}
                alt="arrow-main"
                ref={arrowRef}
              />
              <div id="worked_box" ref={workedBoxRef}>
                <div
                  className="card-box"
                  data-aos="fade-right"
                  style={{
                    bottom: "350px",
                    left: "-50px",
                  }}
                >
                  <p className="card-title">Backend</p>
                  <div className="card-items">
                    <SiPhp className="card-item" />
                    <SiLaravel className="card-item" />
                    <SiCodeigniter className="card-item" />
                    <FaNode className="card-item" />
                    <SiExpress className="card-item" />
                    <SiNestjs className="card-item" />
                    <SiSocketdotio className="card-item" />
                  </div>
                </div>

                <div
                  className="card-box"
                  data-aos="fade-left"
                  style={{
                    bottom: "250px",
                    right: "-50px",
                  }}
                >
                  <p className="card-title">Frontend</p>
                  <div className="card-items">
                    <SiReact className="card-item" />
                    <SiNextdotjs className="card-item" />
                    <SiJquery className="card-item" />
                    <SiBootstrap className="card-item" />
                    <SiTailwindcss className="card-item" />
                    <SiMui className="card-item" />
                    <SiAntdesign className="card-item" />
                    <SiShadcnui className="card-item" />
                    <SiFramer className="card-item" />
                  </div>
                </div>

                <div
                  className="card-box"
                  data-aos="fade-right"
                  style={{
                    bottom: "100px",
                    left: "-125px",
                  }}
                >
                  <p className="card-title">Database</p>
                  <div className="card-items">
                    <SiMysql className="card-item" />
                    <SiPostgresql className="card-item" />
                    <SiMongodb className="card-item" />
                    <SiRedis className="card-item" />
                    <SiElasticsearch className="card-item" />
                    <SiSupabase className="card-item" />
                    <SiFirebase className="card-item" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-2 overflow-hidden">
          <div className="row">
            <div className="col-5 col-xl-12 section-main-right-contain-sub">
              <h2 className="total-project">10+</h2>
              <p className="project-complted">YEARS OF EXPERIENCE</p>
            </div>
            <div className="col-7 col-xl-12 section-main-right-contain-sub-2 d-flex justify-content-center align-items-center flex-column gap-5">
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
            <div className="col-12 flower-box">
              <Image className="flower" src={FlowerImage} alt="flower" />
              <h2 className="Freelance">
                A <span>Professional Web Developer based in Indonesia.</span> I
                strives to build immersive and beautiful web applications
                through carefully crafted used-centric design.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
