"use client";

import React from "react";
import { SocialMediaComponent } from "./SocialMediaComponent";
import { MainComponent } from "./MainComponent";
import { YearExperienceBox } from "./YearExperienceBox";
import { DownloadCVBox } from "./DownloadCVBox";
import { FlowerBox } from "./FlowerBox";

export default function HomeSection() {
  return (
    <section
      className="section-main d-flex align-items-center justify-content-center overflow-hidden row"
      style={{
        height: "100vh",
      }}
      id="main"
    >
      <div className="col-1 d-md-flex">
        <SocialMediaComponent />
      </div>
      <div className="col position-relative overflow-hidden">
        <MainComponent />
      </div>
      <div className="col-12 col-xl-2 overflow-hidden">
        <div className="section-main-right row">
          <div className="col-5 col-xl-12">
            <YearExperienceBox />
          </div>
          <div className="col-7 col-xl-12">
            <DownloadCVBox />
          </div>
          <div className="col-12">
            <FlowerBox />
          </div>
        </div>
      </div>
    </section>
  );
}
