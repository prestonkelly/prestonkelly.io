import style from '../styles/Projects.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const fetch = require("node-fetch");
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import CardDeck from 'react-bootstrap/CardDeck';
import Head from "next/head";
import { motion } from "framer-motion";


function Contact({ projectData }) {

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()

    const [index, setIndex] = useState(0);
    const [index2, setIndex2] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const handleSelect2 = (selectedIndex2, e) => {
        setIndex2(selectedIndex2);
    };

    return (
        <motion.div exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
            <Head>
                <title>Projects</title>
                <meta charSet="utf-8"/>
                <meta name="author" content="Preston Kelly"/>
                <meta name="description" content="Various projects that apply agile methodologies to deploy projects
                 on time with structure"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="keywords" content="HTML, CSS, JavaScript"/>

                <link rel="apple-touch-icon" sizes="180x180" href="/siteFavicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/siteFavicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/siteFavicon/favicon-16x16.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet"/>
                <link rel="manifest" href="/siteFavicon/site.webmanifest" />
                {/*<meta name="theme-color" content="#ffffff" />*/}
            </Head>
            <Header />
            <div id={style.mainContent}>
                <Container id={style.projectsContainer}>
                    <CardDeck>
                        <Card id={style.iphoneReduceSpace}>
                            <Carousel activeIndex={index2} onSelect={handleSelect2} indicators={false}
                                      prevIcon={<span aria-hidden="true" className="d-none d-lg-block carousel-control-prev-icon" />}
                                      nextIcon={<span aria-hidden="true" className="d-none d-lg-block carousel-control-next-icon" />}>
                                <Carousel.Item>
                                    <img
                                        className="img-fluid"
                                        src='/projectPhotos/electronapp.png'
                                        alt="Home Page - Centerpiece"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="img-fluid"
                                        src='/projectPhotos/electronapp_twitter.png'
                                        alt="Twitter Page - Centerpiece"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="img-fluid"
                                        src='/projectPhotos/electronapp_twitch.png'
                                        alt="Twitch Page - Centerpiece"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <Card.Footer id={style.footerMobile}>
                                <Card.Text>
                                    <b>Centerpiece</b> - An electron built app that simplifies sites twitter and twitch to
                                    focus on what's most important
                                </Card.Text>
                            </Card.Footer>
                        </Card>
                        <Card style={{ height: '90%', marginTop: '40px' }}>
                            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}
                                      prevIcon={<span aria-hidden="true" className="d-none d-lg-block carousel-control-prev-icon" />}
                                      nextIcon={<span aria-hidden="true" className="d-none d-lg-block carousel-control-next-icon" />}>
                                <Carousel.Item>
                                    <img
                                        className="img-fluid"
                                        src='/projectPhotos/dark_mode_app.png'
                                        alt="Dark Mode - Mastermind"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="img-fluid"
                                        src='/projectPhotos/light_mode_app.png'
                                        alt="Light Mode - Mastermind"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="img-fluid"
                                        src='/projectPhotos/login_screen.png'
                                        alt="Login Page - Mastermind"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <Card.Footer id={style.footerMobile}>
                                <Card.Text>
                                    <b>Mastermind</b> - A tkinter app built for buying and selling cryptocurrency on
                                    Binance's trading platform
                                </Card.Text>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </ Container>
                <motion.div id={style.scrollDownButton} style={{ position: "absolute", bottom: "25px", cursor: "pointer" }}
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a onClick={executeScroll}>
                        <img className="d-block mx-auto img-fluid" src="/downArrow.png" alt="down arrow icon" />
                    </a>
                </motion.div>
            </div>
            <div id={style.projectTable} ref={myRef}>
                <Container>
                    <h1>Github Repositories</h1>
                    <Table responsive id={style.tableTextColor}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Language</th>
                            <th>Github</th>
                        </tr>
                        </thead>
                        <tbody>
                        {projectData.map((props) => (
                            <tr key={props.id}>
                                <td key={props.id}>{props.name}</td>
                                <td key={props.id}>{props.description}</td>
                                <td key={props.id}>{props.language}</td>
                                <td key={props.id}><a href={props.html_url} style={{ color: 'white' }} target="_blank">Code</a></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
            <Footer />
        </motion.div>
    )
}


export async function getStaticProps() {

    const projectData = await fetch('https://api.github.com/users/prestonkelly/repos').then(r => r.json())

    return {
        props: {
            projectData,
        }
    }
}

export default Contact