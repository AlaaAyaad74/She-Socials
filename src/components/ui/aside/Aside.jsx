// import styles from "./Aside.module.css";
// import links from "../../../../data/links";
// import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";
// function Aside({ isOpen, setOpen }) {
//   return (
//     <aside>
//       <div
//         className={`${styles.aside_Container} ${
//           isOpen ? styles.open : styles.close
//         }`}
//       >
//         <ul className={styles.links_List}>
//           {links.map((link, index) => (
//             <li key={index} onClick={() => setOpen(!isOpen)}>
//               <NavLink
//                 className={({ isActive }) => (isActive ? styles.active : "")}
//                 to={`${link.path}`}
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// }
// Aside.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   setOpen: PropTypes.func.isRequired,
// };
// export default Aside;
import { useEffect, useRef } from "react";
import styles from "./Aside.module.css";
import links from "../../../../data/links";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Aside({ isOpen, setOpen }) {
  const asideRef = useRef(null);

  // Close the Aside if clicked outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  return (
    <aside ref={asideRef}>
      <div
        className={`${styles.aside_Container} ${
          isOpen ? styles.open : styles.close
        }`}
      >
        <ul className={styles.links_List}>
          {links.map((link, index) => (
            <li key={index} onClick={() => setOpen(!isOpen)}>
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
  setOpen: PropTypes.func.isRequired,
};

export default Aside;
