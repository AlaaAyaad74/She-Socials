import Button from "../button/Button";
import styles from "./inqueue.module.css";
function Inque() {
  return (
    <section className={styles.inquire_Section}>
      <div
        className={styles.main_Grid}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="100"
        data-aos-duration="1000"
      >
        <div className={styles.img_container}>
          <img src="/2.webp" alt="wedding" />
        </div>
        <div className={styles.info}>
          <h1>
            We come with an eye for detail & leave with heartfelt content,
          </h1>
          <p>capturing every forever moment in between.</p>
          <Button path="/" value="INQUIRE" width={217} />
        </div>
      </div>
    </section>
  );
}

export default Inque;
