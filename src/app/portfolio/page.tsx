"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../css/portfolio.css";
import Footer from "../../components/footer";
import Image from "next/image";

const PortFolioPage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false); // 전환 상태 관리
  const totalImages = 17;
  const router = useRouter();

  const goToNextPage = () => {
    if (pageNumber < totalImages) {
      setIsTransitioning(true);
      setTimeout(() => {
        setPageNumber(pageNumber + 1);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 500);
    }
    else {
        setIsTransitioning(true);
        setTimeout(() => {
          setPageNumber(1);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 50);
        }, 500);
    }
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setPageNumber(pageNumber - 1);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 500);
    }
  };

  const goToRoot = () => {
    router.push("/");
  };

  return (
    <>
      <div className="portfolio-main">
        <button onClick={goToRoot} className="portfolio-root-button">
          메인으로
        </button>
        <div className="portfolio-container">
          <div
            className={`fade-layer ${isTransitioning ? "fade-active" : ""}`}
            onClick={(e) => {
              const clickPositionX = e.clientX;
              const imageWidth = e.currentTarget.clientWidth;
              if (clickPositionX < imageWidth / 2) {
                goToPreviousPage();
              } else {
                goToNextPage();
              }
            }}
          >
            {isTransitioning && (
              <div className="loading-content">
                <span>Loading...</span>
                <div className="progress-bar"></div>
              </div>
            )}
          </div>
          <Image
            src={`/portfolio/page-${pageNumber}.png`}
            alt={`Page ${pageNumber}`}
            className="portfolio-image"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PortFolioPage;
