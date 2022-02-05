import { Component } from "react";
import { connect } from 'react-redux'
import { Redirect } from "react-router";
import PollResult from "../components/PollResult"
import AnswerQuestion from "../components/AnswerQuestion"

class QuestionDetails extends Component {
    render() {
        let { questions, user, question_id } = this.props
        const question = questions[question_id]
        // convert to boolean true if non-empty string
        const answered = !!user.answers[question_id]
        if (!question)
            //Render 404 or Redirect to 404
            return (<Redirect to='*' />)
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
