import React, { Component } from 'react';
import ProfilePic from '../assets/images/ShiweiProfilePics1.jpg';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {/* Page Heading/Breadcrumbs */}
          <h1 className="mt-4 mb-3">
            About
            <small> me (Shiwei Zhou/周世唯)</small>
          </h1>
          {/* Intro Content */}
          <div className="row">
            <div className="col-lg-7">
              <img className="img-fluid rounded mb-4" src={ProfilePic} alt />
            </div>
          </div>
          <div className="row">
            <div style={{ marginLeft: 20, marginRight: 60 }}>
              <h2>Fresh Off the Boat</h2>
              <p>
                I was born in Wuhan, China. No one knows this place until the
                whole COVID-19 pandemic. Came to U.S in 2014 for college. Spent
                next six yeard in University of California, San Diego to
                complete my BS and MS in Computer Science. Those years are not
                easy for me. I started as a physics student and took a lot
                effort to switch my path to Computer Science. From barely catch
                up the lecture to make presentation, now I see La Jolla as my
                second home.
              </p>
              <p>
                If you are a Recruiter, I would appreciate a lot if you could
                spend a few minutes playing around and hopefully put me on your
                interview queue. I may not be the most experienced or most
                competitive candidate on your table, but I wish you can find my
                special charm through my website.
              </p>
              <p>
                You will find my past and ongoing projects, useful resouces I
                use and how this website is built from scratch (without fully
                structured template). Few projects are related to potential
                startup ideas. If anything interests you, feel free to find me
                on LinkedIn or leave a message (if I added this function at this
                moment).
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ marginLeft: 10, marginRight: 60 }}>
              <h3>Education And Certification</h3>
              <ul>
                <li>
                  MS in Computer Science, University of California, San Diego
                  (2018~2019)
                </li>
                <li>
                  BS in Computer Engineer, University of California, San Diego
                  (2014~2018)
                </li>
                <li>AWS Certified Solution Archetect - Associate</li>
              </ul>
            </div>
            <div className="col" style={{ marginLeft: 20, marginRight: 60 }}>
              <img
                className="img-fluid"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/University_of_California%2C_San_Diego_seal.svg/1200px-University_of_California%2C_San_Diego_seal.svg.png"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ marginLeft: 20, marginRight: 60 }}>
              <br />
              <br />
              <br />
              <img
                className="img-fluid"
                src="https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Solutions-Architect_Associate_512x512.d82aee07920970350c427c8d0542bc239180a486.png"
                alt=""
              />
            </div>
            <div className="col" style={{ marginLeft: 10, marginRight: 60 }}>
              <h3>Skills</h3>
              <ul>
                <li>
                  Web Development:
                  <ul>
                    <li>NodeJS</li>
                    <li>EXPRESS</li>
                    <li>REACT</li>
                    <li>Bootstrap</li>
                    <li>Python Flask</li>
                  </ul>
                </li>
                <li>
                  Database:
                  <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Redis</li>
                  </ul>
                </li>
                <li>
                  AWS:
                  <ul>
                    <li>ASG+ELB+EC2 stack</li>
                    <li>lambda</li>
                    <li>general architecture design</li>
                  </ul>
                </li>
                <li>
                  Languages (best to OKish):
                  <ul>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>JSX</li>
                    <li>JAVA</li>
                    <li>C famility</li>
                    <li>Verilog</li>
                  </ul>
                </li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default HomePage;
