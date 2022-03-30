import { useState,useEffect, createContext  } from 'react';

export const DarkModeContext = createContext({});


export const UseDarkProvider = () => {
  const [darkTheme, setTheme] = useState('dark');

  useEffect(() => {
    const restoreTheme = localStorage.getItem('dark_mode');

    if (restoreTheme)
      setTheme(restoreTheme);

  }, [])


  useEffect(() => {
    localStorage.setItem('dark_mode', darkTheme)
  }, [darkTheme])


  const toggleDarkTheme = () => {
    darkTheme === 'dark' ? setTheme('light') : setTheme('dark');
  }


  return { darkTheme, toggleDarkTheme }
  // return(
  //     <DarkModeContext.Provider value={[theme,toggleTheme]}>
  //         {propTypes.children}
  //     </DarkModeContext.Provider>
  // )

}