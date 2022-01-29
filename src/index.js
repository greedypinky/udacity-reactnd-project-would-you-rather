import React from 'react'
import ReactDOM from 'react-dom'
import logger from 'redux-logger'
import './index.css'
import App from './components/App'
import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers }from 'redux'
import authedUser from './reducers/authedUser'
import users from './reducers/users'
import questions from './reducers/questions'
import loadingBarReducer from 'react-redux-loading'
import thunkMiddleware from 'redux-thunk'
//import logger from './middleware/logger'

const store = createStore(combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
}), applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)