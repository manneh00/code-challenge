import * as React from 'react';
import HeroBanner from './Herobanner';
import NavigationMenuWLogo from './NavigationMenuWLogo';
import '../assets/styles/Header.css';
import logo from '../assets/images/wgulabs-logo.svg';
import {navMenuList} from '../controller';

const Header = ()=> {
    return (
        <header className="header">
            <NavigationMenuWLogo logo={logo} menu={navMenuList} />
            <HeroBanner />
        </header>
    );
}

export default Header;