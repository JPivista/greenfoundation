import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const OurReach = () => {
    return (
        <>
            <Container fluid className='our-reach-banner d-flex flex-wrap flex-column justify-content-between'>
                <Container className='pt-4'>
                    <Row>
                        <h2 className='text-center text-white'>Our Reach</h2>
                        <p className='text-center text-white'>The five project sites of GREEN along with the number of farmers it impacts are as follows:</p>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className='ka-our-reach m-2 mb-0'>
                            <Row className='ka-hover'>
                                <Image src='/home/our-reach/karnataka.svg' alt='karnataka' height={100} />

                                <Col className='green-bg'>
                                    <h2 className='text-white w-100'>Karnataka</h2>
                                    <p className='text-white'>Ramanagara District, Kanakapura Taluk – Community Seed Bank, Regenarative Agriculture and Bio-input Resource Centre</p>
                                    <p className='text-white'>Kalaburagi District, Sedam Block – Community Seed Bank and Bio- input Resource Centre</p>
                                    <p className='text-white'>Chikkabellapur District, Bagepalli Block – Agrobiodiversity Conservation</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='tn-our-reach m-2 mb-0'>
                            <Row className='tn-hover'>
                                <Image src='/home/our-reach/tamilnadu.svg' alt='tamilnadu' height={100} />
                                <h2 className='text-white w-100'>Tamil Nadu</h2>
                                <p className='text-white'>Pudukkottai District, Tiruvarangulam and Karambakudi block – Community Seed Bank and Bio-Input Resource Centre</p>
                            </Row>
                        </Col>

                        <Col className='mp-our-reach m-2 mb-0'>
                            <Row className='mp-hover'>
                                <Image src='/home/our-reach/madhyapradesh.svg' alt='madyapradesh' height={100} />

                                <h2 className='text-white'>Madhya Pradesh</h2>
                                <p className='text-white'>Bankhedi District, Hoshangabad – Agrobiodiversity Conservation</p>
                            </Row>
                        </Col>

                        <Col className='ch-our-reach m-2 mb-0'>
                            <Row className='ch-hover'>
                                <Image src='/home/our-reach/chhattisgarh.svg' alt='chhattisgarh' height={100} />
                                <h2 className='text-white'>Chhattisgarh</h2>
                                <p className='text-white'>Kanker District, Kanker – Community Seed Bank and Bio Input Resource Center</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default OurReach