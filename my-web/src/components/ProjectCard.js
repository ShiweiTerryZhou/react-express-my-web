import React, { Component } from 'react';

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="col-lg-4 col-sm-6 pb-5 portfolio-item">
        <div className="card h-100">
          <a>
            <img
              className="card-img-top"
              src={this.props.value.thumbnail}
              alt
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href={this.props.value.link}>{this.props.value.title}</a>
            </h4>
            <h6 className="card-title">
              <p>
                From: {this.props.value.start_date} To:{' '}
                {this.props.value.end_date}
              </p>
            </h6>
            <p className="card-text">{this.props.value.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
