import { Link } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main_grid_footer}>
        <div>
          <div className={styles.title}>
            <span data-aos="fade-up">Explore our latest work on</span>
            <h1 data-aos="fade-up">Instagram</h1>
          </div>
          <div className={styles.gallery}>
            <Link to="https://www.instagram.com/she__socials/">
              <img src="/social.jpg" alt="social" />
            </Link>
          </div>
        </div>
        <div className={styles.middle}>
          <img src="/Shesocialslogo.webp" alt="logo" />
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <span className={styles.copyright}>
              © 2023 She Socials.
              <br /> Proudly Designed by ZIEKE
            </span>
            <div className={styles.terms_polices_container}>
              <Link to="/" className={styles.terms_Polices}>
                Terms & Conditions
              </Link>
              <span style={{ margin: "0 2px" }}> | </span>
              <Link to="/" className={styles.terms_Polices}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.title}>
            <span data-aos="fade-up">Quick</span>
            <h1 data-aos="fade-up">Menu</h1>
          </div>
          <ul data-aos="fade-up">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">How to Work</Link>
            </li>
            <li>
              <Link to="/">Packages</Link>
            </li>
            <li>
              <Link to="/">Our Work</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
