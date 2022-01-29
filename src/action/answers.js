import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { saveQuestionAnswer } from '../utils/api'

export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function answerQuestion(answer) {
    return {
        type:ANSWER_QUESTION,
        answer,
    }
}

export function handleAnswerQuestion(qid, answer) {
    // passed from the store
    // return (dispatch, getState) => {
    //     const { authedUser , users, questions} = getState()
    //     dispatch(showLoading())
    //     return saveQuestionAnswer({ authedUser, qid, answer })
    //     .then(()=>dispatch(answerQuestion({ authedUser, qid, answer })))
    //     .then(()=>dispatch(hideLoading()))
    // }
}

