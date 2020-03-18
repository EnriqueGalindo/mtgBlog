import React from 'react'
import {NavLink} from 'react-router-dom'
import NavBar from './Navbar'

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to="/newpost">New Post</NavLink></li>
            <li><NavLink to="/Articles">Articles</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
        </ul>
    )
}

export default SignedInLinks