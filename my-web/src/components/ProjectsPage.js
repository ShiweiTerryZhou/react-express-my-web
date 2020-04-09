import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    fetch('/api/v1.0/projectcards')
      .then((res) => {
        return res.json();
      })
      .then((resJ) => {
        console.log(resJ);
        this.setState({ projects: resJ.data.newProjectCard });
      });
  }

  render() {
    console.log(this.state.projects);
    return (
      <div>
        <div className="container">
          {/* Page Heading/Breadcrumbs */}
          <h1 className="mt-4 mb-3">
            Projects<small> finished and ongoing </small>
          </h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a>More projects are still under organizing</a>
            </li>
          </ol>
          <div className="row">
            {this.state.projects.map((card) => (
              <ProjectCard key={card.index} value={card} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
