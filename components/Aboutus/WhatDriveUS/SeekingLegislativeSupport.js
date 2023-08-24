
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../aboutus.css'

const SeekingLegislativeSupport = () => {
    return (
        <Container fluid className='py-5' style={{ background: '#F5E7C9' }}>
            <Container className=''>
                <h3 className=' text-green text-center'><b>Seeking Legislative Support</b></h3>

                <Row className='yellow-lime-green-bg custom-drive-row'>
                    <Col className='custom-img-content-css' md={4}>
                        <Image src='/aboutus/whatdriveus/seeking_legestive_img.png' alt='ecological' width="100%"></Image>
                    </Col>
                    <Col className='p-md-5 p-2 text-white'>
                        <p>One of GREEN Foundation’s driving forces is to empower farmers to achieve economic security. We help farming households do this through various initiatives such as kitchen gardens, alternate income generating programs, community seed banks etc. We provide farmers training in sustainable practices which reduce their dependency on expensive inputs.</p>

                        <p>We help organic farmers gain certification through the PGS system so that their produce is more marketable. To achieve this aim, we have also initiated the formation of Janadhanya, a society which aims to strengthen farmers’ economic security through the collective efforts of the community.</p>
                    </Col>
                </Row>
            </Container>


            <Container className='p-4 pt-5  seeking-custom-container text-center'>
                <p>Through projects that address their needs. They are in many ways the backbone of the sector, and sustainability is not possible without their contributions, particularly in the case of biodiversity. Such progress owes as much to the perseverance of individual farmers themselves as to the collective efforts of a community of people within the non-profit sector. Strengthening the movement for sustainability, GREEN initiated the formation of Janadhayna, a farmers’ society which empowers farming communities to work collectively to avail the benefits of sustainable agriculture. Janadhanya has proved to be a means through which the movement has rapidly progressed, allowing community members themselves to take the core philosophy of organic practices to those who need it most: their fellow farmers.</p>
            </Container>

        </Container>
    )
}

export default SeekingLegislativeSupport