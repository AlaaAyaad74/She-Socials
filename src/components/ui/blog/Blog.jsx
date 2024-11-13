import { useEffect, useRef, useState } from "react";
import styles from "./blog.module.css";
import { blogData } from "./data";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import MobileFrame from "../mobileframe/Mobile";
import Button from "../button/Button";

function Blog() {
  const [distance, setDistance] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const translateRef = useRef(null);
  // console.log(screenWidth);
  // Define item widths for responsive design
  const DESKTOP_ITEM_WIDTH = 366;
  const MOBILE_ITEM_WIDTH = 210;
  const itemWidth = screenWidth > 440 ? DESKTOP_ITEM_WIDTH : MOBILE_ITEM_WIDTH;
  const maxTranslateX = blogData.length * itemWidth - screenWidth;

  // Update screen width on resize
  useEffect(() => {
    setScreenWidth(() => window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Move slides based on direction and screen size
  const moveSlides = (direction) => {
    setDistance((prevDistance) => {
      let newDistance =
        direction === "right"
          ? prevDistance + itemWidth
          : prevDistance - itemWidth;

      // Ensure we don't scroll beyond bounds
      newDistance = Math.max(0, Math.min(newDistance, maxTranslateX));
      translateRef.current.style.transform = `translateX(-${newDistance}px)`;
      return newDistance;
    });
  };

  return (
    <section className={styles.blog_section}>
      <h1
        className={styles.main_Title}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="100"
      >
        <span className={styles.mainSpan}>
          imagine <span className={styles.subSpan}>waking up to this...</span>
        </span>
      </h1>
      <div className={styles.main__Cont} id="BLOG">
        <div className={styles.slider_container} ref={translateRef}>
          {blogData.map((item, index) => (
            <div key={index} className={styles.mobile_Container}>
              <MobileFrame video="/file.mp4" />
            </div>
          ))}
        </div>
        {distance < maxTranslateX && (
          <button
            className={`${styles.arrow} ${styles.arrow__right}`}
            onClick={() => moveSlides("right")}
            style={{ border: "none", cursor: "pointer" }}
          >
            <TfiAngleRight
              style={{ fill: "#fff", fontSize: "2.2rem", fontWeight: "500" }}
            />
          </button>
        )}
        {distance > 0 && (
          <button
            className={`${styles.arrow} ${styles.arrow__left}`}
            onClick={() => moveSlides("left")}
            style={{ border: "none", cursor: "pointer" }}
          >
            <TfiAngleLeft
              style={{ fill: "#fff", fontSize: "2.2rem", fontWeight: "500" }}
            />
          </button>
        )}
      </div>
      <div
        className={styles.view_All}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
      >
        <h1>Explore Our</h1>
        <Button path="/packages" value="PACKAGES" width={191} />
      </div>
    </section>
  );
}

export default Blog;
