import * as React from 'react';
import '../assets/styles/Buttons.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {label, onClick, type, className} = props;
    return (
        <button 
            className={`${type === "primary" ? "primary" : "secondary"} ${className ? className : ""}`} 
            onClick={(e) => {onClick(e)}}
        >
            {label}
        </button>
    );
}

export default Button;

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string
};