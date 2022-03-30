import React, { useContext, useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { DarkModeContext } from './Context/DarkModeContext';
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";


const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
        "& .MuiSwitch-thumb": {
            width: 15
        },
        "& .MuiSwitch-switchBase.Mui-checked": {
            transform: "translateX(9px)"
        }
    },
    "& .MuiSwitch-switchBase": {
        padding: 2,
        "&.Mui-checked": {
            transform: "translateX(12px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff"
            }
        }
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(["width"], {
            duration: 200
        })
    }
}));

export const Header = () => {
    const { darkTheme, toggleDarkTheme } = useContext(DarkModeContext)
    const [ checked, setChecked ] = useState(false)

    useEffect(() => {

        if (darkTheme === 'light') {
            setChecked(false)
        } else {
            setChecked(true)
        }   

      }, [darkTheme])

    return (
        <div>
            <Navbar className='header' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Phandar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing" >Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" >Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            
                                <AntSwitch
                                    checked={checked} onChange={toggleDarkTheme}
                                    inputProps={{ "aria-label": "ant design" }}
                                />

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

