'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../css/exp.module.css';

import Univ_Icon from '../Materials/Dongguk_logo.png';

const ExperienceBox = () => {
    return (
        <div>
            <section className={styles.expbox}>
                <h1>💻 Experience.</h1>

                <div className={styles.sectionbox}>
                    <div className={styles.logobox}>
                        <Image className={styles.logo} src={Univ_Icon} alt='Donnguk Univ.'></Image>
                    </div>
                    <div>
                        <h1>자기소개 이력 페이지</h1><span className={styles.noimportent}>2024. 07 ~ 2024. 08</span><br />
                        <div>
                            <div className="about_skillbox">
                                <div className="about_skillboxA">개인 프로젝트</div>
                            </div>
                            <span>
                                현재 보고 있는 페이지로, 자기소개를 위한 페이지입니다.<br />
                                Next.js를 통해 페이지를 구축했고, 별도의 DB는 사용되지 않았습니다.
                            </span>
                            <div className="about_skillbox">
                                <div className="about_skillboxA">React.js</div>
                                <div className="about_skillboxA">Next.js</div>
                                <div className="about_skillboxA">TypeScript</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ExperienceBox;