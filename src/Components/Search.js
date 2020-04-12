import React from 'react'
import Book from './Book'

class Search extends React.Component {
    state = {
        books: [],
        error: null,
        params: {
            q: ''
        }
    }

    formatQueryParams(params) {
        const queryItems = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&')
    }

    checkString(inputString) {
        let outputText = inputString
        if (inputString === undefined) {
            outputText = 'no details'
        }
        if (inputString == null) {
            outputText = 'no deatils'
        }
        return outputText
    }

    handleSearch = (e) => {
        e.preventDefault()
        const data = {}
        const formData = new FormData(e.target)
        for (let value of formData) data[value[0]] = value[1]

        this.setState({
            params: data
        })

        console.log(data)

        const searchURL = 'https://www.googleapis.com/books/v1/volumes'
        const queryString = this.formatQueryParams(data)
        const url = searchURL + '?' + queryString

        console.log(url)

        const options = {
            method: 'GET',
            header: {
                'Authorization': '',
                'Content-Type': 'application/json'
            }
        }

        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again later')
                }
                return res
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)


                if (data.totalItems === 0) throw new Error('no books')

                const aBooks = data.items.map(book => {
                    const { title, description } = book.volumeInfo
                    return {
                        title: this.checkString(title),
                        description: this.checkString(description)
                    }
                })
                this.setState({
                    books: aBooks,
                    errors: null
                })
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
    }



    render() {

        const errorMessage = this.state.error ? <div>{this.state.error}</div> : false
        const library = this.state.books
        const books = library.map((book, i) => {
            return <Book key={i} title={book.title} description={book.description} />
        })

        return (
            <div className='search'>
                <h2>What would you like to search for in the Google Books API?</h2>
                <form onSubmit={this.handleSearch}>
                    <input type='text' name='q' />
                    <br />
                    <button type='submit'>Search</button>
                </form>
                {books}
                {errorMessage}
            </div>
        )
    }
}

export default Search