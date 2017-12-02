import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class CurrentlyReading extends Component {

  render() {
    return (
      <div className='bookshelf'>
        <h2 className="bookshelf-title">Currently Reading</h2>
      </div>
    )
  }

}

export default CurrentlyReading
