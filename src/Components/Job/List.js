import React from 'react'
import { COLORS } from '../Styles/Colors'
import Skills from './Skills'
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Box, { BoxProps } from '@mui/material/Box';

export default function List(params) {

    const jobList = [
        {
            id: 1,
            title: 'Check online product availability and collect contact information',
            price: '50,000',
            description: ' I need a simple script and form in corel draw that allows me to measure the curve length of the select objects and shows me the value depending what option i choose from two diferent options. one option will give me curve length multiplied by 2 and the other one by 2.5.'
        },
        {
            id: 2,
            title: 'Need wordpress developer for e-com site',
            price: '3,000',
            skills: {
                0: 'php',
                1: 'ajax',
                2: 'js'
            },
            description: 'i m looking simple e-com website using wordpress and i need products synchronizing with facebook more detail on chat '
        },
        {
            id: 3,
            title: 'Crm Software Development',
            price: '25,000',
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
            price: '10,700',
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
            price: '8,450',
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
            price: '1,400',
            skills: {
                0: 'php',
                1: 'ajax',
                2: 'js'
            },
            description: 'i m looking simple e-com website using wordpress and i need products synchronizing with facebook more detail on chat '
        },
    ]

    function MouseOverTitle(event) {
        event.target.style.textDecoration = 'underline';
    }
    function MouseOutTitle(event) {
        event.target.style.textDecoration = 'none';
    }

    return (
        <div>
            <div className="row p-3">
                {jobList.map((item, index) => {
                    return (

                        <Link to={`${index}`} style={{ textDecoration: 'none', color: '#000', textDecorationLine: 'none' }}>
                            <div key={index} className="col-12">

                                <div className="row">
                                    <div className="col-12 col-md-12">
                                        <Link
                                            onMouseOut={MouseOutTitle}
                                            onMouseOver={MouseOverTitle}
                                            to={`details`} style={{ textDecoration: 'none', color: '#000', textDecorationLine: 'none' }}>

                                            <h5 style={{ fontSize: 16, fontWeight: 700, color: COLORS.primary }}>
                                                {item.title}
                                            </h5>
                                        </Link>
                                    </div>
                                    <div className="col-12">
                                        <h5 style={{ fontSize: 15, fontWeight: 700, color: COLORS.secondary }}>
                                          20,000 - {item.price} MT
                                        </h5>
                                    </div>
                                </div>

                                <div style={{ display: 'inline' }}>
                                    <p className="mr-2" style={{ fontSize: 14, display: 'inline' }}><span style={{ color: '#2a2a2a', fontWeight: 500 }}>Publicado: </span><span style={{ color: COLORS.secondary, fontWeight: 500 }}>3 dias</span>, </p>
                                    <p style={{ fontSize: 14, display: 'inline' }}><span style={{ color: '#2a2a2a', fontWeight: 500 }}> Propostas: </span> <span style={{ color: COLORS.secondary, fontWeight: 500 }}>3</span></p>
                                </div>
                                <p style={{ fontSize: 14, paddingTop: 10 }}>
                                    {item.description}
                                </p>
                                <div>
                                    <Skills skillList={item.skills} />
                                </div>

                                <hr style={{ backgroundColor: '#8f8f8f' }} className='my-3' />
                            </div>
                        </Link>

                    )
                })}
                <div className='mx-auto text-center'>
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
                        <Stack spacing={2}>
                            <Pagination count={10} showFirstButton showLastButton />
                        </Stack>
                    </Box>
                </div>
            </div>
        </div>
    )
}

