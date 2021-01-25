import style from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React, { useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from "next/head";
import { motion } from "framer-motion";


export default function Home() {

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()

    return (
        <motion.div exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
          <Head>
              <title>Preston Kelly</title>
              <meta charSet="utf-8"/>
              <meta name="author" content="Preston Kelly"/>
              <meta name="description" content="Self-taught programmer who's focusing on identifying and
                 creating value by creating software that will improve the lives of others"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="keywords" content="Next.js, React, Node.js"/>

              <link rel="apple-touch-icon" sizes="180x180" href="/siteFavicon/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/siteFavicon/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/siteFavicon/favicon-16x16.png" />
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet"/>
              <link rel="manifest" href="/siteFavicon/site.webmanifest" />
          </Head>
          <Header />
          <div id={style.mainContent}>
              <Container>
                  <h1 style={{ letterSpacing: "9px", fontSize: "50px" }}>Preston Kelly</h1>
                  <h3>Self-taught programmer who's focusing on identifying and creating value by creating software that
                      will improve the lives of others</h3>
              </ Container>
              <motion.div id={style.scrollDownButton} style={{ position: "absolute", bottom: "25px", cursor: "pointer" }}
                          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a onClick={executeScroll}>
                      <img className="d-block mx-auto img-fluid" src="/downArrow.png" alt="down arrow icon" />
                  </a>
              </motion.div>
          </div>
          <div ref={myRef} id={style.skillsetDiv}>
              <h1 id={style.skillsetHeader}>Skills</h1>
              <Container id={style.centerIcons}>
                  <Row>
                      <Col id={style.centerIcons}><img  src="/skillsIcons/javascriptIcon.png" alt="javascript icon" /></Col>
                      <Col id={style.centerIcons}><img  src="/skillsIcons/pythonIcon.png" alt="python icon" /></Col>
                      <Col id={style.centerIcons}><img  src="/skillsIcons/reactIcon.png" alt="react icon" /></Col>
                      <Col id={style.centerIcons}><img  src="/skillsIcons/nodejsIcon.png" alt="nodejs icon" /></Col>
                      <Col id={style.centerIcons}><img  src="/skillsIcons/htmlIcon.png" alt="html icon" /></Col>
                      <Col id={style.centerIcons}><img src="/skillsIcons/cssIcon.png" alt="css icon" /></Col>
                  </Row>
              </Container>
          </div>
          <Footer />
        </motion.div>
  )
}
