import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { saveQuestion } from '../utils/api'

export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIEVE_QUESTIONS'
export const UPDATE_QUESTION_VOTE = 'UPDATE_QUESTION_VOTE'
export const UPDATE_AUTHOR_QUESTION = 'UPDATE_AUTHOR_QUESTION'

// question = { optionOneText, optionTwoText, author }
export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function updateAuthorQuestion(question) {
    return {
        type: UPDATE_AUTHOR_QUESTION,
        question: {
            id: question.id,
            author: question.author
        }
    }
}

export function receivedQuestion(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function updateQuestionVote(question) {
    return {
        type: UPDATE_QUESTION_VOTE,
        question,
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const author = authedUser
        dispatch(showLoading())
        return saveQuestion({ optionOneText, optionTwoText, author })
            .then((formattedQuestion) => dispatch(addQuestion(formattedQuestion)))
            .then((action) => dispatch(updateAuthorQuestion(action.question)))
            .then(() => dispatch(hideLoading()))
    }

}