import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../action/answers'

class AnswerQuestion extends Component {

    state = {
        option : ''
    }

    handleSubmit = (e, qid) => {
        // dispatch(handleAddAnswer)   
        const selectedOption = document.querySelector('input[name = option]:checked').value; 
        const { dispatch } = this.props
        const { option } = this.state
        dispatch(handleAnswerQuestion(qid, selectedOption))
    }

    selectOption(){
        const selectedOption = document.querySelector('input[name = option]:checked').value;
        this.setState(
            {
                option:selectedOption
            }
        )
    }

    render() {
        const { authedUser, author, question } = this.props
        const option1 = question["optionOne"].text
        const option2 = question["optionTwo"].text
        return (
         <div>
            <div className = 'question'>
                <h3>{`${author.name} ask:`}</h3>
                <br></br>
                <img className='Avatar' src={author.avatarURL} alt = {`Avatar of ${author.name}`} width="50" height="50" />
                 <div className='question-info'>
                     <span>Would you rather</span>
                     <div>
                        <input type='radio' name='option' value ='optionOne'/>
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

export default connect(mapStateToProps)(AnswerQuestion)