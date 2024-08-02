'use client';

import Image from 'next/image';
import styles from './page.module.css';
import photo from './Materials/photo.jpeg';

import Gmail_Icon from './Materials/gmail.png';
import Github_Icon from './Materials/github.png';
import Tistory_Icon from './Materials/tistory.png';
import { useEffect, useState } from 'react';

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(10);
  const textArray = ["Chanbeen, Kim", "김찬빈 입니다."];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];
      const updatedText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(3000); // 3초 대기
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        setTypingSpeed(isDeleting ? 75 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <h1>
      {displayText}
      <span className={styles.cursor}>|</span>
    </h1>
  )
}

export default function Home() {

  function openweb(url = "") {
    window.location.href = url;
  }


  return (
    <div className={styles.background}>
      <div className={styles.mainbox}>
        <div className={styles.aboutbox}>
          <TypingEffect />

          <section className={styles.profilebox}>
            <Image src={photo} alt="Profile photo" className={styles.about_image} onClick={() => openweb("https://github.com/devbini")} />
            <h2>온화하게 협업하고 화합하는 개발자<br />김찬빈입니다.</h2>

            <section className={styles.connectionbox}>
              <Image src={Gmail_Icon} alt="email:cong8685@naver.com" className={styles.tag_image} onClick={() => openweb("mailto:cong8685@naver.com")} />

              <Image src={Github_Icon} alt="github:devbini" className={styles.tag_image} onClick={() => openweb("https://github.com/devbini")} />

              <Image src={Tistory_Icon} alt="tistory:https://devbini.tistory.com/" className={styles.tag_image} onClick={() => openweb("https://devbini.tistory.com/")} />
            </section>

            <div className={styles.about_infobox}>
              <p>
                누군가에게 도움이 되고 싶다는 마음에서 시작된 개발자입니다.<br />
                Unity와 Unreal, 프론트와 백, AWS와 Git, CICD까지 새로운 배움에 대한 두려움을 가지지 않습니다.
                함께 웃고, 서로의 코드를 개선시킬 수 있는, 더 나은 미래의 팀원이 되겠습니다.
              </p>
            </div>
            <div className={styles.Line}></div>
            <div className={styles.about_skillroot}>
              <span>Front-End Stack</span>
              <div className={styles.about_skillbox}>
                <div className={styles.about_skillboxA}>JavaScript</div>
                <div className={styles.about_skillboxB}>TypeScript</div>
                <div className={styles.about_skillboxA}>React.js</div>
                <div className={styles.about_skillboxB}>Next.js</div>
                <div className={styles.about_skillboxB}>HTML/CSS</div>
              </div>
            </div>
            <div className={styles.about_skillroot}>
              <span>Back-End Stack</span>
              <div className={styles.about_skillbox}>
                <div className={styles.about_skillboxA}>Spring</div>
                <div className={styles.about_skillboxB}>Node.js</div>
                <div className={styles.about_skillboxA}>AWS Cloude Service</div>
              </div>
            </div>
            <div className={styles.about_skillroot}>
              <span>Database Stack</span>
              <div className={styles.about_skillbox}>
                <div className={styles.about_skillboxA}>MySQL</div>
                <div className={styles.about_skillboxB}>PostgreSQL</div>
              </div>
            </div>
            <div className={styles.about_skillroot}>
              <span>Another Stack</span>
              <div className={styles.about_skillbox}>
                <div className={styles.about_skillboxA}>C++</div>
                <div className={styles.about_skillboxB}>C#</div>
                <div className={styles.about_skillboxA}>Unreal</div>
                <div className={styles.about_skillboxB}>Unity</div>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.projectbox}>

          <section>
            <h1>Experience.</h1>

          </section>

          <section>
            <h1>Education.</h1>


          </section>

        </div>
      </div>
    </div>
  );
}
