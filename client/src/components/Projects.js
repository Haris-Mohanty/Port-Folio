import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard, ProjectCard2 } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Education App Dev",
      description: "Click to visit...",
      imgUrl: projImg1,
      link: "https://education-app-dev.netlify.app/",
    },
    {
      title: "Blood Hub App",
      description: "Click to visit...",
      imgUrl: projImg2,
      link: "https://blood-hub.onrender.com",
    },
    {
      title: "School ERP System",
      description: "Click to visit...",
      imgUrl: projImg3,
      link: "https://github.com/Haris-Mohanty/School-ERP-System",
    },
    {
      title: "Job Finder",
      description: "Click to visit...",
      imgUrl: projImg4,
      link: "https://job-finder-app.onrender.com/api-doc/",
    },
    {
      title: "Image Cloud",
      description: "Click to visit...",
      imgUrl: projImg5,
      link: "https://github.com/Haris-Mohanty/ImageCloud",
    },
    {
      title: "ChatGPT-X",
      description: "Click to visit...",
      imgUrl: projImg6,
      link: "https://github.com/Haris-Mohanty/ChatGPT-X",
    },
  ];
  const projects1 = [
    {
      title: "Education App Dev",
      description: "Click to visit...",
      imgUrl: projImg1,
      link: "https://education-app-dev.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    As a full-stack developer, I have a deep understanding of
                    back-end & Front-end development.By leveraging the latest
                    tools and frameworks, I ensure that my projects are not only
                    visually appealing but also performant and scalable,
                    delivering optimal results for my clients. Feel free to
                    explore my portfolio and dive into the projects I've
                    developed.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Full-Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Front-end</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">About Me!</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="animate__animated animate__fadeInLeft">
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="animate__animated animate__fadeInRight">
                          {projects1.map((project, index) => {
                            return <ProjectCard2 key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p className="animate__animated animate__lightSpeedInLeft">
                          Welcome to my website! I'm a passionate and
                          experienced MERN-stack web developer, dedicated to
                          crafting robust and intuitive web applications. With a
                          strong foundation in MongoDB, Express.js, React.js,
                          and Node.js, I've successfully built numerous projects
                          that showcase my skills and expertise. <br />
                          <br /> My journey as a web developer has been marked
                          by a relentless pursuit of excellence, combining the
                          latest technologies with innovative design to create
                          seamless user experiences. Each project I undertake is
                          a testament to my commitment to delivering
                          high-quality, scalable solutions that meet the unique
                          needs of my clients.
                          <br />
                          <br />
                          <br />
                          Whether it's developing dynamic e-commerce platforms,
                          interactive social networking sites, or cutting-edge
                          web applications, I thrive on the challenge of turning
                          ideas into reality. I leverage my expertise in
                          front-end development, utilizing HTML, CSS, and
                          JavaScript, to create captivating user interfaces that
                          captivate and engage visitors.
                          <br />
                          <br />
                          <br /> But it doesn't stop there. As a full-stack
                          developer, I have a deep understanding of back-end
                          development as well. I harness the power of Node.js
                          and Express.js to build robust APIs and server-side
                          logic that seamlessly integrate with the front-end,
                          providing a seamless user experience.
                          <br />
                          <br /> I take immense pride in my ability to transform
                          complex requirements into elegant, functional
                          solutions. By leveraging the latest tools and
                          frameworks, I ensure that my projects are not only
                          visually appealing but also performant and scalable,
                          delivering optimal results for my clients.
                          <br />
                          <br /> Feel free to explore my portfolio and dive into
                          the projects I've developed. Each one is a reflection
                          of my dedication to craftsmanship and attention to
                          detail. If you have any questions or would like to
                          discuss potential collaborations, please don't
                          hesitate to reach out. I'm excited to connect and
                          explore how we can bring your ideas to life.
                          <br />
                          <br />
                          Thank You!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
