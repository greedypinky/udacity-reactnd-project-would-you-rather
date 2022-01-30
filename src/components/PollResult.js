import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollResult extends Component {
   
    calculatePercentage(option, question, numUsers) {
        const result = question[option].votes.length === 0 || numUsers === 0 ? 0 : question[option].votes.length / numUsers
        if (result === 0) 
            return 0 
        else {
        return (result * 100).toFixed(2)
        }
     }

    render() {
        const {author, question, users } = this.props
        const numUsers = Object.keys(users).length
        const optionOnePercentage = this.calculatePercentage("optionOne", question, numUsers)
        const optionTwoPercentage = this.calculatePercentage("optionTwo", question, numUsers)

        return (
            <div className='center'>
                <h3>{`Asked by ${author.name}`}</h3>
                <br></br>
                <img className='Avatar' src={author.avatarURL} alt = {`Avatar of ${author.name}`} width="50" height="50" />
                 <div className='question-info'>
                     <span>Results:</span>
                     <div>
                        <p>{ question["optionOne"].text}</p> 
                        <div class="w3-border">
                            <div class="w3-container w3-blue w3-center" style={{width:optionOnePercentage + "%"}}>{`${optionOnePercentage}%`}</div>
                        </div>
                        <p>{`${optionOnePercentage}%`}</p>
                        <p>{`${question["optionOne"].votes.length} out of ${numUsers}`}</p>
                      </div>
                      <div>
                        <p>{ question["optionTwo"].text}</p> 
                        <div class="w3-border">
                            <div class="w3-container w3-red w3-center" style={{width: optionTwoPercentage + "%"}}>{`${optionTwoPercentage}%`}</div>
                        </div>
                        <p>{`${optionTwoPercentage}%`}</p>
                         <p>{`${question["optionTwo"].votes.length} out of ${numUsers}`}</p>
                      </div>
                 </div>
         </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const params = props.match.params
    const question = !questions[params.id] ? questions.slice(-1) : questions[params.id]
    const author = users[question.author]
    const user = users[authedUser]
    return {
        authedUser:user,
        question: question,
        author : author,
        users: users
    }
}

export default connect(mapStateToProps)(PollResult)
