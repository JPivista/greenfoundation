'use client'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Button, Image } from 'react-bootstrap';

const Header = () => {
    return (
        <>


            <Navbar expand="lg" className="bg-body-tertiary p-0">
                <Container fluid style={{ background: '#FFF7D8' }}>
                    <Navbar.Brand href="#home" className='w-50'>
                        <Image src="/header_footer/gf_logo.png" alt='cglogo' height={90} width={90} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='d-md-flex flex-md-column flex-md-wrap align-content-md-end'>
                        <Nav className="me-auto w-75 d-md-flex flex-md-row flex-md-wrap justify-content-md-between">
                            <NavDropdown title="About Us" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/journey-so-far">Journey So Far</NavDropdown.Item>
                                <NavDropdown.Item href="/why-we-do-this">What Drives Us</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Our Reach</NavDropdown.Item>
                                <NavDropdown.Item href="/partners">Partners</NavDropdown.Item>
                                <NavDropdown.Item href="/core-team">Our Team</NavDropdown.Item>
                                <NavDropdown.Item href="/awards-and-recognitions">Awards and Recognitions</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Our Work" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/agrobiodiversity-conservation">Agrobiodiversity Conservation</NavDropdown.Item>
                                <NavDropdown.Item href="/sustainable-agriculture">Sustainable Agriculture</NavDropdown.Item>
                                <NavDropdown.Item href="/farm-ponds">Soil and Water Conservation</NavDropdown.Item>
                                <NavDropdown.Item href="/seed-banks">Seed Projects</NavDropdown.Item>
                                <NavDropdown.Item href="/certification">Certification</NavDropdown.Item>
                                <NavDropdown.Item href="/research-and-communication">Research and Communication</NavDropdown.Item>
                                <NavDropdown.Item href="/policy-engagement">Policy Engagement</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Publications" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/news-and-events">News & Events</NavDropdown.Item>
                                <NavDropdown.Item href="/english-publication">Publications</NavDropdown.Item>
                                <NavDropdown.Item href="/our-stories">Stories from the Field</NavDropdown.Item>
                                <NavDropdown.Item href="/greens-work-related-videos">Videos</NavDropdown.Item>
                            </NavDropdown>
                            <Button href='#' style={{ background: '#2E6339' }}>Contact Us</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header