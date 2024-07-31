'use client';

import Image from 'next/image';
import styles from './page.module.css';
import photo from './Materials/photo.jpeg';

import Gmail_Icon from './Materials/gmail.png';
import Github_Icon from './Materials/github.png';
import Tistory_Icon from './Materials/tistory.png';

export default function Home() {
  function openweb(url = "") {
    window.location.href = url;
  }

  return (
    <div className={styles.background}>
      <div className={styles.mainbox}>
        <div className={styles.aboutbox}>
          <h1>Chanbeen, Kim</h1>
          <a>
            <Image src={photo} alt="Profile photo" className={styles.about_image} onClick={() => openweb("https://github.com/devbini")}/>
          </a>
          <h2>개발하는 개발자?<br/>김찬빈입니다.</h2>
          <a>
            <Image src={Gmail_Icon} alt="email:cong8685@naver.com" className={styles.tag_image} onClick={() => openweb("mailto:cong8685@naver.com")}/>
          </a>

          <a>
            <Image src={Github_Icon} alt="github:devbini" className={styles.tag_image} onClick={() => openweb("https://github.com/devbini")}/>
          </a>

          <a>
            <Image src={Tistory_Icon} alt="tistory:https://devbini.tistory.com/" className={styles.tag_image} onClick={() => openweb("https://devbini.tistory.com/")}/>
          </a>

          <div className={styles.about_infobox}>
            <p>
              안녕하세요~
            </p>
          </div>
          <div className={styles.Line}></div>
          <div>
            <span>주요 기술</span>
            <div className={styles.about_skillbox}>
              <div className={styles.about_skillboxA}>C++</div>
              <div className={styles.about_skillboxA}>JS</div>
              <div className={styles.about_skillboxA}>Spring</div>
            </div>
          </div>
          <div>
            <span>기술 스택</span>
            <div className={styles.about_skillbox}>
              <div className={styles.about_skillboxB}>C++</div>
              <div className={styles.about_skillboxB}>JS</div>
              <div className={styles.about_skillboxB}>Spring</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
