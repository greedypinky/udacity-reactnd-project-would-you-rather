import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from '../components/Question'

class Home extends Component {
    state = {
        loadUnanswered: true
    }

    handleOnTab = (e, tab) => {
        if (tab === 1) {
            console.log("tab 1 is pressed")
            this.setState({
                loadUnanswered: true
            })
        } else {
            console.log("tab 2 is pressed")
            this.setState({
                loadUnanswered: false
            })
        }
    }

    render() {
        const { answeredIds, unansweredIds } = this.props
        const answeredUI = (
            <ul className='dashboard-list'>
                {answeredIds.map((id) => (
                    <li key={id}>
                        <Question id={id} />
                    </li>
                ))}
            </ul>
        )
        const unansweredUI = (
            <ul className='dashboard-list'>
                {unansweredIds.map((id) => (
                    <li key={id}>
                        <Question id={id} />
                    </li>
                ))}
            </ul>
        )

        return (
            <div>
                <div className='center'>
                    <button type='button' onClick={(e) => this.handleOnTab(e, 1)}>Unanswered Questions</button>
                    <button type='button' onClick={(e) => this.handleOnTab(e, 2)}>Answered Questions</button>
                </div>
                {this.state.loadUnanswered === true ? unansweredUI : answeredUI}
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    const user = users[authedUser]

    const questionsIds = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const answeredQuestions = user.answers
    const answeredIds = Object.keys(answeredQuestions)
    const sortedAnsweredId = questionsIds.filter((q) => answeredIds.includes(q))
    const unansweredIds = questionsIds.filter((q) => !sortedAnsweredId.includes(q))
    return {
        loginUser: user,
        answeredIds: sortedAnsweredId,
        unansweredIds: unansweredIds,
    }
}

export default connect(mapStateToProps)(Home)
