import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {

  static propTypes = {
    onUpdateBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {
    query: '',
    searchBooks: []
  }

// Updates query and searches with BooksAPI, then assigns returned data to searchBooks array.
  onUpdateQuery = (query) => {
    this.setState({ query: query.trim() }, () => {
      BooksAPI.search(this.state.query, 20).then(data => {
        this.setState({ searchBooks: data })
      })
    })
  }

  render() {

    // Checks if search returned any books and if it does sorts books by title
    // and assigns data to Book component for each book
    if(this.state.searchBooks) {
      if(!this.state.searchBooks.error){
        this.state.searchBooks.sort(sortBy('title'))
        var eachBook = this.state.searchBooks.map((book) => {
          return <li key={book.id}><Book
            books={this.props.books}
            onUpdateBook={this.props.onUpdateBook}
            book={book} />
          </li>
        })
      }
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
             placeholder="Search by title or author"
             value={this.state.query}
             onChange={(event) => this.onUpdateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {eachBook}
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchBooks
