import { useRef, useState } from "react";
import styles from "./blog.module.css";
import { blogData } from "./data";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

import MobileFrame from "../mobileframe/Mobile";
import Button from "../button/Button";

function Blog() {
  const [distance, setDistance] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const translateRef = useRef(null);

  const mainWidth = blogData.length * 366 - window.innerWidth;

  /**function that Moves Slides Right */
  const moveSlidesRight = () => {
    if (mainWidth > distance) {
      if (mainWidth > 0 && mainWidth - distance < 354) {
        translateRef.current.style.transform = `translateX(0px)`;
        setDistance(0);
        setShowLeftArrow(false); // Hide left arrow when at start
        return;
      }

      setDistance((prevDistance) => {
        const newDistance = prevDistance + 366;
        translateRef.current.style.transform = `translateX(-${newDistance}px)`;

        setShowLeftArrow(true); // Show left arrow
        setShowRightArrow(newDistance < mainWidth); // Hide right arrow if at end

        return newDistance;
      });
    } else {
      setDistance(0);
      translateRef.current.style.transform = `translateX(0px)`;
      setShowLeftArrow(false); // Hide left arrow when at start
    }
  };

  /**function that Moves Slides Left */
  const moveSlidesLeft = () => {
    if (distance > 0) {
      setDistance((prevDistance) => {
        const newDistance = prevDistance - 366;
        translateRef.current.style.transform = `translateX(-${newDistance}px)`;

        setShowRightArrow(true); // Show right arrow
        setShowLeftArrow(newDistance > 0); // Hide left arrow if at start

        return newDistance;
      });
    } else {
      setDistance(mainWidth);
      translateRef.current.style.transform = `translateX(-${mainWidth}px)`;
      setShowRightArrow(false); // Hide right arrow when at end
    }
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
              <MobileFrame video="/file.mp4" key={index} />
            </div>
          ))}
        </div>
        {showRightArrow && (
          <button
            className={`${styles.arrow} ${styles.arrow__right}`}
            style={{ border: "none", cursor: "pointer" }}
            onClick={moveSlidesRight}
          >
            <TfiAngleRight
              style={{ fill: "#fff", fontSize: "2.2rem", fontWeight: "500" }}
            />
          </button>
        )}
        {showLeftArrow && (
          <button
            className={`${styles.arrow} ${styles.arrow__left}`}
            style={{ border: "none", cursor: "pointer" }}
            onClick={moveSlidesLeft}
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
