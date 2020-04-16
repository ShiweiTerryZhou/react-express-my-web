import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class ProjectCard extends Component {
  constructor(props) {
    super(props);
    let temp_liveDemo = 0;
    if (this.props.value.demo) {
      temp_liveDemo = 1;
    }
    this.state = {
      liveDemo: temp_liveDemo,
    };
  }

  componentDidMount() {}

  render() {
    console.log(this.state.liveDemo);
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

            {(() => {
              switch (this.state.liveDemo) {
                case 0:
                  return;
                // return (
                //   <Button href="#" variant="secondary" size="lg" disabled>
                //     Live Demo
                //   </Button>
                // );
                case 1:
                  return (
                    <Button
                      href={this.props.value.demo}
                      variant="primary"
                      size="lg"
                    >
                      Live Demo
                    </Button>
                  );
                default:
                  return <br />;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
