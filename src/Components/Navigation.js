import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
            <div className='nav'>
                <h3>Nav Component</h3>
                <NavLink to='/'>
                    <h1>Google Booksearch </h1>
                </NavLink>
                <br />
                <NavLink to='/search'>
                    <button>GO TO NEXT PAGE!</button>
                </NavLink>
                <br />
            </div>     
    )
}

export default Navigation