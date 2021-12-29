import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer} from '../utils/_DATA' 


export function getInitialData() {
    return Promise.all([getUsers(), getQuestions()])
    .then(([users,questions]) => ({users,questions})) 
}

function getUsers() {
    return _getUsers()
}

function getQuestions(){
    return _getQuestions()
}

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(answer) {
    return _saveQuestionAnswer(answer)
}


