import Link from 'next/link';
import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

import '../custom.css'

const Partners = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            showDots: false, // Remove navigation dots
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            showDots: false, // Remove navigation dots
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            showDots: false, // Remove navigation dots
        },
    };
    return (
        <>
            <Container fluid className='py-4' style={{ background: '#ede2cc' }}>
                <h2 className='text-dark text-center '>Group Partners</h2>

                <Container >
                    <Row >
                        <Col className='text-center'>
                            <Carousel responsive={responsive}
                                infinite
                                autoPlay
                                // autoPlaySpeed={2000}
                                className='py-5 px-3 d-flex align-items-center'>
                                {/* Place your carousel items here */}
                                <div className='p-3'>
                                    <Image src='/home/our-reach/fuzhio.svg' alt='fuzhio' width="100%" />
                                </div>
                                <div className='p-3'>
                                    <Image src='/home/our-reach/CG.svg' alt='CG' width="100%" />
                                </div>
                                <div className='p-3'>
                                    <Image src='/home/our-reach/vrutti.svg' alt='vrutti' width="100%" />
                                </div>
                                <div className='p-3'>
                                    <Image src='/home/our-reach/swasti.svg' alt='swasti' width="100%" />
                                </div>
                                <div className='p-3'>
                                    <Image src='/home/our-reach/cms.svg' alt='swasti' width="100%" />
                                </div>
                                {/* Add more items as needed */}
                            </Carousel>

                            <Link href="/partners/" className='text-decoration-none text-black' target='_blank'><h6 className='bg-green d-inline p-2 rounded-2 text-white'>See Our List of Partners</h6></Link>
                        </Col>
                    </Row>



                </Container>
            </Container >
        </>
    )
}

export default Partners