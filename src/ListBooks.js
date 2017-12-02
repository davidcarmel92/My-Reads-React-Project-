import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

class ListBooks extends Component {

  render() {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>My Reads</h1>
        </div>
        <div className='list-books-content'>
          <CurrentlyReading />
          <WantToRead />
          <Read />

          <Link to='/search' className='open-search'>Add a book</Link>

        </div>
      </div>
    )
  }

}

export default ListBooks
