import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {

  static propTypes = {
    onUpdateBook: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  }


  render() {

    const { data } = this.props

    var books = []

    books = data.map((book) => book )

    var shelfName = ''

    if (books.length!==0) {
      if(books[0].shelf==="read") {
        shelfName = 'Read'
      }
      else if (books[0].shelf==="currentlyReading") {
        shelfName = 'Currently Reading'
      }
      else {
        shelfName = 'Want To Read'
      }


      var eachBook = books.map((book) => {
        return <li key={book.id}><Book
        onUpdateBook={this.props.onUpdateBook}
         book={book} />
         </li>
      })
    }

    return (
      <div className='bookshelf'>
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {eachBook}
          </ol>
        </div>
      </div>
    )
  }

}

export default Bookshelf
