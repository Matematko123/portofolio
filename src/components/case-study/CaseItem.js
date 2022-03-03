import styles from './CaseItem.module.css';

import PrimaryButton from '../reusable/PrimaryButton';

import img from '../../images/matko-filmer/matko-filmer.png';

function CaseItem({ name, desc }) {
  return (
    <li className={styles.caseItem}>
      <div className={styles.leftContainer}>
        <span className={styles.caseStudyText}>Case study</span>

        <div className={styles.bottom}>
          <span className={styles.name}>{name}</span>
          <span>{desc}</span>
          <PrimaryButton>View</PrimaryButton>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <img src={img} alt="" />
      </div>
    </li>
  );
}

export default CaseItem;
