"use client";

import { useEffect } from "react";
import AOS from "aos";

import { SectionOne } from "./components/SectionOne";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <SectionOne />
    </>
  );
}
