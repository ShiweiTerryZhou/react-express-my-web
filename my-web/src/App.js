import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import BlogsPage from './components/BlogsPage';
import AboutPage from './components/AboutPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_state: 'HomePage',
    };
    this.change_page_status = this.change_page_status.bind(this);
  }

  change_page_status(eventKey) {
    this.setState({ page_state: eventKey });
  }

  componentDidMount() {
    // fetch('/api/v1.0/projectcards')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((resJ) => console.log('Connection to Express: ' + resJ.status));
  }

  render() {
    return (
      <div className="App">
        <Navbar
          style={{ paddingLeft: '50px', paddingRight: '50px' }}
          bg="dark"
          variant="dark"
          expand="lg"
          onSelect={this.change_page_status}
        >
          <Navbar.Brand style={{ fontWeight: 'bold' }}>
            Shiwei (Terry) Zhou
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link eventKey="HomePage">About Me</Nav.Link>
              <Nav.Link eventKey="ProjectsPage">Projects</Nav.Link>
              <Nav.Link eventKey="BlogsPage">Blogs</Nav.Link>
              <Nav.Link eventKey="AboutPage">About This Website</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {(() => {
          switch (this.state.page_state) {
            case 'HomePage':
              return <HomePage />;
            case 'ProjectsPage':
              return <ProjectsPage />;
            case 'BlogsPage':
              return <BlogsPage />;
            case 'AboutPage':
              return <AboutPage />;
            default:
              return <HomePage />;
          }
        })()}

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright © Shiwei Zhou Website 2020
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
