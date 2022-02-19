import React from 'react';
import {Header} from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Jobs from './Views/Jobs';
import JobDetails from './Views/JobDetails';
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from './Components/Styles/Theme'

import { UseDarkProvider, DarkModeContext } from './Components/Context/DarkModeContext';

const MainDiv = styled.div`

  min-height:100vh;

`;

function App() {

  const darkModeValue = UseDarkProvider();

  const Home = () => {
    return (
      <>
        <p>Hello</p>
      </>
    )
  }

  return (
    <ThemeProvider theme={darkModeValue.theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      
      <MainDiv>
        <DarkModeContext.Provider value={darkModeValue}>
          <Header />
        </DarkModeContext.Provider>
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
