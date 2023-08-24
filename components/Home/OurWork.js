import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const OurWork = () => {
    return (
        <>
            <Container className='p-2'>
                <h1 className='text-dark text-center'>Our Work</h1>
                <Row className='d-flex flex-md-row flex-column w-100'>
                    <Col className='agro-bg-home m-2 p-5 d-flex flex-column justify-content-center' >
                        <h1 className='text-white'>Agrobiodiversity Conservation</h1>
                        <p className='text-white mb-0'>Conservation of indigenous seed varieties has been at the core of GREEN Foundation’s work since 1994…</p>
                    </Col>
                    <Col className='cer-bg-home m-2 p-5 d-flex flex-column justify-content-center'>
                        <h1 className='text-white'>Certification</h1>
                        <p className='text-white mb-0'>A collaborative approach which involves farmers and other stakeholders in verifying the authenticity of organic produce…</p>
                    </Col>
                </Row>
                <Row className='d-flex flex-md-row flex-column w-100'>
                    <Col className='sustain-bg-home m-2 p-5 d-flex flex-column justify-content-center' >
                        <h1 className='text-white'>Sustainable Agriculture</h1>
                        <p className='text-white mb-0'>Sustainable agriculture is the production of plant and animal products in a way that uses farming techniques to protect the environment…</p>
                    </Col>
                    <Col className='research-bg-home m-2 p-5 d-flex flex-column justify-content-center'>
                        <h1 className='text-white'>Research and Communication</h1>
                        <p className='text-white mb-0'>Research enables us to achieve our goals in Sustainable Agriculture and Agro-biodiversity conservation.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='p-4' style={{ background: '#f8d790' }}>

            </Container>
        </>
    )
}

export default OurWork