import React from 'react'
import { Row, Col} from 'react-bootstrap';
import List from '../Components/Job/List'
export default function Jobs(params) {
    return (
        <div className="container-md mt-4" >
            <Row className="">
                <Col className="col-12 col-lg-4">
                <Col className="col-12 card" >1 of 1</Col>    
                </Col>
                <Col className="col-12 col-lg-7" >
                    <List/>
                </Col>
            </Row>
        </div>
    )
}