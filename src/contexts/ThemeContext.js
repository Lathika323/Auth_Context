import React, { createContext, useContext, useState } from 'react'

const ThemeContext= createContext();


export default function ThemeProvider({children}) {
    const[theme,setTheme]=useState("light");

    //Function to change the theme
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light"? "dark" : "light"))
    }
  return (
    <ThemeContext.Provider value ={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(){
    return useContext(ThemeContext);
}
