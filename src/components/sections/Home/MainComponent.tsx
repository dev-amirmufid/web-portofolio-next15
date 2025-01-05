"use client";

import React, { useEffect, useRef } from "react";
import AOS from "aos";
import Image from "next/image";
import PolygonArrow from "@/assets/images/Polygon-arrow.svg";
import HeroImage from "@/assets/images/hero-image.png";
import ArrowMain from "@/assets/images/arrow-main.png";
import { FaNode } from "react-icons/fa";
import {
  SiAntdesign,
  SiBootstrap,
  SiCodeigniter,
  SiElasticsearch,
  SiExpress,
  SiFirebase,
  SiFramer,
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
} from "react-icons/si";

export const MainComponent = () => {
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
    <div className="container2">
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
  );
};
