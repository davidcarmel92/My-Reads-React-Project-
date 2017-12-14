import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

  static propTypes = {
    onUpdateBook: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  }

  render() {

    const { book, onUpdateBook, books } = this.props

    // For multiple author assignment
    if(book.authors) {
      var authors = book.authors.map((author,index) => <div key={index} className="book-authors">{author}</div>)
    }

    // Assignes book.shelf to none if the book is not on a shelf
    if(!book.shelf){
      book.shelf = 'none'
    }

    // assigns defualt value fo shelf to books that return in a search that are already on a shelf.
    if(books){

      var response = books.filter(data => data.id === book.id)

      if(response.length!==0){
        book.shelf = response[0].shelf
      }

    }

    var image = ''

    if(book.imageLinks.thumbnail){
      image = book.imageLinks.thumbnail
    }



    return (

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${image})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) =>  onUpdateBook(book, event.target.value)}
                defaultValue={book.shelf}
                >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        <div className="book-title">{book.title}</div>
        {authors}
      </div>
    )
  }

}

export default Book
