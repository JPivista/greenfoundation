import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import '../Style'

import '../custom.css'

const Form = () => {
    return (
        <>
            <Container className='py-5 text-center w-100'>
                <h5>GREEN Foundation welcomes volunteers, who are committed to contribute substantially in terms of concepts and field work.</h5>
                <form>
                    <Row className='gap-3 py-4 d-flex flex-md-row flex-column'>
                        <Col>
                            <input type="name" class="form-control" id="name" aria-describedby="name" placeholder="Name" />
                        </Col>
                        <Col >
                            <input type="email" class="form-control" id="email" placeholder="Email" />
                        </Col>
                        <Col>
                            <input type="city" class="form-control" id="city" placeholder="City" />
                        </Col>
                        <Col md={12}>
                            <textarea class="form-control" id="" rows="3" placeholder='Message'></textarea>
                        </Col>
                    </Row>
                    <button type="submit" class="bg-green text-white border-0 p-2 rounded-2">Submit</button>
                </form>
            </Container>
        </>
    )
}

export default Form