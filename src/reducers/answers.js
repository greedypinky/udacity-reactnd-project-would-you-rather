import { ANSWER_QUESTION } from '../action/answers'

export default function answers(state = [], action) {
    switch(action.type) {
        case ANSWER_QUESTION:
            const { authedUser, qid, answer } = action.answer
            let newAnswer = {}
            newAnswer = {
                ...state.users[authedUser].answers,
                [qid]:answer
            }
            return {
                // todo: add the answered question to the user
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers:{
                        ...state.users[authedUser].answers,
                        [qid]:answer
                    }
                },
                [qid]: {
                    ...state.questions[qid],
                    [answer]:{
                        ...state.questions[qid][answer],
                        votes:state.questions[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}

