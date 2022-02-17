//  rce command to create component
import React from 'react';
import "./intro.css"

const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hi, my name is</h2>
                    <h2 className='i-name'> Jess Pesale</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='i-right'>Right</div>
        </div>
    );
}

export default Intro;
