import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const HomePage: React.FC = () => (
  <>
    <Header />
    <main>
      <p>이력서 박스</p>
      <Link href="/resume">이력서 보러가기</Link>
      <Link href="/portfolio">포트폴리오 보러가기</Link>
    </main>
    <Footer />
  </>
);

export default HomePage;
