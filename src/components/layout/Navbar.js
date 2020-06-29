import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
        return (
            <nav className='bg-danger text-light p-1'>
                <h2>
                    <i className={props.icon}   /> 
                    {props.title}
                </h2>
            </nav>
        )
}

Navbar.defaultProps = {
    icon: 'fab fa-github',
    title: 'Github Finder'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
