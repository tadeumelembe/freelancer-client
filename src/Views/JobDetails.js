import React from 'react'
import { useParams } from "react-router-dom";

export default function JobDetails(params) {
    const {jobId} = useParams();
    const jobList = [
        {
            id: 1,
            title: 'Check online product availability and collect contact information',
            price: '50000',
            description: ' I need a simple script and form in corel draw that allows me to measure the curve length of the select objects and shows me the value depending what option i choose from two diferent options. one option will give me curve length multiplied by 2 and the other one by 2.5.'
        },
        {
            id: 2,
            title: 'Need wordpress developer for e-com site',
            price: '3000',
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
        <div className="container">
            <div className="card mt-1" style={{minHeight:'100vh',border:'none'}}>
                <div ></div>
            </div>
           <h5>{jobList[jobId].title}</h5>
        </div>
    )
}