import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#f5f5f5', 
    card: '#fff', 
    text: '#000',
    cardShadow: "0px 0px 2px #ededed",
    header: '#fff',
    headerBoxShadow: "0px 0px 5px #ededed",
    skillsCardBg: '#d3d3d3'
    // your colors
}

export const darkTheme = {
    body: '#000000', //#1976d2, 003DDA, 1C6DD0
    text: '#fff', //209b46, 6db784, 14A800
    card:'rgba(255,255,255,0.05)',
    cardShadow: "0px 0px 2px #252525",
    header: '#121212',
    headerBoxShadow: "0px 0px 5px #ededed",
    skillsCardBg: '#222222' 
    // your colors
}
export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
        font-color: ${(props)=>props.theme.text};
        padding: 0;
        margin: 0;
    }
    .card {
        background-color: ${(props) => props.theme.card};
        box-shadow: ${(props)=>props.theme.cardShadow};
        border: none;
    }
    p{
        color: ${(props)=>props.theme.text};
    }
    .header{
        background-color: ${(props) => props.theme.header};
        box-shadow: ${(props) => props.theme.headerBoxShadow};
    }
    .skillsCard { 
        color: ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.skillsCardBg};
    }

`