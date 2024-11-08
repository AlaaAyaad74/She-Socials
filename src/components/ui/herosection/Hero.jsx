import Button from "../button/Button";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.hero_Container}>
      <video
        src="./file.mp4"
        autoPlay
        loop
        muted={true}
        className={styles.video}
      />
      <div className={styles.hero_Content}>
        <div
          className={styles.content_container}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="2000"
          data-aos-offset="0"
        >
          <h1>
            Your designated
            <br /> PAPARAZZI <br />{" "}
            <span className={styles.special_Text}>
              <span className={styles.special_Span}>for your</span> WEDDING DAY
            </span>
          </h1>
          <Button width={191} value="HOW WE WORK" path="how-we-work" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
