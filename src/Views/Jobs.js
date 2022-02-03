import React from 'react'
import { Row, Col} from 'react-bootstrap';
import List from '../Components/Job/List'
export default function Jobs(params) {
    return (
        <div className="container mt-4" >
            <Row className="">
                <Col className="col-12 col-lg-4">
                <Col className="col-12 card" style={{border:'none',borderRadius:0,boxShadow: "0px 0px 2px #ededed"}}>1 of 1</Col>    
                </Col>
                <Col className="card col-12 mx-sm-2 mx-lg-0 col-lg-7" style={{border:'none',borderRadius:0,boxShadow: "0px 0px 2px #ededed"}}>
                    <List/>
                </Col>
            </Row>
        </div>
    )
}