'use client';

import AboutBox from './Components/aboutbox';
import Experience from './Components/experiencebox';
import Education from './Components/educationbox';
import styles from './css/page.module.css';

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.mainbox}>
        <AboutBox />

        <div className={styles.projectbox}>
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}
