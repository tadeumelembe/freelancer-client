import Rating from '@mui/material/Rating';
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';


const MainDiv = styled.div`
    width:100%;
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
                        flexDirection: 'row',
                        justifyContent: 'start',
                        pt: 1,
                        mb: 2,
                        bgcolor: '#00000000',
                        borderRadius: 1,
                    }}
                >
                    <Avatar sx={{ bgcolor: '#64b5f6',fontSize: 18   ,fontWeight: 590,letterSpacing:0.2 }}   {...stringAvatar('Tadeu Melembe')} readOnly />
                    <Box
                        sx={{
                            pl:1.2
                        }}
                    >
                        <h5 id="client-name" style={{ fontSize: 16, fonteight: 500, marginBottom:2, letterSpacing: 0.3 }}>Tadeu Melembe</h5>
                        <Rating size="small" name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    </Box>

                </Box>


            </MainDiv>
            <h6 style={{ fontSize: 13 }}>Location: <span>Maputo</span></h6>
        </>

    )
}