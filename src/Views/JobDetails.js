import * as React from 'react';
import { useParams } from "react-router-dom";
import { COLORS } from '../Components/Styles/Colors'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import AboutClient from '../Components/JobDetails/AboutClient'

export default function JobDetails(params) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { jobId } = useParams();
    const jobList = [
        {
            id: 1,
            title: 'Laravel specialist - ask some questions',
            price: '50000',
            description: ' I need a simple script and form in corel draw that allows me to measure the curve length of the select objects and shows me the value depending what option i choose from two diferent options. one option will give me curve length multiplied by 2 and the other one by 2.5.',
            skills: {
                0: 'php',
                1: 'ajax',
                2: 'js',
                3: 'Laravel',
                4: 'React Native',
                5: 'React Native',
                6: 'React Native',
                7: 'React Native',
                8: 'React Native',
                9: 'React Native',
                10: 'Photoshop'
            },
        },
        {
            id: 2,
            title: 'Need wordpress developer for e-com site',
            price: '3000',
            skills: {
                0: 'php',
                1: 'ajax',
                2: 'js',
                3: 'Laravel'
            },
            description: 'i m looking simple e-com website using wordpress and i need products synchronizing with facebook more detail on chat '
        },
        {
            id: 3,
            title: 'Crm Software Development',
            price: '25000',
            skills: {
                0: 'php',
                1: 'ajax',
                2: 'js'
            },
            description: 'i m looking simple e-com website using wordpress and i need products synchronizing with facebook more detail on chat '
        },
        {
            id: 4,
            title: 'Luxembourg writer’s',
            price: '10000',
            skills: {
                0: 'php',
                1: 'ajax',
                2: 'js'
            },
            description: 'i m looking simple e-com website using wordpress and i need products synchronizing with facebook more detail on chat '
        },
        {
            id: 5,
            title: 'Corel Draw x7 simple script',
            price: '8450',
            skills: {
                0: 'php',
                1: 'ajax',
                2: 'js'
            },
            description: 'i m looking simple e-com website using wordpress and i need products synchronizing with facebook more detail on chat '
        },
        {
            id: 6,
            title: 'Web Develop Based on Frontend',
            price: '1400',
            skills: {
                0: 'php',
                1: 'ajax',
                2: 'js'
            },
            description: 'i m looking simple e-com website using wordpress and i need products synchronizing with facebook more detail on chat '
        },
    ]
    return (
        <div className="container-md">
            <div className="row pt-4">
                <div className='col-lg-8'>
                    <div className="card" style={{ minHeight: '100vh', border: 'none', marginTop: 1 }}>
                        <div className="p-4">
                            <h3 style={{ fontWeight: 450, fontSize: 22 }}>{jobList[jobId].title}</h3>
                            <p style={{ fontSize: 12, fontWeight: 450, color: '#545956', marginTop: -8 }}>45 minutes ago</p>
                            <h5 style={{ fontSize: 14, fontWeight: 700, marginTop: -8, color: COLORS.secondary }}>
                                20,000.00 MT
                            </h5>
                            <button style={{ borderRadius: 5, fontSize: 12, fontWeight: 600, letterSpacing: 0.2 }} type="button" className="d-none btn btn-primary">
                                <span className='px-1'> Send Proposal</span>
                            </button>

                            <Button size="small" style={{ borderRadius: 5, backgroundColor: COLORS.primary, marginRight: 10, textTransform: 'unset' }} variant="contained">
                                <span style={{ borderRadius: 5, fontSize: 12, fontWeight: 600, letterSpacing: 0.2 }} className='px-1'> Send Proposal</span>
                            </Button>

                            <IconButton
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                size="small" variant="outlined">
                                <MoreHorizIcon />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem style={{ fontSize: 14, fontWeight: 600 }} onClick={handleClose}>
                                    <ListItemIcon style={{ marginRight: -10 }}>
                                        <BookmarkBorderIcon fontSize="small" />
                                    </ListItemIcon>
                                    Save
                                </MenuItem>
                                <MenuItem style={{ fontSize: 14, fontWeight: 600 }} onClick={handleClose}>
                                    <ListItemIcon style={{ marginRight: -10 }}>
                                        <FlagOutlinedIcon fontSize="small" />
                                    </ListItemIcon> Report</MenuItem>
                            </Menu>

                            <Button size="small" style={{ borderRadius: 5, display: 'none', textTransform: 'unset' }} variant="outlined">
                                <BookmarkBorderIcon />

                            </Button>

                            <button style={{ borderRadius: 5, fontSize: 12, fontWeight: 600, letterSpacing: 0.2 }} type="button" className="d-none btn btn-outline-primary">
                                <BookmarkBorderIcon fontSize="small" />
                            </button>
                        </div>
                        <div className="w-100" style={{ borderBottomWidth: 0.2, borderBottomStyle: 'solid', borderBottomColor: 'rgba(20,168,0,0.12)' }}></div>
                        <div className='p-4'>
                            <h3 style={{ fontSize: 14, fontWeight: 600 }}>About the project</h3>
                            <p style={{ fontSize: 13 }}>{jobList[jobId].description}</p>
                        </div>
                        <div className="w-100" style={{ borderBottomWidth: 0.2, borderBottomStyle: 'solid', borderBottomColor: 'rgba(20,168,0,0.12)' }}></div>
                        <div className='p-4'>
                            <h3 style={{ fontSize: 14, fontWeight: 600 }}>Required Skills</h3>
                            {Object.values(jobList[jobId].skills).map((item, index) => {
                                return (
                                    <div className="mr-1" key={index} style={{ display: 'inline', marginRight: 5 }}>
                                        <span className="btn skillsCard" style={{ borderRadius: 5, fontWeight: 580, letterSpacing: 0.4, fontSize: 11, lineHeight: 0.7 }}>
                                            {item}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>


                <div className='col-12 col-lg-4 pt-3 pt-lg-0'>
                    <div className="card" style={{ minHeight: '100vh', border: 'none', marginTop: 1 }}>
                        <div className="p-4">
                            <h3 style={{ fontSize: 15, fontWeight: 550, letterSpacing: 0.2 }}>Client Information</h3>
                            <AboutClient />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}