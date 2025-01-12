"use client";

import React, { useEffect } from "react";
import AOS from "aos";

const DescriptionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
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
          pretty – it's about solving problems and creating intuitive, enjoyable
          experiences for users. Whether I'm working on a website, mobile app,
          or other digital product, I bring my commitment to design excellence
          and user-centered thinking to every project I work on. I look forward
          to the opportunity to bring my skills and passion to your next
          project.
        </p>
      </div>
    </section>
  );
};

export default DescriptionSection;
