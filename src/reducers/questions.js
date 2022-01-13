import { RECEIVE_QUESTIONS , ADD_QUESTION } from '../action/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const { question } = action
            const { author} = question.author
            return {
                ...state,
                [question.id]: question,
                [author]: {
                    ...state.users[author],
                    questions: state.users[author].questions.concat([question.id])
                }
            }
        default:
            return state
    }
}