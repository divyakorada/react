import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  function getStyles() {
   return {
    background: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#ffff',
    textAlign: 'center',
    padding: "20px",
    border: '1px solid rgb(204, 204, 204)'
    }
  }
  return (
    <div style={getStyles()} className="usecontenxt__wrapper">
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
  </div>
  );
}

// Example 2
const AuthenticationContext = createContext()

function AuthenticationProvider ({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <AuthenticationContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

function LoginButton() {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthenticationContext);
    return(
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    )
}

export { ThemeProvider, ThemedComponent, AuthenticationProvider, LoginButton };
