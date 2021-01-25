
import style from '../styles/Footer.module.css';
import Link from 'next/link';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <div>
            <div id={style.footerConnect}>
                <Container>
                    <h3 id={style.footerHeader}>Connect with me</h3>
                    <Row className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/preston-kelly-b26a31187/" target="_blank">
                            <img style={{ filter: "invert(100%)" }} src="socialMedia/linkedin.png" alt="LinkedIn Icon" width="48" height="48" />
                        </a>
                        <a href="https://github.com/prestonkelly" target="_blank">
                            <img style={{ filter: "invert(100%)" }} src="socialMedia/github.png" alt="Github Icon" width="48" height="48" />
                        </a>
                    </Row>
                </Container >
            </div>
            <div id={style.footerNav}>
                <Container>
                    <Row className="d-flex justify-content-around">
                        <Link href="/">
                            <Button variant="link" id={style.footerLinks}>Home</Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="link" id={style.footerLinks}>Projects</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="link" id={style.footerLinks}>Contact</Button>
                        </Link>
                    </Row>
                </Container >
            </div>
        </div>
    )
}

export default Footer;