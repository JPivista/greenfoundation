import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const HeroBanner = () => {
    return (
        <>
            <Container fluid className='home-bg-container p-0'>
                <Container>
                    <Row className='d-flex flex-column justiy-content-center p-3' >
                        <Col md={6} className='p-4 text-white border border-1 rounded home-text-bg' >
                            <h1>GREEN Foundation</h1>
                            <p>At the GREEN Foundation, we are driven by a powerful vision: a world where vulnerable communities are climate resilient, and our sectors and systems operate with carbon neutrality. Our core mission centers on biodiversity conservation and regenerative agriculture, guided by agro-ecological principles and a deep respect for planetary boundaries. By combining these approaches, we are working towards a sustainable, equitable and resilient future. Together, we can create a world where people and the planet thrive together, safeguarding our natural resources for generations to come.</p>
                            <Button className='bg-white text-dark px-4'>Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </Container >
        </>
    )
}

export default HeroBanner