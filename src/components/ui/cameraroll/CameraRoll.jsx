import MobileFrame from "../mobileframe/Mobile";
import styles from "./cameraroll.module.css";
function CameraRoll() {
  return (
    <section className={styles.camera_roll_container}>
      <p className={styles.camera_title}>
        <span className={styles.left}>Curating the ultimate</span>
        <span className={styles.right}>CAMERA ROLL</span>
      </p>
      <div className={styles.camera_roll_grid}>
        <div className={`${styles.mob_container} ${styles.mob_sm_container}`}>
          <div data-aos="fade-right">
            <MobileFrame image="/2.jpeg" />
          </div>
        </div>
        <div className={styles.mob_container}>
          <MobileFrame image="/nancy.jpg" />
        </div>
        <div className={`${styles.mob_container} ${styles.mob_sm_container}`}>
          <div data-aos="fade-left">
            <MobileFrame image="/1.jpeg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CameraRoll;
