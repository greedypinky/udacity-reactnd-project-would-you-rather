import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../action/users'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class AnswerQuestion extends Component {

    handleSubmit = (e, qid) => {
        // dispatch(handleAddAnswer)   
        const selectedOption = document.querySelector('input[name = option]:checked').value; 
        const { dispatch } = this.props
        dispatch(handleAnswerQuestion(qid, selectedOption))
        // todo: Navigate to Results.js
        //return <Redirect to='/result'/>
        this.props.history.push(`/result/${qid}`)
    }

    render() {
        const { authedUser, author, question } = this.props
        const option1 = question["optionOne"].text
        const option2 = question["optionTwo"].text
        return (
         <div>
            <div className = 'question'>
                <img className='Avatar' src={author.avatarURL} alt = {`Avatar of ${author.name}`} width="50" height="50" /> 
                <h3>{`${author.name} ask:`}</h3>
                <br></br>
                 <div className='question-info'>
                     <span>Would you rather</span>
                     <div>
                        <input type='radio' name='option' value ='optionOne' checked="checked"/>
                        <label>{option1}</label>
                    </div>
                    <div>
                        <input type='radio' name='option' value ='optionTwo'/>
                        <label>{option2}</label>
                    </div>
                     <button className='btn' type='submit' onClick={(e) => {this.handleSubmit(e, question.id)}}>
                           Submit
                     </button>    
                 </div>
            </div>
            </div>
        )
    }

}

function mapStateToProps({authedUser, users, questions}, props) {
    console.log("mapStateToProps:" + authedUser)
    const params = props.match.params
    const question = questions[params.id]
    const author = users[question.author]
    const user = users[authedUser]
    return {
        authedUser:user,
        question: question,
        author : author,
    }
}

export default withRouter(connect(mapStateToProps)(AnswerQuestion))