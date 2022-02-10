import React, { useState } from 'react';
import {Header} from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Jobs from './Views/Jobs';
import JobDetails from './Views/JobDetails';
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from './Components/Styles/Theme'
import {useDarkMode} from './Components/Styles/useDarkMode'

const MainDiv = styled.div`

  min-height:100vh;

`;

function App() {
  //const [theme, setTheme] = useState('dark');
  const [ theme, toggleTheme ] = useDarkMode();


  // const toggleTheme = () => {
  //   theme === "light" ? setTheme('dark') : setTheme('light');
  // }

  const Home = () => {
    return (
      <>
        <p>Hello</p>
      </>
    )
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      
      <MainDiv>

        <Header theme={theme} toogleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:jobId" element={<JobDetails />} />
        </Routes>

      </MainDiv>
    </ThemeProvider>
  );
}


export default App;
