import { NavigateConfig } from "./navigateConfig";
import { Link } from "react-router-dom";
import styles from "./Navigate.module.scss";

export const Navigate = () => {
  return (
      NavigateConfig.map(({ path, title }) => (
        <Link to={path} className={styles.link} key={title}>
          {title}
        </Link>
      ))
  );
};
