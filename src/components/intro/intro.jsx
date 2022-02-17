//  rce command to create component
import React from 'react';
import "./intro.css"
import Color from "../../image/color-flower.jpeg"


const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hi, my name is</h2>
                    <h2 className='i-name'> Jess Pesale</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Job Seeker</div>
                        </div>
                    </div>
                    <div className="i-description">
                        I am a full-stack software developer from New York. With a background in math and business, 
                        coding is an amazing way to help solve real-wold problems in a creative way.
                        I love that learning is a never ending process and I can't wait to see what new 
                        technologies I learn next!
                    </div>
                </div>
            </div>
            <div className='i-right'>
                <img src={Color}/>
            </div>
        </div>
    );
}

export default Intro;
