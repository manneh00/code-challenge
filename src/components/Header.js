import * as React from 'react';
import HeroBanner from './Herobanner';
import NavigationMenuWLogo from './NavigationMenuWLogo';
import '../assets/styles/Header.css';

const Header = ()=> {
    return (
        <header className="header">
            <NavigationMenuWLogo></NavigationMenuWLogo>
            <HeroBanner></HeroBanner>
        </header>
    )
}

export default Header;