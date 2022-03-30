//  rce command to create component
import React from 'react';
import "./intro.css"
import Color from "../../images/color-flower.png"


const Intro = () => {
    return (
      <div className="intro">
            <div className="left">

              <h2 className="i-intro">Hi, my name is</h2>
              <h2 className="name"> Jess Pesale</h2>

              <div className="title">
                <div className="title-wrapper">
                  <div className="title-item">Software Engineer</div>
                  <div className="title-item">Web Developer</div>
                  <div className="title-item">Job Seeker</div>
                </div>
              </div>

              <p className="description">
                I am a full-stack software developer from New York. With a
                background in math and business, coding is an amazing way to
                help solve real-wold problems in a creative way. I love that
                learning is a never ending process and I can't wait to see what
                new technologies I learn next!
              </p>

            </div>

          <div className="right">
            <img src={Color} className="flower-image" alt="colorful flower" />
          </div>
      </div>
    );
}

export default Intro;