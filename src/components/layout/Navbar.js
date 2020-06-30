import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-danger text-light">
                <h2 >
                    <i className={props.icon}   />
                    {props.title}
                </h2>
                <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:'950px'}}>
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link text-light" to="/" >Home </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-light" to="/about" >About </Link>
                        </li>
                        
                    </ul>
                    </div>
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
