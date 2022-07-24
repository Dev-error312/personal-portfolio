import { Col, Container, Nav, Row, Tab } from "react-bootstrap"

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Projects
                        </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit. Aliquam, voluptatibus perspiciatis expedita voluptas quasi veritatis harum doloribus sint mollitia perferendis placeat veniam, eveniet officia nisi vel iste praesentium?</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                        <Nav variant='pills' defaultActiveKey='/home'>
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <p>{project.title}</p>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey='third'>Lorem Ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}