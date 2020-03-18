import React from 'react'
import {NavLink} from 'react-router-dom'
import NavBar from './Navbar'

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to="/newpost">New</NavLink></li>
        </ul>
    )
}

export default SignedInLinks