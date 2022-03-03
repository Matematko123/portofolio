import styles from './About.module.css';

import Container from '../reusable/Container';
import PrimaryButton from '../reusable/PrimaryButton';

function About() {
  return (
    <div className={styles.aboutWrapper}>
      <Container>
        <div className={styles.about}>
          <span className={styles.smallText}>
            Hi! I'm Matija. I'm a full stack developer &amp; game developer from
            Zagreb
          </span>
          <span className={styles.bigText}>
            <span className={styles.hoverText}>Elevating</span>{' '}
            <span className={styles.specialText}>user experience</span>{' '}
            <span className={styles.hoverText}>through</span>
            <span className={styles.hoverText}> user friendly</span>
            <span className={styles.hoverText}> &amp; </span>
            <span className={styles.hoverText}> engaging designs </span>
          </span>
          <div className={styles.buttons}>
            <PrimaryButton>Contact me</PrimaryButton>
            <PrimaryButton>About me</PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
