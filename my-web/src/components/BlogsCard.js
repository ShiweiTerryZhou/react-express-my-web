import React, { Component } from 'react';

class BlogsCard extends Component {
  render() {
    return (
      <div>
        <div className="card mb-4">
          {/* <img
            className="card-img-top"
            src={this.props.value.thumbnail}
            alt="Card image cap"
          /> */}
          <div className="card-body">
            <h2 className="card-title">{this.props.value.title}</h2>
            <p className="card-text">{this.props.value.description}</p>
            <a href={this.props.value.link} className="btn btn-primary">
              Read More →
            </a>
          </div>
          <div className="card-footer text-muted">
            Posted on {this.props.value.date}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogsCard;
