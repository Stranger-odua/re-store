const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220
}


const reducer = (state = initialState, action) => {

  //console.log(action.type) // проверяем, что действие (action) действительно доходит до редьюсера

  switch (action.type) {

    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],  // или оставить состояние books в исходном state: state.books
        loading: true,
        error: null
      }

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      }

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }

    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload
      const book = state.books.find((book) => book.id === bookId)
      const newItem = {
        id: book.id,
        name: book.title,
        count: 1,
        total: book.price
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          newItem
        ]
      }

    default:
      return state
  }
}

export default reducer

