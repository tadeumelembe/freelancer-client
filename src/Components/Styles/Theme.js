import { createGlobalStyle } from "styled-components"
import { COLORS } from './Colors'

export const lightTheme = {
    body: '#f5f5f5', 
    card: '#fff', 
    text: '#000000',
    longText:'rgba(0, 0, 0, 0.87)',
    title:  COLORS.primary,
    normalTitle: '#000000',
    cardShadow: "0px 0px 2px #ededed",
    header: '#fff',
    headerBoxShadow: "0px 0px 5px #ededed",
    skillsCardBg: '#d3d3d3'
    // your colors
}

export const darkTheme = {
    body: '#121212', //##000414,
    text: '#fff', //209b46, 6db784, 14A800
    title: '#fff', //209b46, 6db784, 14A800
    normalTitle:  '#ffffff',
    longText: 'rgba(255,255,255,0.8)', //209b46, 6db784, 14A800
    card:'rgba(255,255,255,0.08)',
    cardShadow: "0px 0px 2px #252525",
    header: 'rgba(255,255,255,0.08)',
    headerBoxShadow: "0px 0px 1.3px rgba(255,255,255,0.8)",
    skillsCardBg: 'rgba(255,255,255,0.1)' 
    // your colors
}
export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
        font-color: ${(props)=>props.theme.text};
        padding: 0;
        margin: 0;
    }
    sc-bdvvtL, .card {
        background-color: ${(props) => props.theme.card};
        box-shadow: ${(props)=>props.theme.cardShadow};
        border: none;
    }
    p{
        color: ${(props)=>props.theme.longText};
    }
    .jobTitle{
        color: ${(props)=>props.theme.title}
    }
    h3, #client-name{
        color: ${(props)=>props.theme.normalTitle}
    }
    .navbar{
        background-color: ${(props) => props.theme.header};
        box-shadow: ${(props) => props.theme.headerBoxShadow};
        color: ${(props) => props.theme.text}!important;
    }
    .navbar-nav a, .navbar-brand {
        color: ${(props) => props.theme.longText}!important;
    }
    .skillsCard { 
        color: ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.skillsCardBg};
    }

`