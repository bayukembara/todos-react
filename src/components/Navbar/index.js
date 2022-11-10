import styles from "./Navbar.module.css";
import shoppingIcon from "../../assets/shopping-icon.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={shoppingIcon} alt="shopping icon" className={styles.navIcon} />
      <h1 className={styles.navTitle}>Shopping List</h1>
    </nav>
  );
};

export default Navbar;
