import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to="/Articles">Articles</NavLink></li>
            <li><NavLink to="/logout">Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks