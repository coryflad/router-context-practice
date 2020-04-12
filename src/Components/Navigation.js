import React from 'react'
import { NavLink } from 'react-router-dom'


function Navigation() {
    return (
        <div className='nav'>
            <h2>Routing / Context Practice</h2>
            <NavLink to='/'>
                <button>GO HOME</button>
            </NavLink>
            <br />
            <NavLink to='/search'>
                <button>GO TO SEARCH PAGE</button>
            </NavLink>
            <br />
            <button>SWITCH THEME</button>
        </div>
    )
}

export default Navigation