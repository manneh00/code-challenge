import * as React from 'react';
import '../assets/styles/HeroBanner.css';
import backgroundImg from '../assets/images/happy-customer-hero-banner.png';
import Button from './Button';

const HeroBanner = () => {

    const handleCTAButton = (e) => {
        e.preventDefault();
    }

    const handleLearnButton = (e) => {
        e.preventDefault();
    }

    return (
        <div className="heroBanner">
            <img src={backgroundImg} alt="satisfied customers" />
            <div className="heroBannerCTABlock">
                <span>We are</span>
                <h1>Improving Outcomes<br/>for Learners Everywhere</h1>
                <Button className="margin18Right" label="Call to action" onClick={handleCTAButton} type="primary" />
                <Button label="Learn more" onClick={handleLearnButton} />
            </div>
        </div>
    )
}

export default HeroBanner;