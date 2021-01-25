import style from '../styles/Contact.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Head from "next/head";
import { useState } from 'react';
import { motion } from "framer-motion";


export default function Contact() {

    // Email setup based off of -->
    // https://docs-git-fork-mnsrv-patch-1.zeit.now.sh/guides/deploying-nextjs-nodejs-and-sendgrid-with-zeit-now/

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })

    const handleResponse = (status, msg) => {
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                name: '',
                email: '',
                subject: '',
                message: ''
            })

        } else {
            setStatus({
                info: { error: true, msg: msg }
            })
        }
    }

    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }

    const handleOnSubmit = async e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        const res = await fetch('/api/send', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(inputs)
        })

        const text = await res.text()
        handleResponse(res.status, text)
    }

    return (
        <motion.div exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
            <Head>
                <title>Contact</title>
                <meta charSet="utf-8"/>
                <meta name="author" content="Preston Kelly"/>
                <meta name="description" content="Send me an email"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="keywords" content="Contact, Email, Gmail"/>

                <link rel="apple-touch-icon" sizes="180x180" href="/siteFavicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/siteFavicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/siteFavicon/favicon-16x16.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet"/>
                <link rel="manifest" href="/siteFavicon/site.webmanifest" />
            </Head>
            <Header />
            <div id={style.mainContent}>
                <Container fluid id={style.emailContainer}>
                    <Form onSubmit={handleOnSubmit}>
                        <div id={style.centerItem}>
                            <h3>Send me an email</h3>
                        </div>
                        <Form.Group>
                            <Form.Label htmlFor="name">Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                id="name"
                                value={inputs.name}
                                onChange={handleOnChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email Address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                id="email"
                                value={inputs.email}
                                onChange={handleOnChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="subject">Subject</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                id="subject"
                                value={inputs.subject}
                                onChange={handleOnChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control as="textarea"
                                required
                                type="text"
                                id="message"
                                value={inputs.message}
                                onChange={handleOnChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <div id={style.centerItem}>
                            <Button style={{ padding: "6px 20px 6px 20px" }} variant="dark" type="submit" disabled={status.submitting}>
                                {!status.submitting ? !status.submitted ? 'Submit':'Submitted!': 'Submitting...'}
                            </Button>
                        </div>
                    </Form>
                </ Container>
            </div>
            <Container>
                <h4 style={{ textAlign: 'center', marginTop: '65px', marginBottom: '50px' }}>Or contact me here: pkpkelly99@gmail.com</h4>
            </Container>

            <Footer />
        </motion.div>
    )
}
