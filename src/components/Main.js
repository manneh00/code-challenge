import * as React from 'react';
import Section from './Section';
import studyGroup from '../assets/images/study-group.png';
import studyGroupWebp from '../assets/images/study-group.webp';
import '../assets/styles/Main.css';

const Main = ()=> {
    return (
        <main className="main">
            <Section columns={2} className="firstSection">
                <div className="firstSectionImgContainer">
                    <picture>
                        <source srcSet={studyGroupWebp} type="image/webp" />
                        <img loading="lazy" className="imgResponsive" src={studyGroup} alt="study group" />
                    </picture>
                    
                </div>
                <div className="firstSectionTextContainer">
                    <span>What we do</span>
                    <h2>Stand out with engaging, effective learning</h2>
                    <p>WGU Labs offers learning design and development services tailored to your long-term goals, making your learning more effective, engaging, equitable, and scalable. Pay only for the services you need. All of our services can be customized, bundled, or used individually.</p>
                </div>
                <div className="squareCorner"></div>
            </Section>
            
        </main>
    )
}

export default Main;