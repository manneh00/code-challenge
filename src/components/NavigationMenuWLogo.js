import * as React from 'react';
import '../assets/styles/NavigationMenuWLogo.css';
import PropTypes from 'prop-types';

const NavigationMenuWLogo = (props) => {
    const {logo, menu} = props;

    return(
        <nav className="navigationMenu">
            <img src={logo} alt="logo" />
            <ul>
                {menu.map((menuItem, index) => {
                    return (<li key={index}>
                        <a href={menuItem.link}>{menuItem.text}</a>
                    </li>);
                })}
            </ul>
        </nav>
    );
}

export default NavigationMenuWLogo;

NavigationMenuWLogo.propTypes = {
  logo: PropTypes.string,
  menu: PropTypes.array
};