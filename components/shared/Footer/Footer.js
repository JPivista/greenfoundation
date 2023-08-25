'use client'

import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import '../../custom.css'

const Footer = () => {
    return (
        <>
            <Container fluid className='bg-black text-white py-4'>
                <Container className='p-0 w-100'>
                    <Row>
                        <Col className='d-flex flex-column align-items-start'>
                            <h5 className='border border-top-0 border-end-0 border-start-0 pb-2 d-block mb-3'>Sitemap </h5>
                            <Link href="/journey-so-far" className='text-decoration-none text-white footer-text'>About Us</Link>
                            <Link href="/agrobiodiversity-conservation" className='text-decoration-none text-white footer-text'> Work</Link>
                            <Link href="/our-reach" className='text-decoration-none text-white footer-text'> Impact</Link>
                            <Link href="/reports" className='text-decoration-none text-white footer-text'> Compliance</Link>
                        </Col>
                        <Col className='d-flex flex-column align-items-start'>
                            <h5 className='border border-top-0 border-end-0 border-start-0 pb-2 d-block mb-3'>Get in Touch</h5>
                            <h6 className='m-0'>Email: </h6>
                            <Link href="mailto:contact@greenfoundation.com" className='text-decoration-none text-white footer-text'>contact@greenfoundation.com</Link>
                            <h5 className='mt-3'> Registered Office </h5>
                            <h6 className='footer-text'>#36, Vinayaka Layout, Bhoopasandra Main Road, Bhoopasandra, Bangalore – 560094. India</h6>
                        </Col>
                        <Col className='d-flex flex-column align-items-start'>
                            <h5 className='border border-top-0 border-end-0 border-start-0 pb-2 d-block mb-3'>Connect</h5>

                            <Col className='d-flex flex-row gap-2'>
                                <Link href="https://www.youtube.com/@greenfoundationcatalyst5429" target='_blank' className='text-decoration-none text-white'>
                                    <i class="bi bi-youtube" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/greenfoundation-india/" target='_blank' className='text-decoration-none text-white'>
                                    <i class="bi bi-linkedin"></i>
                                </Link>
                            </Col>
                        </Col>
                    </Row>

                    <hr />

                    <h6 className='pt-3'>copyright 2023 GREEN Foundation</h6>

                </Container>
            </Container>
        </>
    )
}

export default Footer