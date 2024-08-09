import React from 'react';
import Image from 'next/image';
import TypingEffect from './typingEffect';
import styles from '../css/aboutbox.module.css';

import photo from '../Materials/photo.jpeg';
import Gmail_Icon from '../Materials/gmail.png';
import Github_Icon from '../Materials/github.png';
import Tistory_Icon from '../Materials/tistory.png';

const AboutBox = () => {
    const openweb = (url: string) => {
        window.open(url, '_blank');
    };

    const skills = {
        frontend: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML/CSS"],
        backend: ["SpringBoot", "Express.JS", "Node.js", "JSP"],
        database: ["MySQL", "PostgreSQL"],
        languages: ["C++", "C#", "Java", "Python"],
        etc: ["Unreal", "Unity", "Docker", "Jenkins", "Git"],
    };

    const SkillSection = ({ title, skillList }: { title: string; skillList: string[] }) => (
        <div className={styles.about_skillroot}>
            <span>{title}</span>
            <div className={styles.about_skillbox}>
                {skillList.map((skill, index) => (
                    <div key={index} className={styles.about_skillboxA}>{skill}</div>
                ))}
            </div>
        </div>
    );

    return (
        <div className={styles.aboutbox}>
            <TypingEffect />
            <section className={styles.profilebox}>
                <div className={styles.profileimagebox}>
                    <Image src={photo} alt="Profile photo" className={styles.about_image} onClick={() => openweb("https://github.com/devbini")} />
                </div>
                <h2>커뮤니케이션하는 개발자,<br />김찬빈입니다.</h2>

                <section className={styles.connectionbox}>
                    <Image src={Gmail_Icon} alt="email:devbini01@gmail.com" className={styles.tag_image} onClick={() => openweb("mailto:cong8685@naver.com")} /><br/>
                    <Image src={Github_Icon} alt="github:devbini" className={styles.tag_image} onClick={() => openweb("https://github.com/devbini")} /><br/>
                    <Image src={Tistory_Icon} alt="tistory:https://devbini.tistory.com/" className={styles.tag_image} onClick={() => openweb("https://devbini.tistory.com/")} />
                </section>

                <div className={styles.about_infobox}>
                    <p>
                        누군가에게 도움이 되고 싶다는 마음에서 시작된 개발자입니다.<br />
                        Unity와 Unreal, 프론트와 백, AWS와 Git, CICD까지 새로운 배움에 대한 두려움을 가지지 않습니다.<br />
                        함께 웃고, 서로의 코드를 개선시킬 수 있는, 더 나은 미래의 팀원이 되겠습니다.
                    </p>
                </div>
                <div className={styles.Line}></div>

                <SkillSection title="Front-End" skillList={skills.frontend} />
                <SkillSection title="Back-End" skillList={skills.backend} />
                <SkillSection title="Database" skillList={skills.database} />
                <SkillSection title="Language" skillList={skills.languages} />
                <SkillSection title="etc." skillList={skills.etc} />
                <div className={styles.Line}></div>
            </section>
        </div>
    );
};

export default AboutBox;