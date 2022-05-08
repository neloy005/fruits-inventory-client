import React from 'react';
import arif from '../../../images/neloy.jpeg';
import './About.css'

const About = () => {
    return (
        <div style={{ 'min-height': '650px' }}>
            <h2 style={{ 'marginTop': '50px', 'marginBottom': '30px' }}>About me 🙋‍♂️:</h2>
            <div className='about-container'>
                <img src={arif} alt="" />
                <div className='my-info'>
                    <h2>Md. Arif Istiek Neloy</h2>
                    <p>Currenatly studying in Bsc in CSE in BGC Trust University, Bangladesh</p>
                    <p>Goal: I want to be a successfull web developer.</p>
                    <p>Skills: HTML, JSS, JS, React etc.</p>
                </div>

            </div>

        </div>
    );
};

export default About;