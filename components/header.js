import Head from 'next/head'
import Link from 'next/link'
import style from '../styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';



function Header() {

    const [navBackground, setNavBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80 && window.innerWidth > 975) {
                setNavBackground(true)
            } else {
                setNavBackground(false)
            }
        };
        document.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Navbar id={style.mainNav} className="test" fixed="top" expand="lg" style={{ padding: navBackground ? '0px 20px 0px 20px' : '10px 20px 10px 20px'}}>
                <Container id={style.headerHeight}>
                    <Link href="/">
                        <Navbar.Brand href="/">Preston Kelly</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link href="/projects">
                                <Nav.Link id={style.mainNavItems} href="projects">Projects</Nav.Link>
                            </Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Link href="/contact">
                                <Nav.Link id={style.mainNavItems} href="contact">Contact</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header;