import React from "react";
import "../styles/about.css";
import webIcon from "../assets/icon-dev.svg";
import webIcon1 from "../assets/icon-frameworks.svg";
import webIcon2 from "../assets/icon-app.svg";
import webIcon3 from "../assets/icon-marketing.svg";
import Visual from "../assets/icon-multimedia.svg";
import Digital from "../assets/icon-video.svg";




function About() {
  return (
    <>
      <section className="about_page">
        <div className="about_title">
          <h2>
            {" "}
            <span>About</span> Me.
          </h2>
          <hr />
        </div>

        <div className="about_me">
          <p>
            Hello there! I am <span> Harshal</span> Patil Graduate of computer
            science with experience working across the full-stack of Web
            development. In the last six months, I've gained valuable remote
            experience working with CraveDigi and collaborating on digital
            products for both business and consumer use.
          </p>

          <button className="button-62">Show More</button>
        </div>

        <div className="focus">
          <h2>
            <span>Primary</span> Focus
          </h2>

          <div className="focus_card">
            <div className="card">
              <div>
                <img src={webIcon} alt="/" />
              </div>
              <div>
                <h3>Web Design & Development</h3>
                <p>
                  Creating attractive, easy-to-use websites that work well for
                  businesses and individuals online.
                </p>
              </div>
            </div>

            <div className="card">
              <div className=" icon">
                <img src={webIcon1} alt="/" />
              </div>
              <div>
                <h3>Full-Stack Solutions</h3>
                <p>
                  Developing scalable web applications using JavaScript
                  Frameworks, SQL Databases, PHP and Python.
                </p>
              </div>
            </div>

            <div className="card">
              <div className=" icon">
                <img src={webIcon2} alt="/" />
              </div>
              <div>
                <h3>mobile app icon Mobile Apps & Games</h3>
                <p>
                  Creating and developing engaging mobile apps and games for iOS
                  and Android devices.
                </p>
              </div>
            </div>

            <div className="card">
              <div className=" icon">
                <img src={webIcon3} alt="/" />
              </div>
              <div>
                <h3>Marketing & SEO</h3>
                <p>
                  Using SEO and marketing strategies to boost online visibility
                  and promote products or services.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="focus">
          <h2>
            <span>Exploring </span> Creativity
          </h2>

          <div className="focus_card">
            <div className="card">
              <div>
                <img src={Visual} alt="/" />
              </div>
              <div>
                <h3>Visual Storytelling</h3>
                <p>
                  Creating attractive, easy-to-use websites that work well for
                  businesses and individuals online.
                </p>
              </div>
            </div>

            <div className="card">
              <div className=" icon">
                <img src={Digital} alt="/" />
              </div>
              <div>
                <h3>Digital Content Creation</h3>
                <p>
                  Creating attractive, easy-to-use websites that work well for
                  businesses and individuals online.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="languages">
          <h2>
            <span>Languages </span>{" "}
          </h2>
          <div className="coding_cont">
            <div className="codig_language">
              <div className="lan_card">
                <div>
                  <h3>Java</h3>
                  <p>90%</p>
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="lan_card">
                <div>
                  <h3>Java</h3>
                  <p>90%</p>
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="lan_card">
                <div>
                  <h3>Java</h3>
                  <p>90%</p>
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="lan_card">
                <div>
                  <h3>Java</h3>
                  <p>90%</p>
                </div>
                <div>
                  <hr />
                </div>
              </div>
            </div>
          </div>    
        </div>


        <div>
            <h2></h2>
          
        </div>
      </section>
    </>
  );
}

export default About;
