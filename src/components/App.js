import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData, handleLogin } from '../action/shared'

class App extends Component {
    state = {
        loginUser: '',
        toHome: false,
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
        this.setState(() => ({
          toHome: loginUser? false : true,
        }))
      }

    handleSelect = (e) => {
        const authedUser = e.target.value
        this.setState(()=>({
            loginUser:authedUser
        }))
    }

    render() {
        return (
            <div>
                 { 
                 // login if false 
                 this.state.toHome === false ?
                 <div>
                    <h3 className='center'>Welcome to the Signin</h3>
                    <form className='new-tweet' onSubmit={this.handleSubmit}>
                        <select name="login" id="login" onSelect={this.handleSelect}>
                            <option value="sarahedo">Sarah Edo</option>
                            <option value="stylermcginnis">Tyler McGinnis</option>
                            <option value="johndoe">John Doe</option>
                        </select>
                        <button
                            className='btn'
                            type='submit'>
                            Sign In
                        </button>
                    </form>
                 </div> 
                : <div> after login route to Home</div>
                }
            </div>
        )
    }
}


// 1. the caller will pass in the state by const state = getState();
// 2. { authedUser } - this will extract the tweet.
function mapStateToProps({authedUser}) {
    return {
        // show login page if
        // login: authedUser === null
    }
}

export default connect()(App)

      //    <Router> 
        //            <Nav/>
        //            {this.props.login} === false
        //            ? <div>
                        //   <p>Require to login</p>  
                        // </div>
        //            :<div>
        //             <Route path='/' exact component={Home} />
        //             <Route path='/newquestion' exact component={NewQuestion} />
        //             <Route path='/leaderboard' exact component={LeaderBoard} />
        //             </div> 
        //    </Router>
