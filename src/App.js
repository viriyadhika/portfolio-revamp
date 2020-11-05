import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App" style={{overflowX: 'auto'}}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavBar />
      <Hello />
      <Projects />
    </div>
  );
}

function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="#home">
        <Image
          fluid
          width="40rem"
          height="40rem"
          alt="Viriyadhika Logo"
          className="d-inline-block align-top"
          src={process.env.PUBLIC_URL + '/VPlogo-final.png'} />
        {' '}Viriyadhika
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Whatever</Nav.Link>
        </Nav>
      </ Navbar.Collapse>
    </Navbar>
  )
}

function Hello() {
  return (
    <Container className="hello" fluid>
      <Row>
        <Col>
          <h1>I am Viriyadhika Putra</h1>
        </Col>
      </Row>
      <Row className="py-3 align-items-center justify-content-center">
        <Col style={{ maxWidth: '50rem' }}>
          <Row className="justify-content-center">
            <Col className="justify-content-center" style={{ maxWidth: '10rem' }}
              sm={3} md={2}>
              <Image
                fluid
                roundedCircle
                src={process.env.PUBLIC_URL + '/self-pic.png'} />
            </Col>
            <Col
              sm={9} md={10}
              className="align-items-center justify-content-center" >
              <p style={{ textAlign: 'start', wordWrap: 'break-word' }}>
                Welcome to my website. This website is a showcase of some of my works that I am really proud of.
              For reference, you can take a look at my <a class="hyperlink" href="https://drive.google.com/file/d/1sS5WYmEX2KUDKK02IIhWWfmQa0DfIcE7/view?usp=sharing">Resume</a>, my
              <a class="hyperlink" href="https://sg.linkedin.com/in/viriyadhika-putra">LinkedIn</a> profile, and my
              <a class="hyperlink" href="https://github.com/viriyadhika">GitHub</a> account.
              Also, feel free to contact me at viriyadhika.putra@u.nus.edu!
          </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

function Projects() {
  return (
    <Container className="projects" fluid >
      <Row style={{ backgroundColor: "blue", color: "white" }}>
        <Col>
          <Row className="my-4">
            <Col>
              <h1>Projects</h1>
            </Col>
          </Row>
          <Row className="justify-content-center mx-3">
            <Col style={{ maxWidth: '50rem' }}>
              <Row className="justify-content-center">
                <Col md={6} style={{ maxWidth: '20rem' }}>
                  <ProjectCard />
                </Col>
                <Col md={6} style={{ maxWidth: '20rem' }}>
                  <ProjectCard />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

function ProjectCard(props) {
  return (
    <div>
      <Card className="project-card">
        <Image
          fluid
          className="project-img"
          src={process.env.PUBLIC_URL + '/habit_tracker_logo.png'}
        />
        <Row className="project-desc justify-content-center align-items-center">
          <Col>
            <Row className="align-content-center py-3">
              <Col>
                <p>asdf</p>
              </Col>
            </Row>
            <Row className="align-content-center py-3">
              <Col>
                <Button>Learn More</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default App;
