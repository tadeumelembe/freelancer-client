
import styled from 'styled-components'
import { HomeStyles } from '../Components/Styles/HomeTheme'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const MainDiv = styled.div`

  min-height:100vh;
  background-color:#fff;

`;

const Item = styled.div`

  min-height:100%
  background-color:#000;

`;

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400,
        },
    },
});

export default function Home() {
    return (
        <MainDiv>
            <HomeStyles />
            <div className='first-section'>
                <div className='container-md'>
                    <ThemeProvider>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Item>xs=6 md=8</Item>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Item>xs=6 md=4</Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </ThemeProvider>
                </div>
            </div>
        </MainDiv>
    );
}