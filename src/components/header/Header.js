import styles from './Header.module.css';

import Container from '../reusable/Container';
import logo from '../../images/logo.png';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Container className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="" srcset="" />
        </div>
        <ul className={styles.links}>
          <li>
            <a className={styles.link} href="#caseStudy">
              Case Studies
            </a>
          </li>
          <li>
            <a className={styles.link} href="">
              Testimonials
            </a>
          </li>
          <li>
            <a className={styles.link} href="">
              Contact
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
}

export default Header;
