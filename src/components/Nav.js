import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { handleLogout } from '../action/shared';

class Nav extends Component {
    handleLogout = (e) => {
        const { dispatch } = this.props
        dispatch(handleLogout)
    }
    render() {
        const { user } = this.props
        return(
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/newquestion" exact activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" exact activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>
                    <li></li>
                    {user && (
                        <div>
                            <li>
                                <span>{`Hello, ${user.name}`}
                                <img className='Avatar' src={user.avatarURL} alt = {`Avatar of ${user.name}`} width="20" height="20" />
                                </span>
                                <span>Logout</span>
                            </li>
                        </div>
                    )} 
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(Nav)