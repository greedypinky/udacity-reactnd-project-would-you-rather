import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from '../components/Score'

class Leaderboard extends Component {
    render() {
        const { userobject } = this.props.users
        return (
        <div>
         <ui className='dashboard-list'>
             {Object.keys(this.props.users).map((username) => (
                     <li key={this.props.users[username].id}>
                        <Score user={this.props.users[username]}/>
                     </li>
                 ))}
         </ui>
         </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users:users
    }
}

export default connect(mapStateToProps)(Leaderboard)