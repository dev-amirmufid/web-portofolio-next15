"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import Link from "next/link";

const ExprerienceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const data = [
    {
      title: "Education",
      content: (
        <>
          <p>
            Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque.
            Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc
            vulputate metus pellentesque.
          </p>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Bachelor of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2010 - 2014</p>
              <p className="cursus">
                Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a tempor,
                laoreet varius et. Sed ut egestas vitae dolor nulla non
                Ullamcorper amet nibh.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Master of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2014 - 2016</p>
              <p className="cursus">
                Porttitor euismod at semper ut massa. Lorem varius magna
                volutpat nunc. Et faucibus scelerisque donec augue eleifenda
                morbi dolor lorem semper.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                PhD of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2016 - 2018</p>
              <p className="cursus">
                Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque lorem
                suscipit in. Hendrerit rhoncus quis tempor urna pharetra ut
                erat.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Experience",
      content: (
        <>
          <p>
            Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque.
            Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc
            vulputate metus pellentesque.
          </p>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Bachelor of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2010 - 2014</p>
              <p className="cursus">
                Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a tempor,
                laoreet varius et. Sed ut egestas vitae dolor nulla non
                Ullamcorper amet nibh.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Master of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2014 - 2016</p>
              <p className="cursus">
                Porttitor euismod at semper ut massa. Lorem varius magna
                volutpat nunc. Et faucibus scelerisque donec augue eleifenda
                morbi dolor lorem semper.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                PhD of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2016 - 2018</p>
              <p className="cursus">
                Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque lorem
                suscipit in. Hendrerit rhoncus quis tempor urna pharetra ut
                erat.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "My Expertise",
      content: (
        <>
          <p>
            Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque.
            Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc
            vulputate metus pellentesque.
          </p>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Bachelor of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2010 - 2014</p>
              <p className="cursus">
                Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a tempor,
                laoreet varius et. Sed ut egestas vitae dolor nulla non
                Ullamcorper amet nibh.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Master of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2014 - 2016</p>
              <p className="cursus">
                Porttitor euismod at semper ut massa. Lorem varius magna
                volutpat nunc. Et faucibus scelerisque donec augue eleifenda
                morbi dolor lorem semper.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                PhD of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2016 - 2018</p>
              <p className="cursus">
                Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque lorem
                suscipit in. Hendrerit rhoncus quis tempor urna pharetra ut
                erat.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Design Systems",
      content: (
        <>
          <p>
            Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque.
            Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc
            vulputate metus pellentesque.
          </p>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Bachelor of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2010 - 2014</p>
              <p className="cursus">
                Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a tempor,
                laoreet varius et. Sed ut egestas vitae dolor nulla non
                Ullamcorper amet nibh.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Master of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2014 - 2016</p>
              <p className="cursus">
                Porttitor euismod at semper ut massa. Lorem varius magna
                volutpat nunc. Et faucibus scelerisque donec augue eleifenda
                morbi dolor lorem semper.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                PhD of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2016 - 2018</p>
              <p className="cursus">
                Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque lorem
                suscipit in. Hendrerit rhoncus quis tempor urna pharetra ut
                erat.
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
    <>
      {/* <!-- ====================================== About Section Three ===================================== --> */}
      <section className="section-three overflow-hidden" id="explore-me">
        <div className="container">
          <div className="row services-section">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <p className="our-services" data-aos="fade-up">
                WORK EXPERIENCE
              </p>
              <h2 className="our-solution" data-aos="fade-up">
                Explore My Work
              </h2>
              <div className="services-circle-main">
                <div
                  className="view-work-circle btn btn1"
                  id="circle1"
                  data-aos="zoom-in-right"
                >
                  <Link href="/portfolio" className="a1">
                    VIEW MY WORK
                  </Link>
                </div>
                <div className="contact-circle" data-aos="zoom-in-left">
                  <div className="view-work-circle btn btn2">
                    <Link href="/contact">CONTACT ME</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <div className="work-experience">
                <div className="comment" data-aos="fade-up">
                  <p>
                    I have worked at various companies and handled various
                    projects over the last 10 years since 2014.
                  </p>
                  <div className="education position-relative">
                    <div className="side_circle_ring">
                      <div className="small_yellow_border">
                        <div className="small_yellow_circle"></div>
                      </div>
                    </div>
                    <div className="small_yellow_border_main">
                      <p className="bachelor">Senior Backend Developer</p>
                      <p className="university">
                        PT. Logique Digital Indonesia / 2024 - 2025
                      </p>
                      <p className="cursus">
                        NodeJs Express, NestJs, Socket.io, Redis, PostgreSql,
                        MySql, Elastic Search, Laravel, etc
                      </p>
                      <p className="cursus">
                        Build a lot outsourced projects mostly focuses on the
                        car auction web system.
                      </p>
                    </div>
                  </div>
                  <div className="education position-relative">
                    <div className="side_circle_ring">
                      <div className="small_yellow_border">
                        <div className="small_yellow_circle"></div>
                      </div>
                    </div>
                    <div className="small_yellow_border_main">
                      <p className="bachelor">Senior Fullstack Web Developer</p>
                      <p className="university">
                        PT. Pantona Teknologi Indonesia / 2019 - 2023
                      </p>
                      <p className="cursus">
                        NodeJs Express, NestJs, React Js, React Native,
                        Socket.io, Redis, PostgreSql, MySql, ElasticSearch,
                        Laravel, etc
                      </p>
                      <p className="cursus">
                        I lead web development outsourced projects from Japan
                        (Uchida Yoko Global Co. Ltd)
                      </p>
                    </div>
                  </div>
                  <div className="education position-relative">
                    <div className="side_circle_ring">
                      <div className="small_yellow_border">
                        <div className="small_yellow_circle"></div>
                      </div>
                    </div>
                    <div className="small_yellow_border_main">
                      <p className="bachelor">Fullstack Web Developer</p>
                      <p className="university">
                        CV. Hade Daya Solution / 2018
                      </p>
                      <p className="cursus">
                        NodeJs, ReactJs, React Native, MySql, MongoDb,
                        Socket.io, etc
                      </p>
                      <p className="cursus">
                        Build a e-commerce application system for Kintakun
                        Bedcover
                      </p>
                    </div>
                  </div>
                  <div className="education position-relative">
                    <div className="side_circle_ring">
                      <div className="small_yellow_border">
                        <div className="small_yellow_circle"></div>
                      </div>
                    </div>
                    <div className="small_yellow_border_main">
                      <p className="bachelor">Fullstack Web Developer</p>
                      <p className="university">
                        PT. Edu Sinergi Informatika / 2014 - 2017
                      </p>
                      <p className="cursus">
                        PHP Codeigniter, Laravel, Jquery, MySql, PostgreSql, etc
                      </p>
                      <p className="cursus">
                        Build e-campus academic ecosystem, Applications that
                        have been made include: Campus Academic Information
                        System, New Student Registration System, Website
                        Profile, HR, Accounting, E - Learning, etc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== About Section Three End ===================================== --> */}
    </>
  );
};
export default ExprerienceSection;
