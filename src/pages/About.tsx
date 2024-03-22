import PhotoGrid from "../components/PhotoGrid";
import Video from "../assets/video/aboutvid.mp4";
import ExecPhoto from "../assets/img/exec-photo.png";
import React, { useState, useEffect } from "react";

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

export default function About() {
  const [width, height] = useWindowSize();
  return (
    <div>
      <section>
        <h2 className="about-heading">
          <b> ABOUT US</b>
        </h2>
      </section>
      <section className="about-unity">
        <h2>What is UNITY?</h2>
        <p>
          UNITY Charity Fashion Show is a non-profit, student-run organization
          working to provide an outlet for students and those in the Greater
          Chicago area to use their love for fashion, style, and art for good.
          Each year, during Northwestern's spring quarter, UNITY hosts a fashion
          show featuring student performers, dancers, musicians, and artists
          with an audience of 200+ people. Proceeds from the show benefit a
          charitable organization in Chicago chosen by our own members. UNITY
          also hosts fundraising events throughout the year such as clothing
          drives, pop-up thrift shops, and model Q&amp;As. In the past, weve
          partnered with Social Works and raised $10,000 towards their efforts
          for Chicago Public Schools. This year, UNITY partners with Arts of
          Life, which is a non-profit organization for artists with intellectual
          and developmental disabilities.
        </p>
      </section>
      <div className="aboutvid">
        <video className="background-video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="text-overlay">
          <h2>What is Arts Of Life?</h2>
          <p>
            Arts of Life is a non-profit with a shared vision: to create a
            working, person-centric, artistic community while providing a work
            environment of equality in Chicago. Arts of Life is for individuals
            with intellectual and developmental disabilities to creatively
            express themselves and foster their leadership skills in a
            community-based environment. For artists at Arts of Life, a career
            in the visual arts is an opportunity for meaningful employment. Each
            artist has their own studio space and works independently from
            individualized project plans or receives 1:1 visual arts
            facilitation to increase their artistic skillset. Artists earn a
            monthly stipend for participation in the program with eligibility to
            receive bonuses based on personal annual art sales. Their vision is
            to create a working, person-centric, artistic community while
            providing a work environment with equality. Arts of Life was founded
            in 2000 and now consists of 60 artists with other private studios
            and community galleries.
          </p>
          <span className="about-donate">
            <div className="button-div">
              <form action="https://artsoflife.org/">
                <button className="donate">
                  <span>LEARN MORE</span>
                </button>
              </form>
            </div>
          </span>
        </div>
      </div>
      <section className="about-exec">
        <img src={ExecPhoto} alt="exec heading" />
        <PhotoGrid />
      </section>
    </div>
  );
}
