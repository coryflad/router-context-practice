import React from 'react'

function Book(props) {
    return (
        <div className='book'>
            <h2>Book Component</h2>
            <h3>Book Title: {props.title}</h3>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Book
