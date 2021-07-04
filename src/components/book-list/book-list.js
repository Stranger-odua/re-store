import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import { withBookstoreService } from "../hoc";
import './book-list.css'


class BookList extends Component {

  componentDidMount() {
    // 1. receive data


    // 2. dispatch action to store
  }

  render() {
    const {books} = this.props;
    return (
      <ul>
        {
          books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem book={book}/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}


const mapStateToProps = ({books}) => {
  return {books}
}


export default withBookstoreService()(connect(mapStateToProps)(BookList))


