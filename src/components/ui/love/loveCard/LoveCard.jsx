import PropTypes from "prop-types";
import styles from "./lovecard.module.css";

function LoveCard({ img, paragraph, span, middle }) {
  return (
    <div className={styles.card_container}>
      <img
        data-aos="fade-left"
        src={img}
        alt="Love card image"
        style={middle && { width: "175px", height: "175px" }}
      />
      <p
        style={middle && { marginTop: "5px" }}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
      >
        {paragraph}
        <span>{span}</span>
      </p>
    </div>
  );
}

// Define prop types
LoveCard.propTypes = {
  img: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired,
  middle: PropTypes.bool,
};

export default LoveCard;
