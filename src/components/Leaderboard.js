import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from '../components/Score'

class Leaderboard extends Component {
    render() {
        return (
            <div>
                <ul className='dashboard-list'>
                    {Object.values(this.props.score).map((username) => (
                        <li key={username}>
                            <Score user={this.props.users[username]} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    // construct new object with score
    // userId:score
    let score = {}
    Object.keys(users).forEach(userId => {
        const answeredNum = Object.keys(users[userId].answers).length
        const questionsNum = users[userId].questions.length
        score[userId] = answeredNum + questionsNum
    })
    // sort the score
    const sortedScore = Object.keys(score).sort((a, b) => score[b] - score[a])

    return {
        users: users,
        score: sortedScore,
    }
}

export default connect(mapStateToProps)(Leaderboard)