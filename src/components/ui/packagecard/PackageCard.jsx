import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./packagecard.module.css";
import { useEffect, useState } from "react";

function PackageCard({ img, list, title, btnText }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.mainCard}>
      <div className={styles.movePart}>
        <img src={img} alt={title} />
        <h2 data-aos={screenWidth <= 440 ? "fade-up" : ""}>{title}</h2>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <Link to="/">
        <span>View More</span>
      </Link>
      <button>
        <span>Investment</span>
        {btnText}
      </button>
    </div>
  );
}

PackageCard.propTypes = {
  img: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default PackageCard;
