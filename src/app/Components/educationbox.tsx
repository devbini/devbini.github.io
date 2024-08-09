'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../css/edu.module.css';

import Univ_Icon from '../Materials/Dongguk_logo.png';
import Coretec_Icon from '../Materials/Coretec_logo.png';

const EducationBox = () => {
    return (
        <div>
            <section className={styles.educationbox}>
                <h1>🚀 Career.</h1>
                <div className={styles.sectionbox}>
                    <div className={styles.logobox}>
                        <Image className={styles.logo} src={Univ_Icon} alt='Donnguk Univ.'></Image>
                    </div>
                    <div>
                        <h1>동국대학교 (서울)</h1><span className={styles.noimportent}>2023. 03 ~ 2027. 03(재학중)</span><br />
                        <p>
                            융합보안학과<br />
                            전공학점 | 4.28 / 4.5<br />
                            전체학점 | 4.19 / 4.5
                        </p>
                    </div>
                </div>
                <div className={styles.sectionbox}>
                    <div className={styles.logobox}>
                        <Image className={styles.logo} src={Coretec_Icon} alt='Coretec'></Image>
                    </div>
                    <div>
                        <h1>(주)코아텍</h1><span className={styles.noimportent}>2019. 10 ~ 재직중 (4년 11개월)</span><br />
                        <p>
                            개발팀 주임<br />
                            담당 | 앱&웹 서버/클라이언트 개발 및 DBMS관리
                        </p>
                        <div className="about_skillbox">
                            <div className="about_skillboxA">JavaScript</div>
                            <div className="about_skillboxA">React.js</div>
                            <div className="about_skillboxA">HTML/CSS</div>
                            <div className="about_skillboxB">JSP</div>
                            <div className="about_skillboxA">Spring</div>
                            <div className="about_skillboxA">MySQL</div>
                            <div className="about_skillboxA">C++</div>
                            <div className="about_skillboxB">C#</div>
                            <div className="about_skillboxB">Unreal</div>
                            <div className="about_skillboxB">Unity</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EducationBox;