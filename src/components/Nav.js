import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { handleLogout } from '../action/shared';

class Nav extends Component {
    handleLogout = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(handleLogout())
    }
    render() {
        const { user } = this.props
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" exact activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" exact activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>
                    {user && (
                        <div className='form-inline'>
                            <span>{`Hello, ${user.name}`} <img className='Avatar' src={user.avatarURL} alt={`Avatar of ${user.name}`} width="20" height="20" /></span>
                            <form className='form-inline' onSubmit={this.handleLogout}>
                                <button
                                    type='submit' >
                                    Logout
                                    </button>
                            </form>
                        </div>
                    )}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(Nav)