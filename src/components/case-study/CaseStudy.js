import styles from './CaseStudy.module.css';

import Container from '../reusable/Container';
import CaseItem from './CaseItem';

import filmer from '../../images/matko-filmer/matko-filmer.png';
import social from '../../images/matko-social/matko-social.png';
import slime from '../../images/slime-shooter/slime-shooter.png';
import nike from '../../images/nike-store/nike-store.png';

import Tilt from 'react-parallax-tilt';

function CaseStudy() {
  return (
    <div className={styles.caseStudyWrapper}>
      <Container>
        <h1 className={styles.caseStudyText} id="caseStudy">
          Case Studies
        </h1>
        <ul className={styles.caseStudyList}>
          <CaseItem
            color="#80171f"
            name="MatkoFilmer"
            desc="This app enables us to see movie info and to play movies"
            img={filmer}
          ></CaseItem>

          <CaseItem
            color="black"
            name="MatkoSocial"
            desc="Social media app using MERN stack"
            img={social}
          ></CaseItem>
          <CaseItem
            color="#6f721a"
            name="Slime Shooter"
            desc="Social media app using MERN stack"
            img={slime}
          ></CaseItem>
          <CaseItem
            color="#1b212c"
            name="Nike Store"
            desc="Social media app using MERN stack"
            img={nike}
          ></CaseItem>
        </ul>
      </Container>
    </div>
  );
}

export default CaseStudy;
