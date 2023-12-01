import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './timeline.css'

const JourneySoFarTimeline = () => {

    const [isMouseScroll, setIsMouseScroll] = useState(false);

    const handlOnScrollZoom = () => {
        zoom: '10px'
    }
    return (
        <>
            <Container fluid>

                <Container style={{ zoom: '10px' }}>

                    <Row>
                        <Col>
                            <Col onScroll={handlOnScrollZoom}>
                                this is zooomed
                            </Col>
                        </Col>
                    </Row>
                </Container>

            </Container >
        </>
    )
}

export default JourneySoFarTimeline