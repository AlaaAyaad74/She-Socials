import { Link, NavLink } from "react-router-dom";
import styles from "./Headerstyle.module.css";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import links from "../../../../data/links";
import Aside from "../aside/Aside";
function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={styles.header_Container}>
      <div className={styles.location}>
        <p>
          <span>
            <img src="/svgs/location.svg" alt="location" />
          </span>
          Servicing social magic across Sydney | Destination Weddings Available
        </p>
      </div>
      <nav>
        <div className={styles.burgerIcon}>
          <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        </div>
        <Link to="/" className={styles.logo}>
          <img src="/Shesocialslogo.webp" alt="logo" />
        </Link>
        <div className={styles.links_Container}>
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
        <Aside isOpen={isOpen} />
      </nav>
    </header>
  );
}

export default Header;
