import React from "react";
import Link from "next/link";
import Footer from "../components/footer";

import ProfileImage from "../images/profile.jpg";

import ResumeImage from "../images/main_resume.png";
import PortFolioImage from "../images/main_portfolio.png";

import "../css/main.css";

const HomePage: React.FC = () => (
  <>
    <main>
      <div className="first">
        <img src={ProfileImage.src} alt="증명사진"></img>
        <span className="Top">김 찬 빈</span>
        <span className="Bot">FullStack Develop, And DevOps</span>
      </div>
      <div className="startboxs">
        <Link href="/resume">
          <div className="startbox">
            <img src={ResumeImage.src} alt="이력서"></img>
            <span>이력서</span>
          </div>
        </Link>
        <Link href="/portfolio">
          <div className="startbox">
            <img src={PortFolioImage.src} alt="포트폴리오"></img>
            <span>포트폴리오</span>
          </div>
        </Link>
      </div>
      <Footer />
    </main>
  </>
);

export default HomePage;
