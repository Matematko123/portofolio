import styles from './AboutMe.module.css';

import Container from '../reusable/Container';

import reactImg from '../../images/skills/react_logo.png';
import nodeImg from '../../images/skills/node_logo.png';
import expressImg from '../../images/skills/express_logo.png';
import mongoImg from '../../images/skills/mongodb_logo.png';
import typescriptImg from '../../images/skills/typescript_logo.png';

import Tilt from 'react-parallax-tilt';

function AboutMe() {
  return (
    <div className={styles.wrapper} id="aboutme">
      <Container>
        <h1 className={styles.titleText}>About me</h1>
        <p className={styles.text}>
          I'm full stack and game developer from Zagreb. I have 2 years of
          experience in the game dev industry and worked on several full stack
          projects in the past couple of years.
        </p>
        <h3 className={styles.skillsText}>Skills</h3>
        <div className={styles.skillsContainer}>
          <Tilt
            className={styles.skill}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
          >
            <img src={typescriptImg} alt="typescript img"  />
            <span>Unity</span>
          </Tilt>

          <Tilt
            className={styles.skill}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
          >
            <img src={reactImg} alt="react img" />
            <span>React</span>
          </Tilt>

          <Tilt
            className={styles.skill}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
          >
            <img src={nodeImg} alt="node img"  />
            <span>NodeJS</span>
          </Tilt>

          <Tilt
            className={styles.skill}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
          >
            <img src={mongoImg} alt="" srcset="" />
            <span>MongoDB</span>
          </Tilt>

          <Tilt
            className={styles.skill}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
          >
            <img src={expressImg} alt="" srcset="" />
            <span>Express</span>
          </Tilt>
        </div>
      </Container>
    </div>
  );
}

export default AboutMe;
