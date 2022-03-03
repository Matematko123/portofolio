import styles from './CaseStudy.module.css';

import Container from '../reusable/Container';
import CaseItem from './CaseItem';

function CaseStudy() {
  return (
    <div className={styles.caseStudyWrapper}>
      <Container>
        <h1 className={styles.caseStudyText} id="caseStudy">
          Case Studies
        </h1>
        <ul className={styles.caseStudyList}>
          <CaseItem name="MatkoFilmer" desc="This app enables us"></CaseItem>
          <CaseItem></CaseItem>
          <CaseItem></CaseItem>
        </ul>
      </Container>
    </div>
  );
}

export default CaseStudy;
