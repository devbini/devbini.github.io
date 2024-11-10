"use client"

import React from "react";
import Footer from "../../components/footer";
import { useRouter } from "next/navigation";

import "../../css/resume.css";

const ResumePage: React.FC = () => {
  const router = useRouter();

  const goToRoot = () => {
    router.push("/");
  };

  return (
    <>
      <div className="resume-main">
        <button onClick={goToRoot} className="resume-root-button">
          메인으로
        </button>
        <div className="resume-pdf-viewer">
          <iframe
            src="/resume.pdf"
            width="100%"
            height="600px"
            title="PDF Viewer"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResumePage;
