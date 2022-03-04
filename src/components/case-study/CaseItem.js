import styles from './CaseItem.module.css';

import PrimaryButton from '../reusable/PrimaryButton';

import Tilt from 'react-parallax-tilt';

function CaseItem({ name, desc, img, color }) {
  return (
    <Tilt
      style={{ backgroundColor: color }}
      className={styles.caseItem}
      tiltMaxAngleX={1}
      tiltMaxAngleY={1}
      scale={1.01}
    >
      <div className={styles.leftContainer}>
        <span className={styles.caseStudyText}>Case study</span>

        <div className={styles.bottom}>
          <span className={styles.name}>{name}</span>
          <span className={styles.desc}>{desc}</span>
          <PrimaryButton>View</PrimaryButton>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <img src={img} alt="" />
      </div>
    </Tilt>
  );
}

export default CaseItem;
