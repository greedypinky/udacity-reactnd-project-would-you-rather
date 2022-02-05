import { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import PollResult from "../components/PollResult"
import AnswerQuestion from "../components/AnswerQuestion"

class QuestionDetails extends Component {
    render() {
        let { questions, user, question_id } = this.props
        const question = questions[question_id]
        // convert to boolean true if non-empty string
        const answered = !!user.answers[question_id]
        if (!question)
            // Render 404 or Redirect to 404
            return (<div className='center'>
                <h1>Invalid Page:404 - Not Found!</h1>
                <Link to="/">Go back to Home</Link>
            </div>)
        else if (answered)
            return (<PollResult id={question_id} />)
        else
            return (<AnswerQuestion id={question_id} />)
    }
}


function mapStateToProps({ authedUser, questions, users }, props) {
    const params = props.match.params
    const user = users[authedUser]
    return {
        questions: questions,
        user: user,
        question_id: params.id
    }
}

export default connect(mapStateToProps)(QuestionDetails)
