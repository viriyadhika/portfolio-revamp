import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App" style={{ overflowX: 'auto' }}>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/projects/habit-tracker"><HabitTracker /></Route>
          <Route path="/projects/logistics" component={Logistics} />
          <Route path="/projects/grouptask" component={Grouptask} />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <Hello />
      <Projects />
      <SkillSets />
    </div>
  )
}

function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="/">
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
          <Nav.Link href="/projects/habit-tracker">Habit Tracker</Nav.Link>
          <Nav.Link href="/projects/logistics">Logistics</Nav.Link>
          <Nav.Link href="/projects/grouptask">Group Management</Nav.Link>
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
              For reference, you can take a look at my <a class="hyperlink" href="https://drive.google.com/file/d/1jr7o0zzgQmKshv8M5F5oirxeQ0GrPKWc/view?usp=sharing">Resume</a>, my
              <a class="hyperlink" href="https://sg.linkedin.com/in/viriyadhika-putra"> LinkedIn</a> profile, and my
              <a class="hyperlink" href="https://github.com/viriyadhika"> GitHub</a> account.
              Also, feel free to contact me at viriya.dhika0@gmail.com!
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
      <Row className="py-4" style={{ backgroundColor: "#002348", color: "white" }}>
        <Col>
          <Row>
            <Col>
              <h1>Projects</h1>
            </Col>
          </Row>
          <Row className="justify-content-center mx-3">
            <Col style={{ maxWidth: '60rem' }}>
              <div className="project-grid">
                <div style={{ maxWidth: '25rem' }}>
                  <ProjectCard
                    title="Habit Tracker"
                    pic={process.env.PUBLIC_URL + '/habit_tracker-logo.png'}
                    subtitle="Java, Android Studio"
                    link="/projects/habit-tracker"
                  />
                </div>
                <div style={{ maxWidth: '25rem' }}>
                  <ProjectCard
                    title="Logistics Website"
                    pic={process.env.PUBLIC_URL + '/logistics-logo.png'}
                    subtitle="Django, Python, Bootstrap"
                    link="/projects/logistics"
                  />
                </div>
                <div style={{ maxWidth: '25rem' }}>
                  <ProjectCard
                    title="Group Management"
                    pic={process.env.PUBLIC_URL + '/grouptask-logo.png'}
                    subtitle="Django REST, Android, React JS"
                    link="/projects/grouptask"
                  />
                </div>
              </div>
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
          className="project-card-img"
          src={props.pic}
        />
        <Row className="project-card-desc justify-content-center align-items-center">
          <Col>
            <Row className="card-title align-content-center">
              <Col>
                <h2 className="card-title-text">{props.title}</h2>
              </Col>
            </Row>
            <Row className="card-subtitle align-content-center pb-3">
              <Col>
                <p>{props.subtitle}</p>
              </Col>
            </Row>
            <Row className="align-content-center">
              <Col>
                <Button href={props.link}>
                  Learn More
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

function SkillSets(props) {

  let front_end = [
    ['Android Studio', 'skill-android_studio.png'],
    ['ReactJS', 'skill-react.png'],
    ['Bootstrap', 'skill-bootstrap.png'],
  ]

  let back_end = [
    ['Django', 'skill-django.png'],
    ['Django REST Framework', 'skill-drf.png']
  ]

  let devops = [
    ['Docker', 'skill-docker.png'],
    ['NGINX', 'skill-nginx.png']
  ]

  let languages = [
    ['Python', 'skill-python.jpeg'],
    ['Java', 'skill-java.png'],
    ['Javascript', 'skill-javascript.png'],
    ['HTML', 'skill-html.png'],
  ]


  return (
    <Container style={{ maxWidth: "60rem", marginTop: "3rem", marginBottom: "5rem"}}>
      <Row className="justify-content-center">
        <Col>
          <h1>Skillsets</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col>
          <h2>Programming Languages</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {
          languages.map((lang) => {
            return (
              <Col style={{ minWidth: "5rem" }}>
                <Row className="justify-content-center">
                  <Image fluid src={process.env.PUBLIC_URL + lang[1]} style={{ maxHeight: '5rem' }} />
                </Row>
                <Row className="justify-content-center">
                  {lang[0]}
                </Row>
              </Col>
            )
          })
        }
      </Row>
      <Row className="justify-content-center mt-4">
        <Col>
          <h2>Back-End</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {
          back_end.map((be) => {
            return (
              <Col style={{ minWidth: "5rem" }}>
                <Row className="justify-content-center">
                  <Image fluid src={process.env.PUBLIC_URL + be[1]} style={{ maxHeight: '5rem' }} />
                </Row>
                <Row className="justify-content-center">
                  {be[0]}
                </Row>
              </Col>
            )
          })
        }
      </Row>
      <Row className="justify-content-center mt-4">
        <Col>
          <h2>Front-End</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {
          front_end.map((fe) => {
            return (
              <Col style={{ minWidth: "5rem" }}>
                <Row className="justify-content-center">
                  <Image fluid src={process.env.PUBLIC_URL + fe[1]} style={{ maxHeight: '5rem' }} />
                </Row>
                <Row className="justify-content-center">
                  {fe[0]}
                </Row>
              </Col>
            )
          })
        }
      </Row>
      <Row className="justify-content-center mt-4">
        <Col>
          <h2>Dev Ops</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {
          devops.map((dev) => {
            return (
              <Col style={{ minWidth: "5rem" }}>
                <Row className="justify-content-center">
                  <Image fluid src={process.env.PUBLIC_URL +dev[1]} style={{ maxHeight: '5rem' }} />
                </Row>
                <Row className="justify-content-center">
                  {dev[0]}
                </Row>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  );
}

function HabitTracker(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Habit Tracker</h1>
        </Col>
      </Row>
      <Row className="justify-content-center" className="project-desc" >
        <Col style={{ minWidth: '11rem' }} >
          <h2>
            Description
          </h2>
          <hr />
          <p>
            One of the practices that I do to boost my productivity in order to reach my goal is doing up a
                <a class="hyperlink" href="https://en.wikipedia.org/wiki/Bullet_Journal"> Bullet Journal</a>.
                Inspired by this practice, I designed an app to help me streamline my daily bullet journaling.
                Habit Tracker is an app designed for tracking a habit, adding a daily record and generating statistics,
                all within a few clicks.
              </p>
        </Col>
        <Col style={{ minWidth: '15rem', maxWidth: '30rem' }} >
          <Card>
            <Carousel>
              <Carousel.Item>
                <Image
                  fluid
                  alt="Habit Tracker Logo"
                  src={process.env.PUBLIC_URL + '/habit_tracker-logo.png'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  alt="Habit Tracker Add Habit"
                  src={process.env.PUBLIC_URL + '/habit_tracker-add_habit.png'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  alt="Habit Tracker Add Record"
                  src={process.env.PUBLIC_URL + '/habit_tracker-add_record.png'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  alt="Habit Tracker View Statistics"
                  src={process.env.PUBLIC_URL + '/habit_tracker-view_statistics.png'}
                />
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="project-desc">
          <h2>
            Technical Skills Learnt
          </h2>
          <Button href='https://github.com/viriyadhika/GoalTracker'>GitHub</Button>
          <hr />
          <ul>
            <li>Using <strong>Android Studio</strong> platform to build</li>
            <li>Built-using Model-View-ViewModel (MVVM) <a class="hyperlink"
              href="https://developer.android.com/jetpack/guide">architecture</a></li>
            <li>Utilize SQLite Database via <a class="hyperlink"
              href="https://developer.android.com/training/data-storage/room">Android Room</a> back-end</li>
            <li>Front-end is achieved through and Android built-in ViewModel and rendering of XML</li>
            <li>External library <a class="hyperlink"
              href="https://github.com/PhilJay/MPAndroidChart">(MPAndroidChart)</a> for displaying statistics</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="project-desc">
          <h2>Using Habit Tracker</h2>
          <hr />
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              style={{ maxWidth: '100%', alignSelf: 'center' }}
              src="https://www.youtube.com/embed/75QTN7J4Ec4"
              frameborder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

function Logistics(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Logistics Website</h1>
          <Button
            href="https://vi-try-django-logistics.herokuapp.com/">Visit Logistics Website!
          </Button>
          <p style={{ color: 'gray' }}> *Website might load slowly due to Heroku free plan</p>
        </Col>
      </Row>
      <Row className="project-desc">
        <Col style={{ minWidth: '15rem', maxWidth: '30rem' }}>
          <Card>
            <Carousel>
              <Carousel.Item>
                <Image
                  fluid
                  alt="Logistics logo"
                  src={process.env.PUBLIC_URL + '/logistics-logo.png'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  alt="Logistics carousel 1"
                  src={process.env.PUBLIC_URL + '/logistics-carousel_1.png'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  alt="Logistics carousel 2"
                  src={process.env.PUBLIC_URL + '/logistics-carousel_2.png'}
                />
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
        <Col style={{ minWidth: '11rem' }} >
          <h2>
            Description
          </h2>
          <hr />
          <p>
            In a corporate or an organization setting, there are a lot of common items that might not be used as often.
            When one department is not using it, other department should be able to borrow it.
            This web application facilitate the lending and borrowing process.
            More details can be found in the Demo-ppt link below.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="project-desc">
          <h2>
            Technical Skills Learnt
          </h2>
          <Button href="https://github.com/viriyadhika/logistics-website">GitHub</Button>
          <hr />
          <ul>
            <li>Built using <a class="hyperlink" href="https://docs.djangoproject.com/">Django</a> backend with a Model-View-Template (MVT) architecture</li>
            <li>Django features used: authentication, generic forms, views and queries</li>
            <li>Front-end is done via HTML and CSS using by <a class="hyperlink" href="https://getbootstrap.com/">Bootstrap</a> framework</li>
            <li>Deployed via <a class="hyperlink" href="https://www.heroku.com/">Heroku platform</a></li>
            <li>External libraries integration such as <a class="hyperlink" href="https://tempusdominus.github.io/bootstrap-4/">Tempus-Dominus</a> for date-picker in Django</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="project-desc">
          <h2>Using Logistics Website</h2>
          <hr />
          <object
            data={process.env.PUBLIC_URL + '/logistics-manual.pdf'}
            type="application/pdf"
            width="90%"
            height="500rem" >
            This browser does not support PDF.
            You can download the PDF to view it.
          </object>
          <p>In case the PDF above doesn't show, you can access the slides <a href="https://drive.google.com/file/d/1pNcetOwBlItZRdHLqvJV1c9dIUcw5U7e/view?usp=sharing">here</a> </p>
        </Col>
      </Row >
    </Container >
  )
}

function Grouptask(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Group Management Website</h1>
          <Button href="https://grouptask.viriyadhika.com" style={{ display: "inline" }}>View Website</Button>
        </Col>
      </Row>
      <Row className="project-desc">
        <Col style={{ minWidth: '11rem' }}>
          <h2>
            Description
          </h2>
          <hr />
          <p>
            This application is used to track tasks needed to be done by a group.
            It consists of Django REST API, Front-end React application and an Android application.
          </p>
        </Col>
        <Col style={{ minWidth: '15rem', maxWidth: '30rem' }}>
          <Card>
            <Carousel>
              <Carousel.Item>
                <Image
                  fluid
                  alt="Grouptask logo"
                  src={process.env.PUBLIC_URL + '/grouptask-logo.png'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  alt="Grouptask carousel 1"
                  src={process.env.PUBLIC_URL + '/grouptask-ss.png'}
                />
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="project-desc">
          <h2>
            Back-End Application
          </h2>
          <Button href="https://grouptaskapi.viriyadhika.com" style={{ display: "inline" }}>API Endpoint</Button>
          <Button href="https://github.com/viriyadhika/group-task-backend" style={{ display: "inline", marginLeft: "1rem" }}>GitHub</Button>
          <hr />
          <ul>
            <li>Implemented REST API using <a href="https://www.django-rest-framework.org/"> Django REST Framework</a>. Learnt best practices of REST API endpoint for each resources. Returning data in form of JSON
          </li>
            <li>Created a detailed documentation on the API usage. This allows front-end applications to be built faster
          </li>
            <li>
              Utilizes <a href="https://django-rest-framework-simplejwt.readthedocs.io/en/latest/">JWT authentication</a> to secure the API
          </li>
            <li>
              Configured custom permission for different resources
          </li>
            <li>
              Configured <a href="https://www.postgresql.org/">PostgreSQL</a> for database
          </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="project-desc">
          <h2>
            Front-End Application
          </h2>
          <Button href="https://grouptask.viriyadhika.com" style={{ display: "inline" }}>View Website</Button>
          <Button href="https://github.com/viriyadhika/group-task-frontend" style={{ display: "inline", marginLeft: "1rem" }}>GitHub</Button>
          <hr />
          <ul>
            <li>Uses <a href="https://reactjs.org/">React JS</a> to build the project, including the use of <a href="https://create-react-app.dev/docs/getting-started/"> create-react-app</a> to start the project</li>
            <li>Asynchronous fetching to via <a href="https://www.npmjs.com/package/axios"> axios</a> library</li>
            <li>Utilizes <a href="https://react-bootstrap.github.io/"> React-Bootstrap</a> library to create responsive website for different screen sizes</li>
            <li><a href="https://reactjs.org/docs/hooks-intro.html"> React Hooks</a> to maintain states in functional components</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="project-desc">
          <h2>
            Websites Deployment
          </h2>
          <Button href="https://github.com/viriyadhika/GroupTaskAndroid" style={{ display: "inline" }}>GitHub</Button>
          <hr />
          <ul>
            <li>Using <a href="https://www.nginx.com/">NGINX</a> webserver for handling proxy pass</li>
            <li>Utilized <a href="https://www.docker.com/">Docker</a> container and <a href="https://docs.docker.com/compose/">docker-compose</a> to ease deployment</li>
            <li><a href="https://www.digitalocean.com/products/droplets/">Digital Ocean Droplet</a> as the server. Learnt about SSH for deployment purpose.</li>
            <li>Purchased and configured the DNS of the website.</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="project-desc">
          <h2>
            Android App
          </h2>
          <Button href="https://github.com/viriyadhika/GroupTaskAndroid" style={{ display: "inline" }}>GitHub</Button>
          <hr />
          <ul>
            <li>Utilizes <a href="https://developer.android.com/studio">Android Studio</a> to build the project</li>
            <li>Learnt <a
              href="https://developer.android.com/jetpack/guide">Model-View-ViewModel (MVVM)</a> design pattern for better separation of concern with Repositories fetching data from API and communicating to the View layer through Android LiveData</li>
            <li><a href="https://developer.android.com/training/volley">Android Volley</a> to execute API calls and handling API exceptions</li>
            <li>Utilized built in Android components such as Toolbar and BottomNavigationBar for navigating different fragments of the app</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="project-desc">
          <h2>Using Group Management Website</h2>
          <hr />
          <object
            data={process.env.PUBLIC_URL + '/grouptask-guide.pdf'}
            type="application/pdf"
            width="90%"
            height="500rem" >
            This browser does not support PDF.
            You can download the PDF to view it.
          </object>
          <p>In case the PDF above doesn't show, you can access the slides <a href="https://drive.google.com/file/d/1Fgdnu1km30_Y4695gUJMDKLUjUZ7Up3s/view?usp=sharing">here</a> </p>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              style={{ maxWidth: '90%', alignSelf: 'center' }}
              src="https://www.youtube.com/embed/WDhG5Z4j-KM"
              frameborder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </Col>
      </Row >
    </Container >
  )
}

export default App;
