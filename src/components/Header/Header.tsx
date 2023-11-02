import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/react.svg"
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    
    const linkToHome = () => {
        navigate('/');
    }

  return (
    <header className={styles.main}>
      <img src={logo} onClick={linkToHome} className={styles.logo} alt="logo" />
      <div className={styles.links}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/about" className={styles.link}>About</Link>
      </div>
    </header>
  );
};

