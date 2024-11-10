import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./packagecard.module.css";

function PackageCard({ img, list, title, btnText }) {
  return (
    <div className={styles.mainCard}>
      <div>
        <div className={styles.movePart}>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link to="/">
        <span>View More</span>
      </Link>
      <button onClick={() => {}}>
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
