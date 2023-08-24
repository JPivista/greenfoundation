'use client'

import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <Container fluid className='bg-dark text-white py-5'>
                <Container>
                    <Row>
                        <Col>
                            <h5>Sitemap</h5>
                            <h6>About Us</h6>
                            <h6> Work</h6>
                            <h6> Impact</h6>
                            <h6> Compliance</h6>
                        </Col>
                        <Col>
                            <h5>Get in Touch</h5>
                            <h6>Email:</h6>
                            <Link href="mailto:contact@greenfoundation.com">contact@greenfoundation.com</Link>
                            <h5 className='mt-3'> Registered Office </h5>
                            <h6>#36, Vinayaka Layout, Bhoopasandra Main Road, Bhoopasandra, Bangalore – 560094. India</h6>
                        </Col>
                        <Col>
                            <h5>Connect</h5>
                        </Col>
                    </Row>
                    <hr />

                </Container>
            </Container>
        </>
    )
}

export default Footer