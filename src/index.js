import React from 'react'
import ReactDOM from 'react-dom'
import logger from 'redux-logger'
import './index.css'
import App from './components/App'
import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers }from 'redux'
import loginUser  from './reducers/loginUser'
import users from './reducers//users'
import questions from './reducers/questions'
import answers from './reducers/answers'
import loadingBarReducer from 'react-redux-loading'
import thunkMiddleware from 'redux-thunk'
//import logger from './middleware/logger'

const store = createStore(combineReducers({
  loginUser,
  users,
  questions,
  answers,
  loadingBar: loadingBarReducer,
}), applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)

//ReactDOM.render(<App />, document.getElementById('root'))