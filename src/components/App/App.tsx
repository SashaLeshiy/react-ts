import styles from "./App.module.scss";
import { Header } from "../Header/Header";
import { AppRouter } from '../AppRouter/AppRouter'

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
