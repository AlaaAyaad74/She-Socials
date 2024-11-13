import PropTypes from "prop-types";
import styles from "./buttonToTop.module.css";
import { MdArrowBackIos } from "react-icons/md";

function ButtonToTop({ scrollToTop }) {
  return (
    <button className={styles.scrollButton} onClick={scrollToTop}>
      <MdArrowBackIos
        fill="#6c5656"
        style={{ transform: "rotate(90deg)", marginTop: "10px" }}
      />
    </button>
  );
}

// Add prop types validation for the scrollToTop prop
ButtonToTop.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

export default ButtonToTop;
