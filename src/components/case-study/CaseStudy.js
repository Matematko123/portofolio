import styles from './CaseStudy.module.css';

import Container from '../reusable/Container';
import CaseItem from './CaseItem';

import filmer from '../../images/matko-filmer/matko-filmer.png';
import social from '../../images/matko-social/matko-social.png';
import slime from '../../images/slime-shooter/slime-shooter.png';
import nike from '../../images/nike-store/nike-store.png';
import windows from '../../images/windows-login/windows-login.png';
import realtimeChat from '../../images/realtime-chat/realtime-chat.png';

function CaseStudy() {
  return (
    <div className={styles.caseStudyWrapper}>
      <Container>
        <h1 className={styles.caseStudyText} id="caseStudy">
          Case Studies
        </h1>
        <ul className={styles.caseStudyList}>
          <CaseItem
            color="black"
            name="Matko Social"
            desc="Full social media app using MERN stack, with timeline, profile, login/register..."
            img={social}
            link={'https://github.com/Matematko123/MatkoSocial'}
          ></CaseItem>

          <CaseItem
            color="#80171f"
            name="Matko Filmer"
            desc="Movie info and trailer app which enables users to find all of their favourite movies "
            img={filmer}
            link={'https://github.com/Matematko123/MatkoFilmer'}
          ></CaseItem>

          <CaseItem
            color="#40a694"
            name="Slime Shooter"
            desc="Unique top down shooter enabling users to protect main tower by placing turrets"
            img={slime}
            link={'https://github.com/Matematko123/TOPDOWN-SHOOTER'}
          ></CaseItem>

          <CaseItem
            color="#0f70fa"
            name="Realtime Chat"
            desc="Realtime chat app using Firebase for backend"
            img={realtimeChat}
            link={'https://github.com/Matematko123/RealtimeChat'}
          ></CaseItem>

          <CaseItem
            color="#1b212c"
            name="Nike Store"
            desc="Nike Store replica using React with cart, checkout..."
            img={nike}
            link={'https://github.com/Matematko123/NIKE-STORE'}
          ></CaseItem>

          <CaseItem
            color="#2a063a"
            name="Windows 11 Auth"
            desc="Auth app using ReactJS"
            img={windows}
            link={'https://github.com/Matematko123/Windows-Login-React'}
          ></CaseItem>
        </ul>
      </Container>
    </div>
  );
}

export default CaseStudy;
