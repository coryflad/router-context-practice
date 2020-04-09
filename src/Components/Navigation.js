import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <div>
                <NavLink to='/'>Home</NavLink>
                <br />
                <NavLink to='/about'>About</NavLink>
                <br />
                <NavLink to='/contact'>Contact</NavLink>
            </div>

        </div>
    )
}

export default Navigation