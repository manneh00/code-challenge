import * as React from 'react';
import HeroBanner from './Herobanner';
import NavigationMenuWLogo from './NavigationMenuWLogo';

const Header = ()=> {
    return (
        <header>
            <NavigationMenuWLogo></NavigationMenuWLogo>
            <HeroBanner></HeroBanner>
        </header>
    )
}

export default Header;