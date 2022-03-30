import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components'

import './App.css';
import { Header } from './Components/Header'
import Jobs from './Views/Jobs';
import JobDetails from './Views/JobDetails';
import Home from './Views/Home';
import NavBar from './Components/NavBar';

import { lightTheme, darkTheme, GlobalStyles } from './Components/Styles/Theme'
import { UseDarkProvider, DarkModeContext } from './Components/Context/DarkModeContext';
import { UserContext, UserProvider } from './Components/Context/UserContext';




const MainDiv = styled.div`

  min-height:100vh;

`;

function App() {

  const darkModeValue = UseDarkProvider();
  const userContextValue = UserProvider


  return (
    <ThemeProvider theme={darkModeValue.darkTheme === 'light' ? lightTheme : darkTheme}>

      <GlobalStyles />

      <UserContext.Provider value={userContextValue}>
        <MainDiv>

          <DarkModeContext.Provider value={darkModeValue}>
            <NavBar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="jobs/:jobId" element={<JobDetails />} />
            </Routes>

          </DarkModeContext.Provider>

        </MainDiv>
      </UserContext.Provider>

    </ThemeProvider>
  );
}


export default App;
