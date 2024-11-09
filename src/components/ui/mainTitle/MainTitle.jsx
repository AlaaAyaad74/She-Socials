import PropTypes from "prop-types";
import styles from "./maintitle.module.css";
function MainTitle({ title }) {
  return (
    <div className={`${styles.mainTitle_Container} edit_Main_Margin`}>
      <h1>{title}</h1>
    </div>
  );
}

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default MainTitle;
