"use client";

import React, { useEffect, useRef } from "react";
import AOS from "aos";
import MediaLineTop from "@/assets/images/media-line-top.svg";
import MediaLineBottom from "@/assets/images/media-line-bottom.svg";
import PolygonArrow from "@/assets/images/Polygon-arrow.svg";
import GirlImage from "@/assets/images/girl.png";
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
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa";

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
      <div className="section-main-sub position-relative">
        <div className="media-main">
          <Image src={MediaLineTop} alt="media-line-top" />
          <div>
            <Link target="_blank" href="mailto:amirmufid.forbid@gmail.com">
              <FaRegEnvelope />
            </Link>
          </div>
          <div>
            <Link target="_blank" href="https://www.instagram.com/amirmufid">
              <FaInstagram />
            </Link>
          </div>
          <div>
            <Link target="_blank" href="https://www.github.com/dev-amirmufid">
              <FaGithub />
            </Link>
          </div>
          <div>
            <Link target="_blank" href="https://www.youtube.com/AmirMufid">
              <FaYoutube />
            </Link>
          </div>
          <Image src={MediaLineBottom} alt="media-line-bottom" />
        </div>
        <div className="container2 position-relative overflow-hidden">
          <p className="main-text" data-aos="fade-down">
            Hello, I am <span>👋</span>
          </p>
          <h1>
            <mark>Web</mark> Designer.
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
                    className="JessicaBiogi-svg"
                    src={PolygonArrow}
                    alt="Polygon-arrow"
                  />
                  <p className="jessica-biogi">Jessica Biogi</p>
                </div>
              </div>
              <Image
                className="home-girl-img"
                src={GirlImage}
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
                <div className="worked-box" data-aos="fade-right">
                  <p className="worked-more">
                    Worked with more than 100 people
                  </p>
                  <div className="client-img-main position-relative">
                    <Image
                      className="client-img client-img1"
                      src={Clientimg1}
                      alt="clients-img1"
                    />
                    <Image
                      className="client-img client-img2"
                      src={Clientimg2}
                      alt="clients-img2"
                    />
                    <Image
                      className="client-img client-img3"
                      src={Clientimg3}
                      alt="clients-img3"
                    />
                    <Image
                      className="client-img client-img4"
                      src={Clientimg4}
                      alt="clients-img4"
                    />
                    <p className="worked-more worked-more2">100+ Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-main-right-contain overflow-hidden">
          <div className="section-main-right-contain-sub" data-aos="fade-left">
            <h2 className="total-project">700+</h2>
            <p className="project-complted">PROJECT COMPLETED</p>
          </div>
          <div className="flower-box" data-aos="fade-left">
            <Image className="flower" src={FlowerImage} alt="flower" />
            <h2 className="Freelance">
              A <span>Freelance Designer and Developer based in USA.</span> I
              strives to build immersive and beautiful web applications through
              carefully crafted used-centric design.
            </h2>
          </div>
          <div className="mouse-scroll-box">
            <Link href="#section-two" className="mouse-main">
              <div className="mouse">
                <svg
                  className="mouse-arrow-down"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="40"
                  viewBox="0 0 24 40"
                  fill="none"
                >
                  <g clipPath="url(#clip0_37_162)">
                    <path
                      d="M12 5L12 35"
                      stroke="#FFDB59"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 31L12 35"
                      stroke="#FFDB59"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 31L12 35"
                      stroke="#FFDB59"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_162">
                      <rect width="24" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="scroll-down">SCROLL DOWN</h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
