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


    BooksAPI.update(changedBook, shelf)
    .then(data => {

      var updatedBooks = this.state.books.filter(book => book.id !== changedBook.id)

      if(shelf !== "none") {
        changedBook.shelf = shelf
        updatedBooks.push(changedBook)
      }

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
        <Route path='/search' render={({ history }) => (
          <SearchBooks
          books={this.state.books}
          onUpdateBook={(book, shelf) => {
            this.onUpdateBook(book, shelf)
            history.push('/')
          }}
         />
        )}/>
      </div>
    )
  }
}

export default BooksApp
