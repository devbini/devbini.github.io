import React from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Image from "next/image";

import ProfileImage from "../images/profile.jpg";

import ResumeImage from "../images/main_resume.png";
import PortFolioImage from "../images/main_portfolio.png";

import "../css/main.css";

const HomePage: React.FC = () => (
  <>
    <div className="main">
      <div className="first">
        <Image src={ProfileImage.src} alt="증명사진" width={1} height={1}></Image>
        <span className="Top">김 찬 빈</span>
        <span className="Bot">FullStack Develop, And DevOps</span>
      </div>
      <div className="startboxs">
        <Link href="/resume">
          <div className="startbox">
            <Image src={ResumeImage.src} alt="이력서" width={1} height={1}></Image>
            <span>이력서</span>
          </div>
        </Link>
        <Link href="/portfolio">
          <div className="startbox">
            <Image src={PortFolioImage.src} alt="포트폴리오" width={1} height={1}></Image>
            <span>포트폴리오</span>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  </>
);

export default HomePage;
