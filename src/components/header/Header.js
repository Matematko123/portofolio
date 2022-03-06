import styles from './Header.module.css';

import Container from '../reusable/Container';
import logo from '../../images/logo.png';

function Header() {
  return (
    <header className={styles.headerContainer} id="#top">
      <Container className={styles.header}>
        <div className={styles.logo}>
          <a href="#top">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className={styles.links}>
          <li>
            <a className={styles.link} href="#caseStudy">
              Case Studies
            </a>
          </li>
          <li>
            <a className={styles.link} href="#aboutme">
              About me
            </a>
          </li>
          <li>
            <a className={styles.link} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
}

export default Header;
