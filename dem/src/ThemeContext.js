import { createContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(true);
    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme);
    }
  return (
    <ThemeContext.Provider value={theme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider