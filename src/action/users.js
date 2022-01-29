import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { saveQuestionAnswer } from '../utils/api'
//import { updateQuestionVote } from '../action/questions'

export const RECEIVE_USERS =  'RECEIVE_USERS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const UPDATE_QUESTION_VOTE = 'UPDATE_QUESTION_VOTE'

export function receiveUsers(users) {
    return {
        type:RECEIVE_USERS,
        users,
    }
}

export function answerQuestion(answer) {
    console.log(answer)
    return {
        type:ANSWER_QUESTION,
        answer,
    }
}

export function updateQuestionVote(question) {
    return {
        type:UPDATE_QUESTION_VOTE,
        question,
    }
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestionAnswer({ authedUser, qid, answer })
        .then(()=>dispatch(answerQuestion({ authedUser, qid, answer })))
        .then(()=>dispatch(updateQuestionVote({ authedUser, qid, answer })))
        .then(()=>dispatch(hideLoading()))
    }
}

