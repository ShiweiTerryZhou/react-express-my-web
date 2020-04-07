import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-4 mb-3">
            About<small> how this website is built </small>
          </h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a>A Build From Scratch</a>
            </li>
          </ol>
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-4"
                src="/pics/modelPic.png"
                alt
              />
            </div>
            <div className="col-lg-6">
              <h2>Keep Updated</h2>
              <p>
                I had several personal websites before, but never had one that
                was built from scratch. Previous sites were mostly built from
                very well-architected static templates. Since COVID-19 made me
                stuck at home and made it harder for me to find myself a job. I
                decided to sit down and practice little bit on full-stack dev by
                building this up. I am trying to make dependencies as
                light-weight as possible, so please forgive the ugliness of UI
                and front looking.
              </p>
              <h3>What's inside</h3>
              <p>
                This websites is composed of react.js as client server and
                express.js as backend server. Using Mongoose as interface to
                MongoDB to serve dynamic data and also make myself easier to
                edit content later. CMV structure is implement as backend
                structure. However, I haven't implemented any state management
                API (like Redux) at the front due to the shallow depth of the
                site.
              </p>
              <p>
                Yes, it is a very small website and it can be done with a lot
                lighter structure. It is done in this way majorly to create good
                templates for myself so that later I can rebuild many core
                functionalities a lot faster.
              </p>
              <p>
                I may rebuild this site later using AngularJS or Python Flask
                since I found out it is really helpful to start from beginning
                and put everything together and it helped me to develop my
                personal template for future use.
              </p>
            </div>
          </div>
          <div>
            <h2>Empowered by</h2>
            <br />
            <div className="row">
              <div className="col-lg-2 col-sm-4 mb-4">
                <img
                  className="img-fluid"
                  src="https://i.ytimg.com/vi/xCGPPimXgJU/maxresdefault.jpg"
                  alt
                />
              </div>
              <div className="col-lg-2 col-sm-4 mb-4">
                <img
                  className="img-fluid"
                  src="https://miro.medium.com/max/6668/1*XP-mZOrIqX7OsFInN2ngRQ.png"
                  alt
                />
              </div>
              <div className="col-lg-2 col-sm-4 mb-4">
                <img
                  className="img-fluid"
                  src="https://i.pcmag.com/imagery/reviews/02Q6yxveinggAu3PomearaV-7.fit_scale.size_1028x578.v_1569481734.jpg"
                  alt
                />
              </div>
              <div className="col-lg-2 col-sm-4 mb-4">
                <img
                  className="img-fluid"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                  alt
                />
              </div>
              <div className="col-lg-2 col-sm-4 mb-4">
                <img
                  className="img-fluid"
                  src="https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png"
                  alt
                />
              </div>
              <div className="col-lg-2 col-sm-4 mb-4">
                <img
                  className="img-fluid"
                  src="https://blog.intelligentbee.com/wp-content/uploads/2017/06/nodemon3-1.png"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
