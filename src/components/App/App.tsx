import styles from "./App.module.scss";
import { Header } from "../Header/Header";
import { AppRouter } from '../AppRouter/AppRouter'
import { useState } from "react";

const defaultTheme = JSON.parse(localStorage.getItem('theme') || 'app_light_theme')

function App() {
  const [theme, setTheme] = useState(defaultTheme)


  const toggleTheme = () => {
    if(theme === 'app_light_theme') {
      setTheme('app_dark_theme')
      localStorage.setItem('theme', JSON.stringify('app_dark_theme'))
    } else {
      setTheme('app_light_theme')
      localStorage.setItem('theme', JSON.stringify('app_light_theme'))
    }
  }

  return (
    <div className={`app ${theme} ${styles.main}`}>
      <Header toggle={toggleTheme} />
      <AppRouter />
    </div>
  );
}

export default App;
