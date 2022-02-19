import { useState,useEffect } from 'react';
import { createContext } from "react";

export const DarkModeContext = createContext({});


export const UseDarkProvider = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const restoreTheme = localStorage.getItem('dark_mode');

    if (restoreTheme)
      setTheme(restoreTheme);

  }, [])


  useEffect(() => {
    localStorage.setItem('dark_mode', theme)
  }, [theme])


  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }


  return { theme, toggleTheme }
  // return(
  //     <DarkModeContext.Provider value={[theme,toggleTheme]}>
  //         {propTypes.children}
  //     </DarkModeContext.Provider>
  // )

}