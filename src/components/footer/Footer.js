import styles from './Footer.module.css';
import Container from '../reusable/Container';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.footer}>
          <span>© Copyright 2021 Matija Alilović</span>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
