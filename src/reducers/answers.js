import { ANSWER_QUESTION } from '../action/answers'
import questions from './questions'

export default function answers(state = {}, action) {
    switch(action.type) {
        case ANSWER_QUESTION:
            const { authedUser, qid, answer } = action.answer
            const { user } = state.users[authedUser]
            return {
                // todo: add the answered question to the user
                ...state,
                [authedUser]: {
                    ...user,
                    answers:{
                        ...user.answers,
                        [qid]:answer
                    }
                },
                [qid]: {
                    ...questions[qid],
                    [answer]:{
                        ...questions[qid][answer],
                        votes:questions[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}

// answers: {
//     "xj352vofupe1dqz9emx13r": 'optionOne',
//     "vthrdm985a262al8qx3do": 'optionTwo',
//     "6ni6ok3ym7mf1p33lnez": 'optionTwo'
//   }

//   "8xf0y6ziyjabvozdd253nd": {
//     id: '8xf0y6ziyjabvozdd253nd',
//     author: 'sarahedo',
//     timestamp: 1467166872634,
//     optionOne: {
//       votes: ['sarahedo'],
//       text: 'have horrible short term memory',
//     },
//     optionTwo: {
//       votes: [],
//       text: 'have horrible long term memory'
//     }
//   },

