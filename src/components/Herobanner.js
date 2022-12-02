import * as React from 'react';
import '../assets/styles/HeroBanner.css';
import backgroundImg1440 from '../assets/images/happy-customer-hero-banner-1440.png';
import backgroundImg1210 from '../assets/images/happy-customer-hero-banner-1210.png';
import backgroundImg1024 from '../assets/images/happy-customer-hero-banner-1024.png';
import backgroundImg880 from '../assets/images/happy-customer-hero-banner-880.png';
import backgroundImg750 from '../assets/images/happy-customer-hero-banner-750.png';
import backgroundImg645 from '../assets/images/happy-customer-hero-banner-645.png';
import backgroundImg559 from '../assets/images/happy-customer-hero-banner-559.png';
import backgroundImg488 from '../assets/images/happy-customer-hero-banner-488.png';
import backgroundImg430 from '../assets/images/happy-customer-hero-banner-430.png';
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
            
            <picture>
                <source media="(max-width:1440px)" srcSet={backgroundImg1440} />
                <source media="(max-width:1210px)" srcSet={backgroundImg1210} />
                <source media="(max-width:1024px)" srcSet={backgroundImg1024} />
                <source media="(min-width:880px)" srcSet={backgroundImg880} />
                <source media="(max-width:750px)" srcSet={backgroundImg750} />
                <source media="(max-width:645px)" srcSet={backgroundImg645} />
                <source media="(max-width:559px)" srcSet={backgroundImg559} />
                <source media="(max-width:488px)" srcSet={backgroundImg488} />
                <source media="(max-width:430px)" srcSet={backgroundImg430} />
                <img src={backgroundImg1440} alt="satisfied customers" />
            </picture>
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