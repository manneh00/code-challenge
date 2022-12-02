import * as React from 'react';
import {useState} from 'react';
import '../assets/styles/NavigationMenuWLogo.css';
import PropTypes from 'prop-types';

const NavigationMenuWLogo = (props) => {
    const {logo, menu} = props;
    const [openMobileNav, setOpenMobileNav] = useState(false);

    const handleOpenMobileNav = () => {
        setOpenMobileNav(!openMobileNav);
    }

    const handleMenuClick = () => {
        setOpenMobileNav(false);
    }

    const displayFlex = openMobileNav ? "displayFlex" : "";

    return(
        <nav className="navigationMenu">
            <img className="logo" src={logo} alt="wgulabs logo" />
            <div className="spacer"></div>

            <div className="">
                <div className="icon" onClick={handleOpenMobileNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul className={displayFlex}>
                    {menu.map((menuItem, index) => {
                        return (<li key={index}>
                            <a onClick={handleMenuClick} href={menuItem.link}>{menuItem.text}</a>
                        </li>);
                    })}
                </ul>
            </div>
            
            <div className="spacer"></div>
        </nav>
    );
}

export default NavigationMenuWLogo;

NavigationMenuWLogo.propTypes = {
  logo: PropTypes.string,
  menu: PropTypes.array
};