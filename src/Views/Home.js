
import styled from 'styled-components'
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

const MainDiv = styled.div`

  min-height:100vh;
  background-color:#fff;
  margin-top:15px

`;

const FirstSection = styled.div`

  height:60vh;
  background-color:#f5f5f5;

`;

const Item = styled.div`

  background-color:#ffffff00;

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
            <FirstSection>
                <div className='container-md'>
                        <Box sx={{ flexGrow: 1, height: '100%' }}>
                            <Grid
                                container
                                spacing={2}
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                                style={{ minHeight: '55vh' }}
                            >
                                <Grid item xs={12} md={6}>
                                    <Item>
                                        <h1 style={{ fontSize: 45 }}>Dont't just work hard,<br /> work smarter</h1>
                                        <h6 style={{ fontSize: 20, color: '#465666' }}>Find the best working experience</h6>
                                        <Stack spacing={2} direction="row">
                                            <Link to="/jobs">
                                            <Button variant="contained" sx={{fontWeight:580}} disableElevation>Find work</Button>
                                            </Link>
                                            <Button variant="outlined">Find minds</Button>
                                        </Stack>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Item>xs=6 md=4</Item>
                                </Grid>
                            </Grid>
                        </Box>
                </div>
            </FirstSection>
        </MainDiv>
    );
}