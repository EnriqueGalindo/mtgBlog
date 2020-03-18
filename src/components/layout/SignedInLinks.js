import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to="/create">New Post</NavLink></li>
            <li><NavLink to="/Articles">Articles</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
        </ul>
    )
}

export default SignedInLinks