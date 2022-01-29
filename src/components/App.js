import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData, handleLogin } from '../action/shared'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Home  from '../components/Home'
import Leaderboard from '../components/Leaderboard'
import NewQuestion from '../components/Newquestion'
import AnswerQuestion from '../components/AnswerQuestion'
import Nav from '../components/Nav'
import PollResult from '../components/PollResult'

class App extends Component {
    state = {
        loginUser:''
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData()) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { loginUser } = this.state
        const { dispatch } = this.props
        // update the store's state 
        dispatch(handleLogin(loginUser))
        
      }

    handleSelect = (e) => {
        const authedUser = e.target.value
        this.setState(()=>({
            loginUser:authedUser
        }))
    }

    render() {
        const login = (
            <div>
            <h3 className='center'>Welcome to the Signin</h3>
            <form className='new-tweet' onSubmit={this.handleSubmit}>
                <select name="login" id="login" onChange={this.handleSelect}>
                    <option value="sarahedo">Sarah Edo</option>
                    <option value="tylermcginnis">Tyler McGinnis</option>
                    <option value="johndoe">John Doe</option>
                </select>
                <button
                    className='btn'
                    type='submit' >
                    Sign In
                </button>
            </form>
         </div> 
        );
        return (
            <Router>
            <div className='Container'>
                <Nav />
                    {this.props.login === true ?
                        login
                        : <div>
                            <Route path='/' exact component={Home} />
                            <Route path='/add' exact component={NewQuestion} />
                            <Route path='/leaderboard' exact component={Leaderboard} />
                            <Route path='/question/:id' exact component={AnswerQuestion} />
                            <Route path='/result/:id' exact component={PollResult} />
                        </div>
                    }
            </div>
            </Router>
        )
    }
}


// 1. the caller will pass in the state by const state = getState();
// 2. { authedUser } - extract from state
function mapStateToProps({authedUser}) {
    return {
        login: authedUser === null
    }
}

export default connect(mapStateToProps)(App)
