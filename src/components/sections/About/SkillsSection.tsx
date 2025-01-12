"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import {
  SiBootstrap,
  SiCodeigniter,
  SiCss3,
  SiDocker,
  SiElasticsearch,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiShadcnui,
  SiSocketdotio,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="section-four overflow-hidden">
      <div className="container">
        <p className="our-services my_skills" data-aos="fade-up">
          MY SKILLS
        </p>
        <h2 className="our-solution my-expertise" data-aos="fade-down">
          My Expertise.
        </h2>
        <div className="skill-type-main">
          <div
            className="skills-box-main"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h2>Backends</h2>

            <div className="skill-item">
              <div>
                <SiPhp className="card-item" />
                <p>PHP</p>
              </div>
              <div>
                <SiLaravel className="card-item" />
                <p>Laravel</p>
              </div>
              <div>
                <SiCodeigniter className="card-item" />
                <p>Codeigniter</p>
              </div>
              <div>
                <FaNode className="card-item" />
                <p>Node</p>
              </div>
              <div>
                <SiExpress className="card-item" />
                <p>Express</p>
              </div>
              <div>
                <SiNestjs className="card-item" />
                <p>Nestjs</p>
              </div>
              <div>
                <SiSocketdotio className="card-item" />
                <p>Socket.io</p>
              </div>
            </div>
          </div>
          <div
            className="skills-box-main"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h2>Frontends</h2>

            <div className="skill-item">
              <div>
                <SiHtml5 className="card-item" />
                <p>HTML</p>
              </div>
              <div>
                <SiCss3 className="card-item" />
                <p>CSS</p>
              </div>
              <div>
                <SiJavascript className="card-item" />
                <p>Javascript</p>
              </div>
              <div>
                <SiReact className="card-item" />
                <p>React</p>
              </div>
              <div>
                <SiNextdotjs className="card-item" />
                <p>Nextjs</p>
              </div>
              <div>
                <SiJquery className="card-item" />
                <p>Jquery</p>
              </div>
              <div>
                <SiBootstrap className="card-item" />
                <p>Bootstrap</p>
              </div>
              <div>
                <SiTailwindcss className="card-item" />
                <p>Tailwind</p>
              </div>
              <div>
                <SiShadcnui className="card-item" />
                <p>Shadcn</p>
              </div>
              <div>
                <SiMui className="card-item" />
                <p>MUI</p>
              </div>
            </div>
          </div>
          <div
            className="skills-box-main"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h2>Databases</h2>

            <div className="skill-item">
              <div>
                <SiMysql className="card-item" />
                <p>MySQL</p>
              </div>
              <div>
                <SiPostgresql className="card-item" />
                <p>PostgreSQL</p>
              </div>
              <div>
                <SiSqlite className="card-item" />
                <p>SQLite</p>
              </div>
              <div>
                <SiMongodb className="card-item" />
                <p>MongoDB</p>
              </div>
              <div>
                <DiRedis className="card-item" />
                <p>Redis</p>
              </div>
              <div>
                <SiElasticsearch className="card-item" />
                <p>Elasticsearch</p>
              </div>
              <div>
                <SiSupabase className="card-item" />
                <p>Supabase</p>
              </div>
              <div>
                <SiFirebase className="card-item" />
                <p>Firebase</p>
              </div>
            </div>
          </div>
          <div
            className="skills-box-main"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h2>Others</h2>

            <div className="skill-item">
              <div>
                <SiDocker className="card-item" />
                <p>Docker</p>
              </div>
              <div>
                <SiGit className="card-item" />
                <p>Git</p>
              </div>
              <div>
                <SiLinux className="card-item" />
                <p>Linux</p>
              </div>
              <div>
                <SiWordpress className="card-item" />
                <p>Wordpress</p>
              </div>
              <div>
                <SiFigma className="card-item" />
                <p>Figma</p>
              </div>
              <div>
                <SiPostman className="card-item" />
                <p>Postman</p>
              </div>
              <div>
                <VscVscode className="card-item" />
                <p>VSCode</p>
              </div>
              <div>
                <SiOpenai className="card-item" />
                <p>ChatGPT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
