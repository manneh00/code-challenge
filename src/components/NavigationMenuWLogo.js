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

    const handleMenuClick = (e) => {
        //const {href} = e.target.children[0];
        setTimeout(() => setOpenMobileNav(false), 200);
    }

    const mobileNavState = openMobileNav ? "open" : "closed";

    return(
        <nav className="navigationMenu">
            <img className="logo" src={logo} alt="wgulabs logo" />
            <div className="spacer"></div>

            <div className="">
                <div className={`icon ${mobileNavState}`} onClick={handleOpenMobileNav}>
                    <div className="barOne"></div>
                    <div className="barTwo"></div>
                    <div className="barThree"></div>
                </div>

                <ul>
                    {menu.map((menuItem, index) => {
                        return (<li key={index} onClick={handleMenuClick} > 
                            <a 
                                data-hover={menuItem.text}
                                href={menuItem.link}
                            >
                                {menuItem.text}
                            </a>
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