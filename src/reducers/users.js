import { RECEIVE_USERS } from '../action/users'
import { ANSWER_QUESTION } from '../action/users'
import { UPDATE_AUTHOR_QUESTION } from '../action/questions'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION:
            const { authedUser, qid, answer } = action.answer
            let newAnswer = {}
            //  "xj352vofupe1dqz9emx13r": 'optionOne'
            const answers = state[authedUser].answers
            newAnswer = {
                ...answers,
                [qid]: answer
            }
            return {
                // todo: add the answered question to the user
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: newAnswer
                }
            }
        case UPDATE_AUTHOR_QUESTION:
            const { id, author } = action.question
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([id])
                }
            }
        default:
            return state
    }

}