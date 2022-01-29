import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { getInitialData }  from '../utils/api'
import { receiveUsers} from '../action/users'
import { receivedQuestion } from '../action/questions'
import { setLoginUser} from '../action/authedUser'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({users,questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receivedQuestion(questions));
            dispatch(hideLoading());
        })
    }
}

export function handleLogin(AUTHED_ID) {
    return (dispatch, getstore) => {
        dispatch(showLoading());
        dispatch(setLoginUser(AUTHED_ID));
        console.log(getstore());
        dispatch(hideLoading());
    }

}

export function handleLogout() {
    return (dispatch) => {
        dispatch(setLoginUser(null));
    }   
}


