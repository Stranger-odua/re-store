const initialState = {
  books: [],
  loading: true,
  error: null
}


const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'BOOKS_REQUESTED':
      return {
        books: [],  // или оставить состояние books в исходном state: state.books
        loading: true,
        error: null

      }

    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false,
        error: null
      }

    case 'BOOKS_ERROR':
      return {
        books: [],
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default reducer



