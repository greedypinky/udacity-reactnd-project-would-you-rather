import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { saveQuestion } from '../utils/api'

export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIEVE_QUESTIONS'

// question = { optionOneText, optionTwoText, author }
export function addQuestion(question) {
    return {
        type:ADD_QUESTION,
        question
    }
}

export function receivedQuestion(questions) {
    return {
        type:RECEIVE_QUESTIONS,
        questions
    }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {author} = getState()
        dispatch(showLoading())
        return saveQuestion({optionOneText, optionTwoText, author})
        .then((formattedQuestion) => dispatch(addQuestion(formattedQuestion)))
        .then(()=> dispatch(hideLoading()))
    }

}