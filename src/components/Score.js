import React, { Component } from 'react'
import { connect } from 'react-redux'

class Score extends Component {
    render() {
        const { user } = this.props
        const answeredNum = Object.keys(user.answers).length
        const questionsNum = user.questions.length
        const total = answeredNum + questionsNum
        return (
            <div id='main' className='score'>
                <div>
                <img className='avatar' src={user.avatarURL} alt = {`Avatar of ${user.name}`} width="50" height="50" />
                </div>
                <div className='center'>
                    <h3>{`${user.name}`}</h3>
                    <div>
                        <span>Answered questions: </span> 
                        <span>{`${answeredNum}`}</span>
                    </div>
                    <br/>
                    <div>
                        <span>Created questions: </span> 
                        <span>{`${questionsNum}`}</span>
                    </div>
                    <div>
                        <br/>
                    <span>Score</span>
                    <span className='circle'>{total}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Score