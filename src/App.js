import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components'

import {Header} from './Components/Header'
import Jobs from './Views/Jobs';
import JobDetails from './Views/JobDetails';
import Home from './Views/Home';

import {lightTheme, darkTheme, GlobalStyles} from './Components/Styles/Theme'
import { UseDarkProvider, DarkModeContext } from './Components/Context/DarkModeContext';

const MainDiv = styled.div`

  min-height:100vh;

`;

function App() {

  const darkModeValue = UseDarkProvider();

  return (
    <ThemeProvider theme={darkModeValue.theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      
      <MainDiv>
        <DarkModeContext.Provider value={darkModeValue}>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:jobId" element={<JobDetails />} />
        </Routes>
        </DarkModeContext.Provider>

      </MainDiv>
    </ThemeProvider>
  );
}


export default App;
