import styles from "./Aside.module.css";
import links from "../../../../data/links";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
function Aside({ isOpen }) {
  return (
    <aside>
      <div
        className={`${styles.aside_Container} ${
          isOpen ? styles.open : styles.close
        }`}
      >
        <ul className={styles.links_List}>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={`${link.path}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
Aside.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
export default Aside;
