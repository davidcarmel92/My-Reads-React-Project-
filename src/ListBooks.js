import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {

  static propTypes = {
    onUpdateBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {

    const { books, onUpdateBook } = this.props

    books.sort(sortBy('title'))

    var read = books.filter((book) =>  book.shelf === "read")
    var currentlyReading = books.filter((book) =>  book.shelf === "currentlyReading")
    var wantToRead = books.filter((book) =>  book.shelf === "wantToRead")

    var shelves = [currentlyReading, wantToRead, read]

    var bookshelves = shelves.map((shelf,index) => <Bookshelf key={index} data={shelf}
    onUpdateBook={onUpdateBook}/>)

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>My Reads</h1>
        </div>
        <div className='list-books-content'>
          {bookshelves}

          <Link to='/search' className='open-search'>Add a book</Link>

        </div>
      </div>
    )
  }

}

export default ListBooks
