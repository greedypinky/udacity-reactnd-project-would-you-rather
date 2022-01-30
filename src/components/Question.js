import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Question extends Component {
    
   handleViewPoll = (e, isAnswered) => {
       // todo: onClick to navigate to load the Poll Details
       e.preventDefault()
       const { question } = this.props
       // check how to navigate if answered and not answered
       if (!isAnswered) {
        this.props.history.push(`/question/${question.id}`)
       } else {
        this.props.history.push(`/result/${question.id}`)
       }
   }

   render() {
       const { authedUser, author, question } = this.props
       const option = authedUser.answers[question.id]
       const isAnswered = option !== undefined
       return (
        <div>
           <div className = 'question'>
           <   img className='avatar' src={author.avatarURL} alt = {`Avatar of ${author.name}`} width="50" height="50" />
               <h3 className='center'>{`${author.name} ask:`}</h3>
               <br></br>
                <div className='question-info'>
                    <span>Would you rather</span>
                     <p>{ question["optionOne"].text}</p> 
                        <span> OR </span>
                     <p>{ question["optionTwo"].text}</p> 
                        <button className='btn' type='submit' onClick={(e) => {this.handleViewPoll(e, isAnswered)}}>
                            View Poll
                        </button>
                </div>
           </div>
        </div>
       )
   }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]
    const author = users[question.author]
    const user = users[authedUser]
    return {
        authedUser:user,
        question: question,
        author : author,
    }
}

export default withRouter(connect(mapStateToProps)(Question))

