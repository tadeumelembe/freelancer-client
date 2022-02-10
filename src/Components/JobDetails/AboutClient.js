import Rating from '@mui/material/Rating';
import styled, { ThemeProvider } from 'styled-components'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { deepOrange, deepPurple } from '@mui/material/colors';


const MainDiv = styled.div`
    width:100%;
    text-align: center;
    align-content:center;
    justify-content:center;
    align-items:center;
`;

export default function AboutClient() {

    function stringAvatar(name) {
        let arrayName = name.split(' ');
        return {
            //   sx: {
            //     bgcolor: stringToColor(name),
            //   },
            children: `${name.split(' ')[0][0]}${name.split(' ')[arrayName.length - 1][0]}`,
        };
    }

    return (
        <>
        <MainDiv>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >
                <Avatar sx={{ bgcolor:'#64b5f6' }}   {...stringAvatar('Tadeu Melembe')} readOnly />

            </Box>
            <h5 style={{fontSize:14, fonteight:500,letterSpacing:0.3}}>Tadeu Melembe</h5>
            <Rating size="small"  name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />

        </MainDiv>
        <h6 style={{fontSize:12}}>Location: <span>Maputo</span></h6>
        <h6 style={{fontSize:12}}>Location: <span>Maputo</span></h6>
        <h6 style={{fontSize:12}}>Location: <span>Maputo</span></h6>
        </>

    )
}