
import HeaderBar from "../components/navigation/HeaderBar";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderBar />
    </div>
  );
};

export default Header;
