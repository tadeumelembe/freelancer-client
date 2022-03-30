import React, { useContext, useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import { DarkModeContext } from './Context/DarkModeContext';
import DrawerComponent from './Drawer';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavBar() {
    const { darkTheme, toggleDarkTheme } = useContext(DarkModeContext)
    const [checked, setChecked] = useState(false)

    useEffect(() => {

        if (darkTheme === 'light') {
            setChecked(false)
        } else {
            setChecked(true)
        }

    }, [darkTheme])


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMobile)

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

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='navbar' disableElevation>
                <Container maxWidth="xl">
                    <Toolbar variant="dense">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                            <DrawerComponent />
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    className="text-color"
                                    sx={{ my: 2, display: 'block' }}
                                >
                                    <Typography className='text-color'>{page}</Typography>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                            >
                                <Badge badgeContent={4} color="error">
                                    <MailIcon className='plainIcon' />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon className='plainIcon' />
                                </Badge>
                            </IconButton>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                id="account-menu"
                                anchorEl={anchorElUser}

                                keepMounted
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                id="account-menu"
                                //onClick={handleClose}
                                PaperProps={{

                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        width: 320,
                                        maxWidth: '100%',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: "inherit",
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Avatar /> <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                                <MenuItem>
                                    <Avatar />
                                    <Typography textAlign="center">
                                        Dark mode
                                    </Typography>
                                    <AntSwitch
                                        variant="body2"
                                        sx={{
                                            justifySelf: 'end'
                                        }}
                                        checked={checked}
                                        onChange={toggleDarkTheme}
                                        inputProps={{ "aria-label": "ant design" }}
                                    />
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}