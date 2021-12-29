import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { ADD_QUESTION } from './questions'
import { answer } from '../reducers/answers'
import { saveQuestionAnswer } from '../utils/api'

export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function answerQuestion(answer) {
    return {
        type:ADD_QUESTION,
        answer,
    }
}

export function handleAnswerQuestion(qid, answer) {
    // passed from the store
    return (dispatch, getState) => {
        const { author } = getState()
        dispatch( showLoading())
        saveQuestionAnswer({ author, qid, answer })
        .then(()=>dispatch(answer({ author, qid, answer })))
        .then(()=>dispatch(hideLoading()))
    }
}

