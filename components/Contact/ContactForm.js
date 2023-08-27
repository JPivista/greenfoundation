import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import '../custom.css'

const ContactForm = () => {
    return (
        <Container className='p-0 py-5'>

            <Row className='d-flex flex-md-row flex-column'>
                <Col className='' md={7}>
                    <p className='text-green'>
                        GREEN Foundation welcomes volunteers who are committed to contribute substantially in terms of concepts and field work
                    </p>

                    <h4 id='' className='pt-3'>Hi! I am</h4>
                    <input type="name" class="form-control" id="name" aria-describedby="name" placeholder="eg. Sandy" className='border-0 w-100 border-bottom p-3 border-3' />

                    <h4 className='pt-3'>Reach Me At</h4>

                    <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="eg. hello@gmail.com" className='border-0 w-100 border-bottom p-3 border-3' />

                    <h4 className='pt-3'>City</h4>

                    <input type="city" class="form-control" id="city" aria-describedby="city" placeholder="eg. Bengaluru" className='border-0 w-100 border-bottom border-3 p-3' />

                    <h4 className='pt-3'>My Message</h4>

                    <textarea class="form-control" id="" rows="5" placeholder='Message' className='border-0 w-100 border-bottom p-3 border-3'>
                    </textarea>


                    <Button type="submit" class="bg-green text-white border-0 p-2 mt-5 px-5 rounded-2 " style={{ background: '#2e6339' }}>Send</Button>

                </Col>

                <Col className='text-center d-flex flex-column justify-content-center align-items-center p-5 gap-3 text-green'>
                    <h5 className='text-green'>Our Location</h5>

                    <Col style={{ background: '#ecf1e4' }} className='p-4 d-flex flex-column justify-content-center align-items-center align-content-center rounded-3'>
                        <h5 className='text-green fw-bolder'>REGISTERED OFFICE</h5>
                        <Image src='/contact_form_img.svg' alt='' className=' mt-4' width={200} />

                        <h2 className='mt-3'>Bengaluru</h2>
                        <p>
                            #36, Vinayaka Layout, Bhoopasandra Main Road, Bhoopasandra, Bengaluru – 560094. India
                        </p>
                    </Col>

                    <h4>Our Email</h4>

                    <h5 className='fw-bolder d-block w-100 p-2 rounded-3' style={{ background: '#ecf1e4' }}>contact@greenfoundation.in</h5>
                </Col>
            </Row>
        </Container >
    )
}

export default ContactForm