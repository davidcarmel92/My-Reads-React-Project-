import './App.css'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {

      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      }
    )
  }

  onUpdateBook = ( changedBook, shelf ) => {
    /*
      Function changes book shelf by updating BooksAPI and using setState to books array.
    */

    BooksAPI.update(changedBook, shelf)
    .then(data => {

      // Finds changed book
      var updatedBooks = this.state.books.filter(book => book.id !== changedBook.id);


      // Checks if the shelf selected is not none and then changes the shelf property of the selected book.
      if(shelf !== "none") {
        changedBook.shelf = shelf;
        updatedBooks.push(changedBook)
      }

      // updates books array with array container changed book
      this.setState({ books: updatedBooks })

    })
  }


  render() {

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
          books={this.state.books}
          onUpdateBook={this.onUpdateBook}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
          books={this.state.books}
          onUpdateBook={this.onUpdateBook}
         />
        )}/>
      </div>
    )
  }
}

export default BooksApp
