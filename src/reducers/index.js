import combineReducers from 'redux'
import loginUser from './loginUser'
import users from './users'
import questions from './questions'
import answers from './answers'
import loadingBarReducer from 'react-redux-loading'

export default combineReducers({
    loginUser,
    users,
    questions,
    answers,
    loadingBar: loadingBarReducer,
  })