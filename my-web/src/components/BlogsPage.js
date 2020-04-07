import React, { Component } from 'react';
import BlogsCard from './BlogsCard';

class BlogsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          index: 1,
          thumbnail: 'http://placehold.it/750x300',
          title: 'Blog One',
          description:
            'asiudhoiuhsad  asiudh aoiusdh aiosudh aoisduh aiosudh aoisudh aasd',
          date: '2020-1-1',
          creater: 'Shiwei Zhou',
        },
        {
          index: 2,
          thumbnail: 'http://placehold.it/750x300',
          title: 'Blog Two',
          description:
            'asiudhoiuhsad  asiudh aoiusdh aiosudh aoisduh aiosudh aoisudh aasd',
          date: '2020-1-1',
          creater: 'Shiwei Zhou',
        },
        {
          index: 3,
          thumbnail: 'http://placehold.it/750x300',
          title: 'Blog Three',
          description:
            'asiudhoiuhsad  asiudh aoiusdh aiosudh aoisduh aiosudh aoisudh aasd',
          date: '2020-1-1',
          creater: 'Terry Zhou',
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <div>
          <h1 className="mt-4 mb-3">
            My Blogs <small> About Things I Feel Useful</small>
          </h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a>Yeah, I haven't finished this part yet</a>
            </li>
          </ol>
        </div>
        <div className="row">
          <div className="col-md-8">
            {this.state.blogs.map((blog) => (
              <BlogsCard key={blog.index} value={blog} />
            ))}
          </div>

          <div className="col-md-4">
            <div>
              <div className="card mb-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              {/* Categories Widget */}
              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Widget */}
              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogsPage;
