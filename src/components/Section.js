import * as React from 'react';
import '../assets/styles/Section.css';
import PropTypes from 'prop-types';

const Section = (props) => {
    const {columns, children, className} = props;
    return (
        <section className={`section ${className ? className : ""}`}>
            <div className={`col-${columns}`}>
                {children}
            </div>
        </section>
    );
}

export default Section;

Section.propTypes = {
    columns: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string
}