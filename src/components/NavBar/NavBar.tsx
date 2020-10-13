import React, { useRef } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {

  let display = false;
  const show = useRef<HTMLLinkElement>(null);
    function handleNav() {

      if (display === false) {

        if (show.current !== null) {
          show.current.style.right = '0';
          display = true;
        }
        
      }   
      else if (!display === false) {
        if (show.current !== null) {
          show.current.style.right = '-120%';
          display = false;
        }
      }   
    }

    const navigationDisplay = () => {
        if (show.current !== null) {
          show.current.style.right = '-120%';
          display = false;
        }
    }

  
  return (
    <div className={styles.navBar}>
      <Link to='/' className={styles.logo}>
        <img
          className={styles.logoImg}
          src={require("./Logo/logo.png")}
          alt="Logo"
        />
      </Link>
      <nav className={styles.Nav} ref={show}>
        <Link className={styles.navList} to="/" onClick={navigationDisplay}>
          Home
        </Link>
        <Link className={styles.navList} to="/missions" onClick={navigationDisplay}>
          Missions
        </Link>
        <Link className={styles.navList} to="/rockets" onClick={navigationDisplay}>
          Rockets
        </Link>
        <Link className={styles.navList} to="/ships" onClick={navigationDisplay}>
          Ships
        </Link>
      </nav>
      <div className={styles.menuIcon}>
        <MenuIcon onClick={handleNav} />
      </div>
    </div>
  );
};

export default NavBar;
